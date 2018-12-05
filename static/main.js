// import Vue from 'vue'
//
function main()
{
  Vue.options.delimiters = ['[[', ']]'];

  const homeV = {
        template: $("#homeV").html(),
        name: "homeV",
      };

  const signup = {
        template: $("#signup").html(),
        name: "signup",

      data() {
        return {
          fname: undefined,
          lname: undefined,
          email: undefined
        };
      },

      methods: {
        async addUser()
            {
              posts = db.user_collection
                  post_data = {
                      'firstName': this.fname,
                      'lastName': this.lname,
                      'email': this.email
                      }

                  result = posts.insert_one(post_data)
              this.addUser = result;
            }
          }
      };

  const login = {
        template: $("#login").html(),
        name: "login",

      data() {
        return {
          email: undefined
        };
      },

      methods: {
        async loginUser()
            {
              this.email = await $.get("/api/users/email");
            }
          }
        };

  const pickup = {
        template: $("#pickup").html(),
        name: "pickup",

        data() {
          return {
            address: undefined,
            city: undefined,
            state: undefined,
            zip: undefined,
            date: undefined,
            time: undefined
          };
        },

        methods: {
          async pickupUserA()
              {
                this.address = await $.get("/api/pickup/address");
              },
          async pickupUserC()
              {
                this.city = await $.get("/api/pickup/city");
              },
          async pickupUserS()
              {
                this.state = await $.get("/api/pickup/state");
              },
            }
      };

  const checkout = {
        template: $("#checkout").html(),
        name: "checkout",

        data() {
          return {
            cardNum: undefined,
            csc: undefined,
            exp: undefined,
            name: undefined
          };
        },

        methods: {
          async checkoutUser()
              {
                this.cardNum = await $.get("/api/checkout/cardNum");
              }
            }
          };

  const about = {
        template: $("#about").html(),
        name: "about",
      };

  const contact = {
        template: $("#contact").html(),
        name: "contact",
      };

  const profile = {
        template: $("#profile").html(),
        name: "profile",

      data() {
        return {
          fname: "Tyler",
          lname: "Tomasello",
          email: "ttomasel@hawk.iit.edu",
          phone: "(708)-423-8191"
        };
      },

      methods: {
          }
        };

  const routes = [
        {
            path: "/",
            component: homeV,
            props: true
        },
        {
            path: "/signup",
            component: signup,
            props: true
        },
        {
            path: "/login",
            component: login,
            props: true
        },
        {
            path: "/pickup",
            component: pickup,
            props: true
        },
        {
            path: "/checkout",
            component: checkout,
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
        {
            path: "/profile",
            component: profile,
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
          loggedIn: false,
        },

        methods:{
          toggle: function(){
            this.loggedIn = !this.loggedIn
        }
    }
    });

    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      });
 }

$(document).ready(main);
