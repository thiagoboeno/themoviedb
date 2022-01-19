<template>
  <section class="home">
    <section class="container">
      <div class="best-year">
        <div class="year">
          2021
        </div>

        <div class="dive-wrap">
          <h2 class="wrap">That's a Wrap</h2>

          <h3 class="dive">Let's dive into 2021's best and worst! →</h3>
        </div>

        <form class="search-group">
          <input class="search-field" type="text" placeholder="Buscar por um Filme, Série ou Pessoa...">

          <button class="search-cta" type="submit">Search</button>
        </form>
      </div>

      <section class="movies-section">
        <div class="movies-head">
          <h2 class="title">
            Os Mais Populares
          </h2>

          <movie-selector :items="popularProviders" />
        </div>

        <card-movie :movies="popularMovies" />
      </section>

      <section class="movies-section">
        <div class="movies-head">
          <h2 class="title">
            Grátis para Assistir
          </h2>

          <movie-selector :items="freeProviders" />
        </div>

        <card-movie :movies="freeMovies" />
      </section>

      <section class="movies-section">
        <div class="movies-head">
          <h2 class="title">
            Últimos Trailers
          </h2>

          <movie-selector :items="trailersProviders" />
        </div>

        <card-movie :movies="lastTrailers" />
      </section>

      <section class="movies-section trending">
        <div class="movies-head">
          <h2 class="title">
            Tendências
          </h2>

          <movie-selector :items="tendenciesProviders" />
        </div>

        <card-movie :movies="trendingMovies" />
      </section>

      <section class="join-today">
        <h2 class="title">Junte-se Hoje</h2>

        <div class="content">
          <div class="get-acess">
            <p class="description">Get access to maintain your own <em>custom personal lists</em>, <em>track what you've seen</em> and search and filter for <em>what to watch next</em>—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Disney Plus e Amazon Prime Video.</p>

            <button class="subscribe">
              Inscrever-se
            </button>
          </div>

          <ul>
            <li>Aproveite o TMDB sem propaganda</li>
            <li>Mantenha uma Watchlist pessoal</li>
            <li>Filtre por seus serviços de streaming e ache algo para assistir</li>
            <li>Marque os Filmes e Séries que você já viu</li>
            <li>Crie Listas personalizadas</li>
            <li>Contribua e melhore nosso banco de dados</li>
          </ul>
        </div>
      </section>

      <section class="leaders">
        <div class="title-summary">
          <h2 class="title">Líderes</h2>

          <div class="summary">
            <div class="edits">
              <div class="dot all" />

              <span class="edit-title">Total de Edições</span>
            </div>

            <div class="edits">
              <div class="dot week" />

              <span class="edit-title">Edições Nesta Edições</span>
            </div>
          </div>
        </div>

        <div class="content">
          <div
            v-for="(leader, index) in leaders"
            :key="index"
            class="data"
          >
            <div class="avatar">
              <img v-if="leader.image" :src="leader.image" alt="">

              <span v-else :class="`cropped ${leader.color}`">{{ leader.name[0].toUpperCase() }}</span>
            </div>

            <div class="details">
              <h3 class="name">
                {{ leader.name }}
              </h3>

              <div class="all">
                <b-progress :value="100" :max="100" :style="{ width: `${sizeAllBar(leader.all)}%` }" />

                <h4>{{ leader.all }}</h4>
              </div>

              <div class="week">
                <b-progress :value="100" :max="100" :style="{ width: `${sizeWeekBar(leader.week)}%` }" />

                <h4>{{ leader.week }}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import MovieSelector from '@/components/lists/movie-selector.vue'
import CardMovie from '@/components/cards/card-movie.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  components: {
    MovieSelector,
    CardMovie
  },

  data: () => ({
    popularProviders: [
      'Streaming',
      'Na TV',
      'Para Alugar',
      'Nos Cinemas'
    ],
    freeProviders: [
      'Filmes',
      'TV'
    ],
    trailersProviders: [
      'Streaming',
      'Na TV',
      'Para Alugar',
      'Nos Cinemas'
    ],
    tendenciesProviders: [
      'Hoje',
      'Nesta Semana'
    ],
    leaders: [
      { name: 'Samara', all: '2409792', week: '6800', color: 'purple' },
      { name: 'raze464', all: '236804', week: '5342', image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/swDbd2BrozDJwKFLEwuxWAXNdXy.jpg' },
      { name: 'PhantomRegiment', all: '10574', week: '5202', color: 'yellow' },
      { name: 'Banana', all: '1990972', week: '5127', image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/A1pIXQZD86MzfP5pvr37C68YiGv.jpg' },
      { name: 'audreyhankel', all: '93748', week: '4976', color: 'teal' },
      { name: 'Flr98', all: '12259', week: '4722', color: 'light-blue' },
      { name: 'pingu51', all: '206593', week: '4709', color: 'blue' },
      { name: 'Andreas Sellfors', all: '7630', week: '4099', image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/myGZow2U5Mh6uycsnIM4pJ3ZzrY.jpg' },
      { name: 'Classic Loki', all: '1758318', week: '4084', image: 'https://www.themoviedb.org/t/p/w64_and_h64_face/wCTUMiI1moBRr62QlTeg1m2IYuL.jpg' },
      { name: 'superboy97', all: '265795', week: '4051', color: 'pink' }
    ],
    maxAll: 0,
    maxWeek: 0
  }),

  computed: {
    ...mapGetters('movies', ['popularMovies', 'freeMovies', 'lastTrailers', 'trendingMovies'])
  },

  mounted () {
    this.initPage()

    this.leaders.map(leader => {
      this.maxAll = (parseInt(leader.all) > parseInt(this.maxAll)) ? parseInt(leader.all) : parseInt(this.maxAll)
      this.maxWeek = (parseInt(leader.week) > parseInt(this.maxWeek)) ? parseInt(leader.week) : parseInt(this.maxWeek)
    })
  },

  methods: {
    ...mapActions('movies', ['fetchPopularMovies', 'fetchFreeMovies', 'fetchLastTrailers', 'fetchTrendingMovies']),

    initPage () {
      this.fetchPopularMovies()
      this.fetchFreeMovies()
      this.fetchLastTrailers()
      this.fetchTrendingMovies()
    },
    sizeAllBar (value) {
      return `${parseInt(value) / parseInt(this.maxAll) * 100}`
    },
    sizeWeekBar (value) {
      return `${parseInt(value) / parseInt(this.maxWeek) * 100}`
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/pages/home';
</style>
