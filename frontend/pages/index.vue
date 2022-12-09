<template>
  <v-container fluid class="ma-0 pa-0">
    <HeroSlider />
    <AboutOne/>
    <ServiceOne/>
    <FaqOne/>
    <TeamSection class="team-default-area" />
    <PortfolioSection/>
    <BlogSection/>
    <ContactDivider/>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  layout:'home'
}
</script>
