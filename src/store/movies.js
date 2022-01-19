import axios from '../plugins/axios'

const initialState = () => ({
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  trendingMovies: []
})

export default {
  namespaced: true,
  state: initialState,
  getters: {
    popularMovies: (state) => state.popularMovies,
    topRatedMovies: (state) => state.topRatedMovies,
    upcomingMovies: (state) => state.upcomingMovies,
    trendingMovies: (state) => state.trendingMovies
  },
  mutations: {
    resetModule (state) {
      Object.assign(state, initialState())
    },
    setPopularMovies (state, payload) {
      state.popularMovies = payload
    },
    setTopRatedMovies (state, payload) {
      state.topRatedMovies = payload
    },
    setUpcomingMovies (state, payload) {
      state.upcomingMovies = payload
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
        .catch()
    },
    fetchTopRatedMovies ({ commit }) {
      axios.get('/movie/top_rated?api_key=361f6506acd5c4f91fad6237a00776eb&language=en-US&page=1')
        .then(response => {
          commit('setTopRatedMovies', response.data.results)
        })
        .catch()
    },
    fetchUpcomingMovies ({ commit }) {
      axios.get('/movie/upcoming?api_key=361f6506acd5c4f91fad6237a00776eb&language=en-US&page=1')
        .then(response => {
          commit('setUpcomingMovies', response.data.results)
        })
        .catch()
    },
    fetchTrendingMovies ({ commit }) {
      axios.get('/movie/now_playing?api_key=361f6506acd5c4f91fad6237a00776eb&language=en-US&page=1')
        .then(response => {
          commit('setTrendingMovies', response.data.results)
        })
        .catch()
    }
  }
}
