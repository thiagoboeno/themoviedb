<template>
  <header class="header">
    <div class="container header-content">
      <nav class="header-tabs">
        <img class="logo" :src="require('@/assets/img/logo-small.svg')" alt="">

        <ul class="header-lists">
          <li class="header-items">
            Filmes
          </li>

          <li class="header-items">
            Séries
          </li>

          <li class="header-items">
            Pessoas
          </li>

          <li class="header-items #01b4e4">
            Mais
          </li>
        </ul>
      </nav>

      <nav class="header-tabs">
        <ul class="header-lists">
          <li class="header-items">
            <font-awesome-icon class="plus" icon="plus" />
          </li>

          <li class="header-items">
            <div class="language">
              PT
            </div>
          </li>

          <li class="header-items">
            Entrar
          </li>

          <li class="header-items">
            Junte-se ao TMDB
          </li>

          <li class="header-items">
            <font-awesome-icon class="search" icon="search" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/base/the-header';
</style>
