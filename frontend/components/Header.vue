<template>
  <v-app-bar :color="bg" fixed flat height="100">
    <v-row align="center" no-gutters>
      <v-col cols="3">
        <NuxtLink :to="localePath('/')">
          <v-img v-if="isLogoLight" contain height="80" src="/images/logo/bigyapaninc_logo_white.png" alt="Logo Light"/>
          <v-img v-else contain height="80" src="/images/logo/bigyapaninc_logo.png" alt="Logo"/>
        </NuxtLink>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" class="mr-2">
        <v-btn-toggle :dark="isLogoLight" dense tile>
          <v-btn v-for="(locale,i) in availableLocales" :key="i" @click="changeLocale(locale)">
            <img :src='"/images/language/"+locale.code+".png"' alt="" height="20"/>{{locale.name}}
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="auto">
        <v-menu v-for="(item, i) in headerItems" :key="i">
          <template v-slot:activator="{ on }">
            <v-btn
              :dark="isLogoLight"
              class="mr-2"
              v-on="on"
              text
              :to="localePath(item.url)"
            >
              <v-icon left>{{ item.icon }}</v-icon>
              <span>{{$t(item.title)}}</span>
            </v-btn>
          </template>
        </v-menu>
      </v-col>
      <v-col cols="auto" class="header-action-area">
        <v-btn color="accent" depressed rounded  x-large>Get a Free Quote <v-icon class="ml-4" large right>mdi-file-document</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {

  data() {
    return {
      locale:'en',
      isLogoLight: true,
      bg: 'transparent',
      headerItems: [
        {
          title: 'home',
          icon: 'mdi-home',
          url: '/',
        },
        {
          title: 'about',
          icon: 'mdi-account-group',
          url: '/about',
        },
        {
          title: 'services',
          icon: 'mdi-semantic-web',
          url: '/services',
        },
        {
          title: 'portfolio',
          icon: 'mdi-briefcase',
          url: '/portfolio',
        },
        {
          title: 'blog',
          icon: 'mdi-post',
          url: '/blog',
        },
        {
          title: 'contact',
          icon: 'mdi-phone-ring',
          url: '/contact',
        }
      ],
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales;
    }
  },
  methods: {
    changeLocale(item) {
      this.$i18n.setLocale(item.code);
    },
    changeColor() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        this.bg = 'rgba(255,255,255,0.97)';
        this.isLogoLight = false;
      } else {
        this.bg = 'transparent';
        this.isLogoLight = true;

      }
    },
  },

  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
};
</script>

<style lang="scss">
.v-btn{
  text-transform: unset !important;
}
</style>
