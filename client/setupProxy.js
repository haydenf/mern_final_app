// var express = require('express');
var proxy = require('http-proxy-middleware');

// var app = express();

// app.use(
//   '/api',
//   proxy({ target: 'http://www.example.org', changeOrigin: true })
// );
// const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/api/*", { target: "http://localhost:5000", changeOrigin: true }));
};