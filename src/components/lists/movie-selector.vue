<template>
  <b-nav :class="['movie-selector', { 'invert': invert }]">
    <b-nav-item
      v-for="(item, index) in items"
      :key="index"
      :active="item === selected"
      @click="changeSelected(item)"
    >
      <span class="name">{{ item }}</span>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    invert: {
      type: Boolean,
      default: () => false
    }
  },

  data: () => ({
    selected: ''
  }),

  mounted () {
    this.changeSelected(this.items[0])
  },

  methods: {
    changeSelected (item) {
      this.selected = item
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/components/lists/movie-selector';
</style>
