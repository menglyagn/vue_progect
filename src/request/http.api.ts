import { get, post } from './http.config'

export default {
    getIndex: (params = {}) => { return post('/app/Index/index', params) }
}