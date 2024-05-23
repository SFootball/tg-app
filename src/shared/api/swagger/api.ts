/* tslint:disable */
/* eslint-disable */
/**
 * API Documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface CreatePlayerParams
 */
export interface CreatePlayerParams {
    /**
     * 
     * @type {string}
     * @memberof CreatePlayerParams
     */
    'tg_username'?: string;
}
/**
 * 
 * @export
 * @interface PlayerSchema
 */
export interface PlayerSchema {
    /**
     * 
     * @type {string}
     * @memberof PlayerSchema
     */
    'birthday'?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerSchema
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerSchema
     */
    'id'?: string;
    /**
     * 
     * @type {object}
     * @memberof PlayerSchema
     */
    'physical_characteristics'?: object;
    /**
     * 
     * @type {object}
     * @memberof PlayerSchema
     */
    'psychological_characteristics'?: object;
    /**
     * 
     * @type {string}
     * @memberof PlayerSchema
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerSchema
     */
    'user_id'?: string;
}
/**
 * 
 * @export
 * @interface RefLink
 */
export interface RefLink {
    /**
     * 
     * @type {string}
     * @memberof RefLink
     */
    'id_string'?: string;
}
/**
 * 
 * @export
 * @interface RegisterUserByTgIdParams
 */
export interface RegisterUserByTgIdParams {
    /**
     * 
     * @type {number}
     * @memberof RegisterUserByTgIdParams
     */
    'parent_tg_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterUserByTgIdParams
     */
    'tg_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterUserByTgIdParams
     */
    'tg_username'?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'midle_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'parent_id'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'parent_tg_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'password'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'tg_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'tg_username'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'ton_wallet_address'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'username'?: string;
}
/**
 * 
 * @export
 * @interface UserGetReferralsQueryParams
 */
export interface UserGetReferralsQueryParams {
    /**
     * 
     * @type {number}
     * @memberof UserGetReferralsQueryParams
     */
    'limit'?: number;
    /**
     * 
     * @type {number}
     * @memberof UserGetReferralsQueryParams
     */
    'offset'?: number;
    /**
     * 
     * @type {number}
     * @memberof UserGetReferralsQueryParams
     */
    'tg_id'?: number;
}

/**
 * PlayersApi - axios parameter creator
 * @export
 */
export const PlayersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreatePlayerParams} [createPlayerParams] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPlayersCreateOnePost: async (createPlayerParams?: CreatePlayerParams, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/players/create-one`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createPlayerParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPlayersGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/players`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlayersApi - functional programming interface
 * @export
 */
export const PlayersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlayersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreatePlayerParams} [createPlayerParams] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlayersCreateOnePost(createPlayerParams?: CreatePlayerParams, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerSchema>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPlayersCreateOnePost(createPlayerParams, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayersApi.apiPlayersCreateOnePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPlayersGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PlayerSchema>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPlayersGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayersApi.apiPlayersGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PlayersApi - factory interface
 * @export
 */
export const PlayersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlayersApiFp(configuration)
    return {
        /**
         * 
         * @param {PlayersApiApiPlayersCreateOnePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPlayersCreateOnePost(requestParameters: PlayersApiApiPlayersCreateOnePostRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PlayerSchema> {
            return localVarFp.apiPlayersCreateOnePost(requestParameters.createPlayerParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPlayersGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<PlayerSchema>> {
            return localVarFp.apiPlayersGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for apiPlayersCreateOnePost operation in PlayersApi.
 * @export
 * @interface PlayersApiApiPlayersCreateOnePostRequest
 */
export interface PlayersApiApiPlayersCreateOnePostRequest {
    /**
     * 
     * @type {CreatePlayerParams}
     * @memberof PlayersApiApiPlayersCreateOnePost
     */
    readonly createPlayerParams?: CreatePlayerParams
}

/**
 * PlayersApi - object-oriented interface
 * @export
 * @class PlayersApi
 * @extends {BaseAPI}
 */
export class PlayersApi extends BaseAPI {
    /**
     * 
     * @param {PlayersApiApiPlayersCreateOnePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayersApi
     */
    public apiPlayersCreateOnePost(requestParameters: PlayersApiApiPlayersCreateOnePostRequest = {}, options?: RawAxiosRequestConfig) {
        return PlayersApiFp(this.configuration).apiPlayersCreateOnePost(requestParameters.createPlayerParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayersApi
     */
    public apiPlayersGet(options?: RawAxiosRequestConfig) {
        return PlayersApiFp(this.configuration).apiPlayersGet(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersReferralIdGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/referral-id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UserGetReferralsQueryParams} [userGetReferralsQueryParams] Telegram id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersReferralsGet: async (userGetReferralsQueryParams?: UserGetReferralsQueryParams, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/referrals`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userGetReferralsQueryParams !== undefined) {
                for (const [key, value] of Object.entries(userGetReferralsQueryParams)) {
                    localVarQueryParameter[key] = value;
                }
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterUserByTgIdParams} [registerUserByTgIdParams] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersRegisterPost: async (registerUserByTgIdParams?: RegisterUserByTgIdParams, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerUserByTgIdParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.apiUsersGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersReferralIdGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RefLink>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersReferralIdGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.apiUsersReferralIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {UserGetReferralsQueryParams} [userGetReferralsQueryParams] Telegram id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersReferralsGet(userGetReferralsQueryParams?: UserGetReferralsQueryParams, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersReferralsGet(userGetReferralsQueryParams, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.apiUsersReferralsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {RegisterUserByTgIdParams} [registerUserByTgIdParams] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUsersRegisterPost(registerUserByTgIdParams?: RegisterUserByTgIdParams, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUsersRegisterPost(registerUserByTgIdParams, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.apiUsersRegisterPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<User>> {
            return localVarFp.apiUsersGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersReferralIdGet(options?: RawAxiosRequestConfig): AxiosPromise<RefLink> {
            return localVarFp.apiUsersReferralIdGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersApiApiUsersReferralsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersReferralsGet(requestParameters: UsersApiApiUsersReferralsGetRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<User>> {
            return localVarFp.apiUsersReferralsGet(requestParameters.userGetReferralsQueryParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersApiApiUsersRegisterPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUsersRegisterPost(requestParameters: UsersApiApiUsersRegisterPostRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.apiUsersRegisterPost(requestParameters.registerUserByTgIdParams, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for apiUsersReferralsGet operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersReferralsGetRequest
 */
export interface UsersApiApiUsersReferralsGetRequest {
    /**
     * Telegram id
     * @type {UserGetReferralsQueryParams}
     * @memberof UsersApiApiUsersReferralsGet
     */
    readonly userGetReferralsQueryParams?: UserGetReferralsQueryParams
}

/**
 * Request parameters for apiUsersRegisterPost operation in UsersApi.
 * @export
 * @interface UsersApiApiUsersRegisterPostRequest
 */
export interface UsersApiApiUsersRegisterPostRequest {
    /**
     * 
     * @type {RegisterUserByTgIdParams}
     * @memberof UsersApiApiUsersRegisterPost
     */
    readonly registerUserByTgIdParams?: RegisterUserByTgIdParams
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public apiUsersGet(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).apiUsersGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public apiUsersReferralIdGet(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).apiUsersReferralIdGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UsersApiApiUsersReferralsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public apiUsersReferralsGet(requestParameters: UsersApiApiUsersReferralsGetRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).apiUsersReferralsGet(requestParameters.userGetReferralsQueryParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UsersApiApiUsersRegisterPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public apiUsersRegisterPost(requestParameters: UsersApiApiUsersRegisterPostRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).apiUsersRegisterPost(requestParameters.registerUserByTgIdParams, options).then((request) => request(this.axios, this.basePath));
    }
}



