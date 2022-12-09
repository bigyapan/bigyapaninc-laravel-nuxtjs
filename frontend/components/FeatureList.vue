<template>
  <div class="feature-area feature-about-area">
    <v-container class="max-width-container">
      <v-row class="feature-list" data-aos="fade-up" data-aos-duration="1000">
        <v-col lg="4" v-for="(feature, index) in features" :key="index">
          <div class="feature-list-item">
            <div class="icon">
              <img class="img-icon" :src="feature.iconSrc" :alt="feature.title">
            </div>
            {{ feature.title }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          iconSrc: "/images/icons/f1.png",
          title: "Who We Are?"
        },
        {
          iconSrc: "/images/icons/f2.png",
          title: " Mission & Vission"
        },
        {
          iconSrc: "/images/icons/f3.png",
          title: "What We Do?"
        },
      ]
    }
  },
};
</script>
