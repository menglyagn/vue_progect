import keepAlive from './keepAlive'

const store = {}
export const registerStore = () => {
  store.keepAlive = keepAlive()
}
export default store
