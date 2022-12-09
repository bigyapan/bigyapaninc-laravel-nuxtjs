<template>
  <v-container class="about-area about-default-area max-width-container">
    <v-row justify="center" align="center">
      <v-col lg="5">
        <div class="layer-style" data-aos="fade-up" data-aos-duration="1000">
          <div class="thumb tilt-animation">
            <img src="/images/about/ajeeb.png" alt="Images">
          </div>
          <div class="shape-style1">
            <img src="/images/shape/circle-line1.png" alt="Images">
          </div>
          <ShapeWithAnimation addClassName="shape-style2" imgSrc="/images/shape/circle-shape1.png" data-depth=".6"/>
          <div class="experience-time">
            <div class="content">32<sup>+</sup> <span>Years of Experience</span></div>
          </div>
        </div>
      </v-col>
      <v-col lg="6">
        <div class="about-content">
          <div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 class="display-3 font-weight-700">We Have Leadership Strong <span class="bottom-style">Experience</span> In Business.</h2>
            <div class="desc">
              <p class="mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy
                text ever <u class="text-theme-color2">since the 1500s, when an unknown printer took</u> type specimen
                book survived not only centuries.</p>
            </div>
          </div>
          <div class="list-icon-style" data-aos="fade-up" data-aos-duration="1200">
            <ul>
              <li><i class="icon icofont-clock-time"></i> Save Your Time</li>
              <li><i class="icon icofont-money-bag"></i> Earn More Money</li>
              <li><i class="icon icofont-chart-growth"></i> Grow Business</li>
              <li><i class="icon icofont-live-support"></i> 24/7 Support</li>
              <li><i class="icon icofont-badge"></i> Trusted Partner</li>
              <li><i class="icon icofont-unique-idea"></i> Innovative Ideas</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
  },
};
</script>
