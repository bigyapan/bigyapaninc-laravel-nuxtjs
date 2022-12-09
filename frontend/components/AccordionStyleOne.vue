<template>
    <v-expansion-panels flat dark accordion>
      <v-expansion-panel
        v-for="(item,i) in faqs"
        :key="i"
      >
        <v-expansion-panel-header >
          <div>
            <v-row>
              <v-col cols="auto">
                <v-icon x-large>mdi-plus</v-icon>
              </v-col>
              <v-col>
                <h3 class="title white--text">{{ item.question }}</h3>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{
            item.answer
          }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'How to get busineses services?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'How can start digital marketing business?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'How to get easily client from online marketplace?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'How can i payment your product?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },

      ]
    }
  },

}
</script>

<style lang="scss" scoped>
.v-expansion-panel{
  background: rgba(255,255,255,0.5)!important;
  border-radius: 8px;
  margin-bottom: 20px;
  .v-expansion-panel-header{
    padding: 20px 30px;
    .title{
      font-size: 20px;
      font-weight: 500;
    }
  }
  .v-expansion-panel-content{
    padding: 20px 30px;
    font-size: 16px;
    font-weight: 400;
  }
}

</style>
