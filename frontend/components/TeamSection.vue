<template>
    <div class="team-area mt-16">
      <v-container class="max-width-container" fluid>
        <v-row align="center" justify="center">
          <v-col lg="8">
            <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
              <h2 class="display-3 font-weight-700">We’ve Awesome Team</h2>
              <div class="separator-line mt-14">
                <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
                <img src="/images/shape/line-s1.png" alt="Images">
              </div>
              <div class="desc">
                <p class="mt-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been <br>the industry's standard dummy text ever since the printer took</p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="4" v-for="(team, index) in teams" :key="index" data-aos="fade-up" data-aos-duration="1100">
            <div class="swiper-slide team-member">
              <div class="thumb">
                <img :src='team.image' alt="Image">
              </div>
              <div class="content">
                <div class="member-info">
                  <div class="separator-line">
                    <img src="/images/shape/line-s1.png" alt="Images">
                  </div>
                  <h4 class="name">{{team.name}}</h4>
                  <h6 class="designation">{{team.designation}}</h6>
                  <!-- Start Progress Item -->
                  <div class="progress-item">
                    <div class="progress-line">
                      <div class="progress-bar-line" style="width: 75%">
                        <span class="percent">75%</span>
                      </div>
                    </div>
                    <div class="progress-info">
                      <span class="title">{{team.progressTitle}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="shape-style">
                <img class="shape-style1" src="/images/shape/8.png" alt="Image">
                <img class="shape-style2" src="/images/shape/9.png" alt="Image">
                <img class="shape-style3" src="/images/shape/10.png" alt="Image">
              </div>
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
                swiperOptions: {
                    speed: 1500,
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween : 30,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },
                        768:{
                            slidesPerView : 2,
                            centeredSlides: false
                        },
                        0:{
                            slidesPerView : 1
                        }
                    }
                },
              teams: [
                {
                  name: 'Hosea Steiner',
                  designation: 'UI/UX Designer',
                  image: '/images/team/1.jpg',
                  progress: 75,
                  progressTitle: 'Professional Skill'
                },
                {
                  name: 'Rosario Matthew',
                  designation: 'Web Developer',
                  image: '/images/team/2.jpg',
                  progress: 90,
                  progressTitle: 'Professional Skill'
                },
                {
                  name: 'Tyson Holiday',
                  designation: 'Digital Marketer',
                  image: '/images/team/3.jpg',
                  progress: 80,
                  progressTitle: 'Professional Skill'
                }
              ]
            }
        },
    };
</script>
