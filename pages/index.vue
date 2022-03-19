<template>
  <div>
    Welcome on Nuxt/Hasura starter.
    <p v-if="loading">
      Loading
    </p>
    <div v-else>
      <p v-if="user">
        {{ user }}
      </p>
      <p v-else>
        No user found.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      loading: false,
      user: undefined
    }
  },
  async mounted () {
    this.loading = true
    const user = await this.$api.users.getUser('3')
    this.user = user
    this.loading = false
  }
}
</script>
