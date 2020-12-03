import directive from './directive'
import service from './service'

export default {
  install(app) {
    app.use(directive)
  },
  directive,
  service
}

export function useLoading() {
  return service
}