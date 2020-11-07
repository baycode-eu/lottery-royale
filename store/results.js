export const state = () => ({
  results: null,
})

export const mutations = {
  setResults(state, results) {
    state.results = results;
  }
}

export const getters = {
  results: () => state.results
}

export const actions = {
  async getResults() {

  },

  clearResults({commit}){
    commit('setResults', null)
  },

  async reloadResults({commit}){
    const results = await this.getResults()

    commit('setResults', null)
  },
}


