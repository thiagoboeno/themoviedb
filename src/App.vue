<template>
  <div id="app">
    <the-header />

    <router-view />

    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/base/the-header.vue'
import TheFooter from './components/base/the-footer.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
