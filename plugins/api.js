import UsersService from '@/api/users'

export default function (ctx, inject) {
  const api = {
    users: new UsersService(ctx)
  }

  ctx.$api = api
  inject('api', api)
}
