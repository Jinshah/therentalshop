var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });


  /* Customer */

  app.get("/customer/product", function (req, res) {
    res.render("customer/product");
  });

   app.get("/customer/product/single", function (req, res) {
    res.render("customer/product/single");
  });

   app.get("/customer/cart", function (req, res) {
    res.render("customer/cart");
  });

   app.get("/customer/checkout", function (req, res) {
    res.render("customer/checkout");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
  
};