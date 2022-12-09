<template>
  <v-carousel cycle continuous :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus" height="100vh">
    <v-carousel-item>
      <v-container
        fluid
        class="slider-container"
      >
        <v-row
          no-gutters
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col lg="5" class="px-6">
            <v-chip outlined color="accent"><span><b>Since 2020</b></span></v-chip>
            <h1 class="white--text display-3 font-weight-900 mt-4">Your complete Marketing and IT Consultation
              stop.</h1>
            <v-divider class="mt-4" dark/>
            <p class="white--text mt-4">Bigyapan Inc Pvt. Ltd. is complete digital marketing agency & IT consultation
              firm for your business.</p>
            <v-row align="center" class="mt-8">
              <v-col cols="auto">
                <v-btn x-large color="accent" depressed outlined rounded>View All Services
                  <v-icon class="ml-4" right large>mdi-arrow-right</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="auto"><span class="white--text">OR</span></v-col>
              <v-col cols="auto">
                <v-btn dark x-large color="whatsapp" depressed rounded>
                  <v-icon class="mr-4" left large>mdi-whatsapp</v-icon>
                  Get in Touch
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col lg="5" class="px-6">
            <v-img src="/images/slider/1.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {}
  },
};
</script>

<style scoped lang="scss">
.slider-container {
  background-color: #0A1946;
  height: 100vh;
}
</style>
