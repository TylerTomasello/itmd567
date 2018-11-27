import Vue from 'vue'

function main()
{
  Vue.options.delimiters = ["[[", "]]"];
  const routes = [
        {
            path: "/",
            component: Home,
            props: true
        },
        {
            path: "/about/",
            name: "about",
            component:
        }
    ];

    const router = new VueRouter({
        routes // short for `routes: routes`
    });

    var app = new Vue({
        el: "#mainApp",
        name: "mainApp",
        router,

        data: {
          message: 'hello!!!'
            //loggedIn: true,
        }
    });
}

$(document).ready(main);
