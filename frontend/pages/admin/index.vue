<template>
<Dashboard/>
</template>

<script>
export default {
  name: "index",
  layout:"admin",
  middleware:'routeguard',
  components:{
    Dashboard: () => import('@/pages/admin/dashboard')
  }
}
</script>

<style scoped>

</style>
