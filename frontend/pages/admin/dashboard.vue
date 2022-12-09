<template>
  <v-container>
    <h1>This is Dashboard page.</h1>
  </v-container>
</template>

<script>
export default {
  name: "index",
  layout:"admin",
  middleware:'routeguard',

}
</script>

<style scoped>

</style>
