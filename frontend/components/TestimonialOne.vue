<template>
  <v-container class="max-width-container testimonial-area testimonial-default-area">
    <v-row>
      <v-col lg="5" xl="5" class="md-text-center">
        <div class="shape-layer tilt-animation" data-aos="fade-up" data-aos-duration="1100">
          <img src="/images/photos/ajeeb2.png" alt="Virtuf-HasTech">
        </div>
      </v-col>
      <v-col lg="7 xl=7">
        <div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000">
          <div class="subtitle-content xs-d-i-flex">
            <img src="/images/shape/line1.png" alt="Virtuf-HasTech">
            <h5>Testimonial</h5>
          </div>
          <h2 class="display-3 font-weight-700">Happy and what they think about us.</h2>
          <div class="separator-line">
            <img src="/images/shape/line1.png" alt="Virtuf-HasTech">
            <img src="/images/shape/line2.png" alt="Virtuf-HasTech">
          </div>
        </div>

        <v-carousel cycle continuous show-arrows-on-hover hide-delimiters>
          <v-carousel-item v-for="(testimonial, index) in testimonials"
                           :key="index">
            <div class="testimonial-content md-pl-0 pl-lg-30 pl-70" data-aos="fade-up" data-aos-duration="1100">
              <div class="testimonial-slider-content position-relative">
                <div class="testimonial-slider-container">

                  <v-container class="swiper-slide testimonial-single fill-height" fluid>
                    <v-row align="center" justify="center">
                      <v-col cols="auto">
                        <div class="client-content">
                          <p>{{ testimonial.desc }}</p>
                          <img class="quote-icon" src="/images/icons/quote-icon.png" alt="Icon">
                        </div>
                        <div class="client-info">
                          <img class="shape-line-img" src="/images/shape/line1.png" alt="Virtuf-HasTech">
                          <h4 class="name">{{ testimonial.name }}</h4>
                          <h6 class="designation">{{ testimonial.designation }}</h6>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
            </div>
          </v-carousel-item>

        </v-carousel>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Reinaldo Thurman",
          designation: "Senior Consultant",
          imgSrc: "/images/icons/t1.png",
          desc: "It is long established fact that reader will distract by the readable content a page when looking atten layout. The point of using  and that it has a more normal distribution of letters, as opposed using making it look like readable English."
        },
        {
          name: "Jannat Maya",
          designation: "Marketing Consultant",
          imgSrc: "/images/icons/t1.png",
          desc: "Lorem ipsum dolor sit amet, marketing consultant elit eiusmod tempor incididunt labore et doloreant magna aliqua. Enim minim veniam, adritu ullamco marketing consultant normal distribution opostent using making it look like readable English."
        }
      ]
    }
  },
};
</script>
