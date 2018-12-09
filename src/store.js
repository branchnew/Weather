import Vue from "vue";
import Vuex from "vuex";
import {
  UPDATE_FORECAST,
  UPDATE_CITY,
  FETCH_FORECAST,
  API_ADDRESS,
  APP_ID
} from "./constants";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forecast: [],
    city: {}
  },
  mutations: {
    [UPDATE_FORECAST](state, { forecast }) {
      state.forecast = forecast;
    },
    [UPDATE_CITY](state, { city }) {
      state.city = city;
    }
  },
  actions: {
    [FETCH_FORECAST]({ commit }, { city }) {
      axios
        .get(`${API_ADDRESS}forecast?q=${city}&appid=${APP_ID}&units=metric`)
        .then(
          ({ data }) => {
            let forecast = data.list.filter((time, index) => index % 8 === 0);
            commit(UPDATE_FORECAST, { forecast });
            commit(UPDATE_CITY, { city: data.city });
          },
          () => {
            commit(UPDATE_FORECAST, { forecast: [] });
            commit(UPDATE_CITY, { city: {} });
          }
        );
    }
  },
  getters: {
    forecast: state => {
      return state.forecast;
    }
  }
});
