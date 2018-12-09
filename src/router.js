import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/wiki",
      name: "wiki",
      // route level code-splitting
      // this generates a separate chunk (wiki.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "wiki" */ "./views/Wiki.vue")
    },

    {
      path: "/cities",
      name: "cities",
      component: () =>
        import(/* webpackChunkName: "cities" */ "./views/Cities.vue")
    }
  ]
});
