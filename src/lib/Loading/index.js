import directive from './directive'

export default {
  install(app) {
    app.use(directive)
  },
  directive
}
