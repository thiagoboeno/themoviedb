<template>
  <b-card-group deck>
    <b-card
      v-for="(movie, index) in movies"
      :key="index"
      :title="movie.original_title"
      :sub-title="movieDate(movie.release_date)"
      :img-src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      :img-alt="movie.original_title"
      img-top
      :class="['card-movie', { 'trailer': trailers }]"
      @mouseover="$emit('hover', movie.poster_path)"
    >
      <div v-if="trailers" class="player">
        <font-awesome-icon class="play" icon="play" />
      </div>

      <div v-else class="rating">
        <div class="progress" :style="progressColor(movie.vote_average * 10)">
          <b-card-text>
            {{ movie.vote_average * 10 }}

            <div class="percent">
              %
            </div>
          </b-card-text>
        </div>
      </div>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true
    },
    trailers: {
      type: Boolean,
      default: () => false
    }
  },

  watch: {
    movies () {
      if (this.trailers && this.movies) this.$emit('hover', this.movies[0].poster_path)
    }
  },

  methods: {
    movieDate (date) {
      return new Date(date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
    },
    progressColor (rating) {
      if (rating >= 70) {
        return `background: conic-gradient(#21d07a ${rating}%, #204529 ${rating}%);`
      } else if (rating >= 40) {
        return `background: conic-gradient(#d2d531 ${rating}%, #423d0f ${rating}%);`
      } else {
        return `background: conic-gradient(#db2360 ${rating}%, #571435 ${rating}%);`
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/components/cards/card-movie';
</style>
