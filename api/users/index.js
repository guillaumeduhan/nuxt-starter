import { GET_USER } from '@/apollo/queries'

export default class UsersService {
  constructor (ctx) {
    this.ctx = ctx
    this.$axios = ctx.$axios
    this.store = ctx.store
    this.$apollo = ctx.app.apolloProvider.defaultClient
  }

  /**
 * Get a user by id
 * @param {*} { id  }
 */

  async getUser (id) {
    try {
      return await this.$apollo.query({
        query: GET_USER,
        variables: {
          id
        }
      })
    } catch (error) {
      // handling error
    }
  }
}
