// const devBaseUrl = 'http://api.k780.com/'
const devBaseUrl = 'http://localhost:3001/'
const proBaseUrl = 'http:'

//process.env 返回的是个包含用户的环境信息，用来区分开发还是生产环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl;

export const TIMEOUT = 5000;