// import Vue from 'vue'

// Declaration of the main to run the javascript objects
function main()
{
  //change delimiters to better use
  Vue.options.delimiters = ['[[', ']]'];

  /* All of the const are diferent views because they call different templates
  to utitlize one html page
  */

  //this is for the home view
  const homeV = {
        template: $("#homeV").html(),
        name: "homeV",
      };

  //this is for the signup view
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

  //this is for the login view
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

  //this is for the pickup view
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

  // this is for the checkout view
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

  //this is for the about page view
  const about = {
        template: $("#about").html(),
        name: "about",
      };

  //this is for the contact page view
  const contact = {
        template: $("#contact").html(),
        name: "contact",
      };

  //this is for the profile page view
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

  //these are the routes for each page when the router-link is clicked
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

    //this is used to switch through the pages
    const router = new VueRouter({
        routes // short for `routes: routes`
    });

    //this is the main view that appears when the page is accessed.
    //Also, it has the navigation bar with login and signup buttons.
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

    /* this is a javascript operation that I used so that when the date input is
       pressed then a calendar pops up for a date selection*/
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      });
 }

//DOM manipulation is called to perform all the javascript operations
$(document).ready(main);
