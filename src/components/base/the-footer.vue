<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer-tabs">
        <div class="logo-join">
          <img class="logo" :src="require('@/assets/img/logo.svg')" alt="">

          <a class="signup-action" href="https://www.themoviedb.org/signup">
            Junte-se a Comunidade
          </a>
        </div>

        <ul
          v-for="(tabs, index) in footerLinks"
          :key="index"
          class="footer-lists"
        >
          <h3 class="title">
            {{ tabs.title }}
          </h3>

          <li
            v-for="(link, indexLink) in tabs.links"
            :key="indexLink"
            class="footer-items"
          >
            {{ link.name }}
          </li>
        </ul>
      </nav>

      <span class="references">Build 9caf4f2 (3367)</span>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    footerLinks: [
      {
        title: 'O básico',
        links: [
          {
            name: 'Sobre o TMDB',
            path: ''
          },
          {
            name: 'Contate-nos',
            path: ''
          },
          {
            name: 'Suporte',
            path: ''
          },
          {
            name: 'API',
            path: ''
          },
          {
            name: 'Status do Sistema',
            path: ''
          }
        ]
      },
      {
        title: 'Envolva-se',
        links: [
          {
            name: 'Bíblia do Colaborador',
            path: ''
          },
          {
            name: 'Adicionar um novo Filme',
            path: ''
          },
          {
            name: 'Adicionar uma nova Série',
            path: ''
          }
        ]
      },
      {
        title: 'Comunidade',
        links: [
          {
            name: 'Diretrizes',
            path: ''
          },
          {
            name: 'Discussões',
            path: ''
          },
          {
            name: 'Placar de colaboradores',
            path: ''
          },
          {
            name: 'Twitter',
            path: ''
          }
        ]
      },
      {
        title: 'Legalidade',
        links: [
          {
            name: 'Termos de uso',
            path: ''
          },
          {
            name: 'Termos de Uso da API',
            path: ''
          },
          {
            name: 'Política de privacidade',
            path: ''
          }
        ]
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/base/the-footer';
</style>
