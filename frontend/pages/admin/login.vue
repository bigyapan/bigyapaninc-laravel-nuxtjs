<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col cols="8">
        <v-sheet dark color="primary" height="100vh">
          <v-container class="fill-height" fluid>
            <v-row justify="center" align="center">
              <v-col cols="6">
                <NuxtLink :to="localePath('/')">
                  <v-row align="center" justify="center">
                    <v-col cols="5">
                      <img src="/images/logo/bigyapaninc_logo_white.png" alt="Logo Light"/>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="7">
                      <h1 class="white--text font-weight-700">
                        <v-icon left large>mdi-fingerprint</v-icon>
                        Admin Panel Login
                      </h1>
                    </v-col>
                  </v-row>
                </NuxtLink>
                <v-divider class="my-4"></v-divider>
                <p class="mt-8">Please login to the admin panel using your credentials. If you are in this page by
                  mistake then please kindly
                  return to homepage. Unauthorized access is strictly not allowed.</p>
                <v-btn :to="localePath('/')" class="mt-8" light x-large rounded depressed>
                  <v-icon left large class="mr-4">mdi-web</v-icon>
                  Go to Website
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet height="100vh">
          <v-container class="fill-height" fluid>
            <v-row justify="center" align="center">
              <v-col cols="10">
                <div class="d-flex justify-center mb-4">
                  <v-icon x-large left> mdi-shape</v-icon>
                  <h1 class="font-weight-900">Content Management System</h1>
                </div>
                <v-divider class="my-4"></v-divider>
                <v-text-field v-model="email" :error-messages="usernameErrors" autocomplete="on"
                              filled
                              label="Username"
                              placeholder="Enter your email or phone number here..."
                              prepend-inner-icon="mdi-account"
                              rounded
                              v-on:keyup.enter="login"
                ></v-text-field>
                <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :error-messages="passwordErrors"
                              :type="showPassword ? 'text' : 'password'"
                              autocomplete="on"
                              filled
                              label="Password"
                              placeholder="Enter your password here..."
                              prepend-inner-icon="mdi-lock"
                              rounded
                              @click:append="showPassword = !showPassword"
                              v-on:keyup.enter="login"
                ></v-text-field>
                <v-divider class="mb-4"></v-divider>
                <v-row>
                  <v-col>
                    <v-checkbox class="pa-0 ma-0 caption" label="Remember Me"></v-checkbox>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col>
                    <NuxtLink to="#"><p>Forgot Password?</p></NuxtLink>
                  </v-col>
                </v-row>
                <div class="d-flex justify-center">
                  <v-btn block color="primary" depressed rounded x-large
                         @click="login">
                    <v-icon large left class="mr-4">mdi-login-variant</v-icon>
                    <span>Login</span>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {validationMixin} from 'vuelidate';
import {required, email} from "vuelidate/lib/validators";

export default {
  middleware:'routeguard',
  mixins: [validationMixin],
  name: "login",
  layout: "adminloginlayout",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    }
  },
  validations: {
    email: {required, email},
    password: {required}
  },
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push('Username is required.');
      !this.$v.email.email && errors.push('Username must be a valid email address.');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('Password is required.');
      return errors;
    }
  },
  methods: {
    login() {
      this.$v.email.$touch();
      this.$v.password.$touch();
      const temp = this;
      this.$store.dispatch('auth/loginOrRegister', {
        route: "login",
        data: {
          email: temp.email,
          password: temp.password,
        }
      }).then(function (response) {
        temp.$store.commit('auth/SET_USER', response.data.data);
        temp.$router.push("/admin");
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>

<style scoped>

</style>
