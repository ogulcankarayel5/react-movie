import { AxiosRequestConfig } from 'axios'
import axiosInstance from 'services/client'
import { IRequestConfig } from 'services/types'
//https://api.themoviedb.org/3/movie/popular?api_key=2e01f17c6d8c7c66bcc4bc58c79a5e97
export default {
  makeRequest: async <T>(
    parameters: IRequestConfig,
    endpoint: string
  ): Promise<T> => {
    return new Promise((resolve, reject) => {
      const { method, params = {} } = parameters
      const { REACT_APP_API_KEY } = process.env

      const queryParams = getParams(params)

      const config: AxiosRequestConfig = {
        method,
        url: `${endpoint}?key=${REACT_APP_API_KEY}${queryParams}`,
      }

      axiosInstance(config)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const getParams = (params = {}) => {
  let queryParams = ''

  if (Object.keys(params).length > 0) {
    queryParams = `&${Object.entries(params)
      .map(([key, value]) => {
        return `${key}=${value}`
      })
      .join('&')}`
  }

  return queryParams
}
