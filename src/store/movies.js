import axios from '../plugins/axios'

const initialState = () => ({
  popularMovies: [],
  freeMovies: [],
  lastTrailers: [],
  trendingMovies: []
})

export default {
  namespaced: true,
  state: initialState,
  getters: {
    popularMovies: (state) => state.popularMovies,
    freeMovies: (state) => state.freeMovies,
    lastTrailers: (state) => state.lastTrailers,
    trendingMovies: (state) => state.trendingMovies
  },
  mutations: {
    resetModule (state) {
      Object.assign(state, initialState())
    },
    setPopularMovies (state, payload) {
      state.popularMovies = payload
    },
    setFreeMovies (state, payload) {
      state.freeMovies = payload
    },
    setLastTrailers (state, payload) {
      state.lastTrailers = payload
    },
    setTrendingMovies (state, payload) {
      state.trendingMovies = payload
    }
  },
  actions: {
    resetState ({ commit }) {
      commit('resetModule')
    },
    fetchPopularMovies ({ commit }) {
      axios.get('/movie/popular?api_key=361f6506acd5c4f91fad6237a00776eb&language=en-US&page=1')
        .then(response => {
          commit('setPopularMovies', response.data.results)
        })
    },
    fetchFreeMovies ({ commit }) {
      axios.get('/movie/popular?api_key=361f6506acd5c4f91fad6237a00776eb&language=en-US&page=1')
        .then(response => {
          console.log('🚀 ~ file: movies.js ~ line 50 ~ fetchFreeMovies ~ response.data.results', response.data.results)
          commit('setFreeMovies', response.data.results)
        })
    },
    fetchLastTrailers ({ commit }) {
      axios.get('/movie/popular?api_key=361f6506acd5c4f91fad6237a00776eb&language=en-US&page=1')
        .then(response => {
          commit('setLastTrailers', response.data.results)
        })
    },
    fetchTrendingMovies ({ commit }) {
      axios.get('/movie/top_rated?api_key=361f6506acd5c4f91fad6237a00776eb&language=en-US&page=1')
        .then(response => {
          commit('setTrendingMovies', response.data.results)
        })
    }
  }
}
