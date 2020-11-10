import Vuex from "vuex"
import { mount } from '@vue/test-utils'
import { createHttpLink } from 'apollo-link-http';
import fetch from "unfetch"
import Results from '~/pages/results'
import LandingPage from '~/pages/index'
import results from "../store/results";
import { ResultsApiImpl } from '~/api/resultsApi'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { GameTypes } from '~/enums/game-types'
require('dotenv').config()

const store = new Vuex.Store({
  modules: {
    results
  },
});

const graphQl = new ResultsApiImpl(
  new ApolloClient({
    link: createHttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      fetch: fetch
    }),
    cache: new InMemoryCache({
      addTypename: true
    })
  })
)

store.$graphql = graphQl

describe('ResultPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Results, {store})
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('ResultPage', () => {
  test('has title set', () => {
    const wrapper = mount(Results, {store})
    expect(wrapper.find('.page-title').text()).toBe("EuroJackpot Results")
  })
})

describe('LandingPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LandingPage, {
      store
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Store', () => {
  test('downloads results', async () => {
    await store.dispatch("results/reloadResults", {
      type: GameTypes.EUROJACKPOT,
      limit: 10
    })

    expect(store.getters['results/results']).toBeTruthy()
  })
})

