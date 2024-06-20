import { axiosAuth } from "./authAxios";
import { Configuration } from "./swagger";
import {
  UsersApi,
  PlayersApi,
  TasksApi,
  AuthApi,
  AuthPrefixToken,
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
  constructor() {
    this.basePath = basePath;
    this.accessToken = "";
    let Authorization;
    if (isDev) {
      Authorization = `${AuthPrefixToken.Token} 530287867`;
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
    this.usersApi = new UsersApi(this.conf, this.basePath, axiosAuth);
    this.playersApi = new PlayersApi(this.conf, this.basePath, axiosAuth);
    this.tasksApi = new TasksApi(this.conf, this.basePath, axiosAuth);
    this.authApi = new AuthApi(this.conf, this.basePath, axiosAuth);
  }

  setToken = (tmaToken: string) => {
    this.accessToken = tmaToken;
    const Authorization = `tma ${this.accessToken}`;
    this.conf.baseOptions.headers = {
      Authorization,
    };
    this.initApi();
  };

  initApi = () => {
    this.usersApi = new UsersApi(this.conf, this.basePath, axiosAuth);
    this.playersApi = new PlayersApi(this.conf, this.basePath, axiosAuth);
    this.tasksApi = new TasksApi(this.conf, this.basePath, axiosAuth);
    this.authApi = new AuthApi(this.conf, this.basePath, axiosAuth);
  };

  // init = () => {
  //   this.accessToken = localStorage.getItem(localStorageAuthTokenKey) || "";
  //   const Authorization = this.accessToken
  //     ? `Bearer ${this.accessToken}`
  //     : undefined;
  //   this.conf = new Configuration({
  //     basePath: this.basePath,
  //     accessToken: this.accessToken,
  //     baseOptions: {
  //       headers: {
  //         Authorization,
  //       },
  //     },
  //   });
  //   this.usersApi = new UsersApi(this.conf, this.basePath, axiosAuth);
  //   this.playersApi = new PlayersApi(this.conf, this.basePath, axiosAuth);
  //   this.tasksApi = new TasksApi(this.conf, this.basePath, axiosAuth);
  //   this.authApi = new AuthApi(this.conf, this.basePath, axiosAuth);
  // };

  // resetAuthJwtTocken = () => {
  //   localStorage.removeItem(localStorageAuthTokenKey);
  //   this.authApi.apiAuthTonproofGeneratePayloadPost();
  //   this.init();
  // };
}

export const mainApi = new MainApi();
