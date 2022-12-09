<template>
  <div class="faq-area faq-default-area" style="background-color:#f5f5f5">
    <v-container class="max-width-container">
      <v-row>
        <v-col lg="8">
          <div class="faq-content" data-aos="fade-up" data-aos-duration="1100">
            <div class="section-title xs-text-center">
              <h2 class="display-3 white--text font-weight-900">We are frequently asked...</h2>
            </div>
            <div class="accordion-content">
              <AccordionStyleOne/>
            </div>
            <div class="text-center">
              <a href="#" class="btn btn-theme btn-white btn-border">Click For Others Question & Answer <i
                class="icon icofont-long-arrow-right"></i></a>
            </div>
          </div>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
    </v-container>
    <div class="layer-shape">
      <div class="layer-shape-one" data-aos="fade-up" data-aos-duration="1000">
        <img class="img-shape1 tilt-animation" src="/images/photos/ajeeb2.png" alt="Virtuf-Image">
        <img class="img-shape2" src="/images/shape/1.png" alt="Virtuf-Image">
        <img class="img-shape3" src="/images/shape/2.png" alt="Virtuf-Image">
      </div>
      <div class="layer-shape-two">
        <img src="/images/shape/circle-line2.png" alt="Virtuf-Image">
      </div>
      <div class="layer-shape-three">
        <img src="/images/shape/circle-line3.png" alt="Virtuf-Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    AccordionStyleOne: () => import('@/components/AccordionStyleOne'),
  },
};
</script>
