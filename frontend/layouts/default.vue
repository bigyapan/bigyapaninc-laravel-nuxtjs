<template>
  <v-app>
    <Header/>
    <v-main>
          <Nuxt />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>
