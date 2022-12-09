<template>
  <v-app>
        <v-container fluid class="fill-height"  style="background-color:#a23131">
              <v-row justify="center" align="center">
                <v-col
                  cols="12"
                  sm="10"
                  md="6"
                  lg="4"
                  class="d-flex align-center justify-center"
                >
                  <div class="text-center">
                    <h1 v-if="error.statusCode === 404" class="display-4 font-weight-bold white--text">
                      {{ pageNotFound }}
                    </h1>
                    <h1 v-else class="display-4 font-weight-bold white--text">
                      {{ otherError }}
                    </h1>
                    <v-divider dark class="my-4"></v-divider>

                    <h4 v-if="error.statusCode === 404" class="banner-subtitle mr-0 white--text font-weight-regular">
                      The page you are looking for is not available please go back to
                      homepage
                    </h4>
                    <h4 v-else class="banner-subtitle mr-0 white--text font-weight-regular">
                      An unknown error has occured please go back to
                      homepage while we take a look at this.
                    </h4>
                    <div class="mt-16 pt-2">
                      <v-btn rounded nuxt x-large :to="localePath('/')" color="error" elevation="0">
                        <v-icon left large class="mr-4">mdi-home</v-icon>Back to Homepage
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
        </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'errorlayout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
