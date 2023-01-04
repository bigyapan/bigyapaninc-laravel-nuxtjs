<template>
    <div class="page-title-area" style="background-color: #0A1946">
      <v-container class="max-width-container" fluid>
        <v-row>
          <v-col lg="12">
            <div class="page-title-content">
              <h2 class="display-3 white--text font-weight-900">{{ title }}</h2>
              <div class="bread-crumbs"><img class="line-shape" src="/images/shape/line-s3.png" alt="shape">
                <NuxtLink to="/"> Home <span class="breadcrumb-sep">/</span></NuxtLink>
                <span class="white--text">{{ breadcrumbTitle }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
        <div class="page-sidebar" data-aos="fade-right" data-aos-duration="1100">
            <div class="social-icon">
                <a href="#"><i class="icofont-facebook"></i></a>
                <a href="#"><i class="icofont-skype"></i></a>
                <a href="#"><i class="icofont-twitter"></i></a>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-one" src="/images/shape/1.png" alt="shape">
            <img class="layer-shape-two" src="/images/shape/4.png" alt="shape">
            <img class="layer-shape-three" src="/images/shape/5.png" alt="shape">
            <img class="layer-shape-four" src="/images/shape/3.png" alt="shape">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'breadcrumbTitle']
    };
</script>
