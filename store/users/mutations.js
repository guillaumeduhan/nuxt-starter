import Vue from 'vue'

export default {
  SET: (state, payload) => {
    if (!payload && !payload.id) { return }
    const el = state[payload.id]
    Vue.set(state, payload.id, el ? { ...el, ...payload } : payload)
  }
}
