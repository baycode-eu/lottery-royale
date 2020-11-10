export const state = () => ({
  results: null,
})

export const mutations = {
  setResults(state, results) {
    state.results = results;
  }
}

export const getters = {
  results: (state) => state.results
}

export const actions = {
  clearResults({commit}){
    commit('setResults', null)
  },

  async reloadResults({commit}, {type, limit}){
    const results = await this.$graphql.getResults(type, limit)
    commit('setResults', results)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

