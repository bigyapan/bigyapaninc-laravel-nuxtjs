<template>
  <div class="portfolio-area portfolio-default-area">
    <v-container class="max-width-container">
      <v-row align="center">
        <v-col sm="8">
          <div class="section-title xs-text-center">
            <div class="subtitle-content xs-d-i-flex">
              <img src="/images/shape/line1.png" alt="Virtuf-HasTech">
              <h5>Portfolio</h5>
            </div>
            <h2 class="display-3 font-weight-700">We Have Leadership Strong Experience In Business.</h2>
          </div>
        </v-col>
        <v-col sm="4">
          <NuxtLink to="/project" class="btn btn-theme btn-border btn-theme-color2 xs-d-none">All Projects <i
            class="icon icofont-long-arrow-right"></i></NuxtLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="12">
          <v-carousel cycle continuous hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus">
            <v-carousel-item
              transition="scroll-x-reverse-transition"
              reverse-transition="scroll-x-transition"
              v-for="(item,i) in portfolioSliders"
              :key="i"
              :src="item.src"
            >
              <v-container ba :style="{ backgroundImage: `url(${item.src})` }" fluid class="fill-height pl-16">
                <v-row>
                  <v-col cols="auto">
                    <img class="shape-line-img" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                    <h3 class="display-1 font-weight-900">
                      {{ item.label }}
                    </h3>
                    <v-chip :to="localePath(item.url)" class="category font-weight-700">{{ item.category }}</v-chip>
                    <v-divider class="my-4"></v-divider>
                    <NuxtLink :to="localePath(item.url)" class="btn btn-theme btn-border btn-portfolio">View Details <i
                      class="icon icofont-long-arrow-right"></i></NuxtLink>
                  </v-col>
                  <v-col cols="auto">

                  </v-col>
                </v-row>
              </v-container>

            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioSliders: [
        {
          url: "/portfolio-details",
          label: 'Market Statics & Analysis.',
          category: 'Business / Marketing',
          src: '/images/portfolio/tab-b1.jpg'
        },
        {
          url: "/portfolio-details",
          label: 'Website Development.',
          category: 'Development / Design',
          src: '/images/portfolio/tab-b2.jpg'
        },
        {
          url: "/portfolio-details",
          label: 'Market Statics & Analysis.',
          category: 'Business / Marketing',
          src: '/images/portfolio/tab-b3.jpg'
        },
      ]
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>

</style>
