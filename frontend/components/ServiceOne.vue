<template>
   <div class="service-area service-default-area">
     <v-container class="max-width-container">
       <v-row align="center" justify="center">
         <v-col>
           <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
             <h2 class="display-3 font-weight-700">What We Do?</h2>
             <div class="separator-line mt-14">
               <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
               <img src="/images/shape/line-s1.png" alt="Images">
             </div>
             <div class="desc">
               <p class="mt-21">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the printer took</p>
             </div>
           </div>
         </v-col>
       </v-row>
       <v-row class="icon-box-style1">
         <v-col data-aos="fade-up" data-aos-duration="1100" v-for="(service, index) in services" :key="index" md="6" lg="4">
           <ServiceItem :service="service" />
         </v-col>
       </v-row>
     </v-container>
     <div class="layer-shape">
       <img class="layer-shape-one" src="/images/shape/6.png" alt="shape">
       <img class="layer-shape-two" src="/images/shape/7.png" alt="shape">
     </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: "/images/icons/s1.png",
                        title: "Web Development",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s2.png",
                        title: "Market Analysis",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s3.png",
                        title: "Brand Identity",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s4.png",
                        title: "Business Consultation",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s5.png",
                        title: "SEO Marketing",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                    {
                        icon: "/images/icons/s6.png",
                        title: "UX & UI Design",
                        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry has been the industry's standard."
                    },
                ]
            }
        },
    };
</script>
