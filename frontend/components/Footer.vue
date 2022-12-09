<template>
    <v-footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
      <v-container class="footer-top max-width-container" data-aos="fade-up" data-aos-duration="1000">
        <v-row>
          <v-col cols="12">
            <div class="contact-info-content">
              <div class="contact-info-item">
                <div class="icon">
                  <img class="icon-img" src="/images/icons/c1.png" alt="Icon">
                </div>
                <div class="content">
                  <h4>Call Us.</h4>
                  <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                  <a href="tel://0123456789">0123456789</a>
                  <a href="tel://0123456789">0123456789</a>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="icon">
                  <img class="icon-img" src="/images/icons/c2.png" alt="Icon">
                </div>
                <div class="content">
                  <h4>Email.</h4>
                  <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                  <a href="mailto://support@gmail.com">support@gmail.com</a>
                  <a href="mailto://demo@gmail.com">demo@gmail.com</a>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="icon">
                  <img class="icon-img" src="/images/icons/c3.png" alt="Icon">
                </div>
                <div class="content">
                  <h4>Location.</h4>
                  <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                  <p>92 St., New York, <br>Ny 10013, USA</p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row data-aos="fade-up" data-aos-duration="1000">
          <v-col md="9" lg="4" xl="3">
            <div class="widget-item mt-0">
              <div class="about-widget">
                <NuxtLink to="/" class="footer-logo">
                  <img src="/images/logo/bigyapaninc_logo_white.png" alt="Logo">
                </NuxtLink>
                <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has industry's standard dummy text ever printer took a galley.</p>
                <div class="widget-newsletter">
                  <v-form>
                    <v-text-field solo flat light rounded type="email" placeholder="Enter your email"></v-text-field>
                    <button type="submit" class="btn btn-theme btn-theme-color2 btn-border">
                      Subscribe Now <i class="icon icofont-long-arrow-right"></i>
                    </button>
                  </v-form>
                </div>
              </div>
            </div>
          </v-col>
          <v-col md="8" lg="6" xl="6">
            <div class="widget-item menu-wrap-two-column">
              <h4 class="widget-title">All Services</h4>
              <img class="line-shape" src="/images/shape/line-s1.png" alt="shape">
              <nav class="widget-menu-wrap">
                <v-row>
                  <v-col md="6">
                    <ul class="nav-menu nav">
                      <li><NuxtLink to="/service-details">Business Management</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Web Development</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Business Consultation</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Digital Marketing</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Brand Identity</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Insurance & Banking</NuxtLink></li>
                    </ul>
                  </v-col>
                  <v-col md="6">
                    <ul class="nav-menu nav">
                      <li><NuxtLink to="/service-details">Website Optimization</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Social Media Marketing</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Link Building Services</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Pay Per Click Advertising</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Search Engine Marketing</NuxtLink></li>
                      <li><NuxtLink to="/service-details">Content Marketing</NuxtLink></li>
                    </ul>
                  </v-col>
                </v-row>
              </nav>
            </div>
          </v-col>
          <v-col md="4" lg="2" xl="2" class="pr-lg-0">
            <div class="widget-item menu-wrap-column">
              <h4 class="widget-title">Useful Links</h4>
              <img class="line-shape" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
              <nav class="widget-menu-wrap">
                <ul class="nav-menu nav">
                  <li><NuxtLink to="/">Group Profile</NuxtLink></li>
                  <li><NuxtLink to="/">Vision & Values</NuxtLink></li>
                  <li><NuxtLink to="/">Company History</NuxtLink></li>
                  <li><NuxtLink to="/">Careers</NuxtLink></li>
                  <li><NuxtLink to="/">Winning Awards</NuxtLink></li>
                  <li><NuxtLink to="/">Sustainability</NuxtLink></li>
                </ul>
              </nav>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="footer-bottom">
          <v-col md="6" class="order-2 order-md-1">
            <div class="widget-copyright">
              <p>© {{ new Date().getFullYear() }} Bigyapan Inc Pvt. Ltd.</p>
            </div>
          </v-col>
          <v-col md="6" class="order-1 order-md-2">
            <div class="widget-social-icons">
              <a href="#"><i class="icofont-facebook"></i></a>
              <a href="#"><i class="icofont-skype"></i></a>
              <a href="#"><i class="icofont-instagram"></i></a>
              <a href="#"><i class="icofont-twitter"></i></a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
</template>

<script>
    export default {

    };
</script>
