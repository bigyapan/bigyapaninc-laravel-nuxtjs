<template>
  <v-navigation-drawer
    app
    color="primary"
    dark
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <NuxtLink :to="localePath('/')">
            <img height="80" src="/images/logo/bigyapaninc_logo_white.png" alt="Logo"/>
          </NuxtLink>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawerAdmin",
  data(){
    return{
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/admin/dashboard' },
        { title: 'Users', icon: 'mdi-account', to: '/admin/users' },
        { title: 'Services', icon: 'mdi-shape', to: '/admin/services' },
        { title: 'Portfolio', icon: 'mdi-rocket', to: '/admin/portfolio' },
        { title: 'Blogs', icon: 'mdi-file-document', to: '/admin/blogs' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
