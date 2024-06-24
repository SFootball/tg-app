import { axiosAuth } from "./authAxios";
import { Configuration } from "./swagger";
import {
  UsersApi,
  PlayersApi,
  TasksApi,
  AuthApi,
  AuthPrefixToken,
  GameApi,
} from "./swagger/api";

// const basePath = "http://localhost:5050";
const basePath = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;

// const configuration = new Configuration({
//   basePath,
// });

// export const usersApi = new UsersApi();
// export const usersApi = new UsersApi(configuration, basePath);

// export const playersApi = new PlayersApi();

// export const tasksApi = new TasksApi(configuration, basePath);

export class MainApi {
  basePath: string;
  accessToken: string | null;
  conf: Configuration;
  usersApi: UsersApi;
  playersApi: PlayersApi;
  tasksApi: TasksApi;
  authApi: AuthApi;
  gameApi: GameApi;
  constructor() {
    this.basePath = basePath;
    this.accessToken = "";
    let Authorization;
    if (isDev) {
      Authorization = `${AuthPrefixToken.DevToken} 530287867`;
    } else if (this.accessToken) {
      Authorization = `tma ${this.accessToken}`;
    }

    this.conf = new Configuration({
      basePath: this.basePath,
      accessToken: this.accessToken,
      baseOptions: {
        headers: {
          Authorization,
        },
      },
    });
    this.authApi = new AuthApi(this.conf, this.basePath, axiosAuth);
    this.usersApi = new UsersApi(this.conf, this.basePath, axiosAuth);
    this.playersApi = new PlayersApi(this.conf, this.basePath, axiosAuth);
    this.tasksApi = new TasksApi(this.conf, this.basePath, axiosAuth);
    this.gameApi = new GameApi(this.conf, this.basePath, axiosAuth);
  }

  setToken = (tmaToken: string) => {
    if (isDev) return;
    this.accessToken = tmaToken;
    const Authorization = `tma ${this.accessToken}`;
    this.conf.baseOptions.headers = {
      Authorization,
    };
    this.initApi();
  };

  initApi = () => {
    this.authApi = new AuthApi(this.conf, this.basePath, axiosAuth);
    this.usersApi = new UsersApi(this.conf, this.basePath, axiosAuth);
    this.playersApi = new PlayersApi(this.conf, this.basePath, axiosAuth);
    this.tasksApi = new TasksApi(this.conf, this.basePath, axiosAuth);
    this.gameApi = new GameApi(this.conf, this.basePath, axiosAuth);
  };

  // TODO make reset Auth jwt token after making ton auth on server in tma
  // resetAuthJwtTocken = () => {
  //   localStorage.removeItem(localStorageAuthTokenKey);
  //   this.authApi.apiAuthTonproofGeneratePayloadPost();
  //   this.init();
  // };
}

export const mainApi = new MainApi();
