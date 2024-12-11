import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export class BaseAxiosService {
  protected axios: AxiosInstance;

  constructor(axiosConfig: CreateAxiosDefaults) {
    this.axios = axios.create(axiosConfig);
  }
}
