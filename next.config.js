const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const emailjs = require("emailjs-com");

module.exports = withPlugins([optimizedImages, emailjs], {
  target: "serverless",
});

