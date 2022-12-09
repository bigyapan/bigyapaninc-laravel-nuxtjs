const state = () => ({
  user: "",
  accessToken: "",
});

const mutations = {
  SET_USER(state, payload) {
    if (payload) {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      this.$cookiz.set('accessToken', payload.accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }
  },
  UNSET_USER(state) {
    state.user = "";
    state.accessToken = "";
    this.$cookiz.remove('accessToken');
    window.localStorage.removeItem('bigyapaninc');
  }
};

const actions = {
  loginOrRegister(state, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.post(process.env.BACKEND_API_URL + payload.route, payload.data, {
        headers: {
          Accept: "application/json",
        }
      }).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    })
  },
  logout(state) {
    let temp = this;
    return new Promise((resolve, reject) => {
      this.$axios.post(process.env.BACKEND_API_URL + 'logout', {}, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + state.rootGetters['auth/accessToken']
        }
      }).then(function (response) {
        if (response.status === 200) {
          state.commit("UNSET_USER");

        }
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
};

const getters = {
  user(state) {
    return state.user;
  },
  accessToken(state) {
    return state.accessToken;
  },
  isLogin(state) {
    return !!state.accessToken;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};

