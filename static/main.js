// import Vue from 'vue'
//
function main()
{
  Vue.options.delimiters = ['[[', ']]'];

  const homeV = {
        template: $("#homeV").html(),
        name: "homeV",
      };

  const pickup = {
        template: $("#pickup").html(),
        name: "pickup",
      };

  const about = {
        template: $("#about").html(),
        name: "about",
      };

  const contact = {
        template: $("#contact").html(),
        name: "contact",
      };

  const routes = [
        {
            path: "/",
            component: homeV,
            props: true
        },
        {
            path: "/pickup",
            component: pickup,
            props: true
        },
        {
            path: "/about",
            component: about,
            props: true
        },
        {
            path: "/contact",
            component: contact,
            props: true
        },
    ];

    const router = new VueRouter({
        routes // short for `routes: routes`
    });

    var app = new Vue({
        el: "#mainApp",
        name: "mainApp",
        router,

        data: {
          //message: 'hello!!!'
            //loggedIn: true,
        }
    });
 }

$(document).ready(main);
