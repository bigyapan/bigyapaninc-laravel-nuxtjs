<template>
    <div class="brand-logo-area brand-logo-default-area" style="background-color: #0A1946">
       <v-container class="max-width-container">
         <v-row>
           <v-col lg="5" xl="5">
             <div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000">
               <div class="subtitle-content xs-d-i-flex">
                 <img src="/images/shape/line1.png" alt="image">
                 <h5>Trusted Partner</h5>
               </div>
               <h2 class="display-3 white--text font-weight-700 mb-lg-40 mb-80">Here are some clients we have worked with.</h2>
               <a href="#" class="btn btn-theme btn-theme-color2 btn-border">Join Us Today <i class="icon icofont-long-arrow-right"></i></a>
             </div>
           </v-col>
           <v-col lg="7" xl="6" class="offset-xl-1">
             <div class="brand-logo-content" data-aos="fade-up" data-aos-duration="1000">
               <div class="row">
                 <div class="col-sm-4 col-6" v-for="(logo, index) in logos" :key="index">
                   <div class="brand-logo-item">
                     <img :src="logo.logoSrc" :alt="logo.alt">
                   </div>
                 </div>
               </div>
             </div>
           </v-col>
         </v-row>
       </v-container>
        <div class="layer-shape">
            <img class="shape-style1" src="/images/shape/11.png" alt="image">
            <img class="shape-style2" src="/images/shape/12.png" alt="image">
            <img class="shape-style3" src="/images/shape/13.png" alt="image">
            <img class="shape-style4" src="/images/shape/14.png" alt="image">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                logos: [
                    {
                        logoSrc:"/images/brand-logo/1.png",
                        alt: "logo 01"
                    },
                    {
                        logoSrc:"/images/brand-logo/2.png",
                        alt: "logo 02"
                    },
                    {
                        logoSrc:"/images/brand-logo/3.png",
                        alt: "logo 03"
                    },
                    {
                        logoSrc:"/images/brand-logo/4.png",
                        alt: "logo 04"
                    },
                    {
                        logoSrc:"/images/brand-logo/5.png",
                        alt: "logo 05"
                    },
                    {
                        logoSrc:"/images/brand-logo/6.png",
                        alt: "logo 06"
                    },
                ]
            }
        },
    };
</script>
