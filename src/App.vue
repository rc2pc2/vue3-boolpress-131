<script>
import { RouterView } from 'vue-router';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

  // import AppMain from './pages/AppPosts.vue';

  export default {
    data() {
      return {
      }
    },
    components:{
      AppHeader,
      AppFooter
    }
}
</script>

<template>
  <AppHeader />

  <!-- Gestione del luogo in cui verranno inserite e cambiate le varie pagine -->
   <!-- Il luogo in cui cambieranno i contenuti dinamicamente in base alle rott -->
  <!-- 👇👇👇 -->
  <RouterView /> 

  <AppFooter />
</template>

<style lang="scss">
  @use "bootstrap/scss/bootstrap.scss" as *;
  @use "./styles/general.scss" as *;

</style>
