<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "./components/Header";
import Buefy from "buefy";
import "buefy/lib/buefy.css";

Vue.use(Buefy, {
  defaultIconPack: "fa"
});

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang =scss>
// Import Bulma's core
@import "./sass/spacing.scss";
@import "~bulma/sass/utilities/_all";

body {
  background-color: $white;
}
// colors
$primary: #de8f75;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

//fonts
$family-serif: "Nunito", serif;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
  "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans");
</style>
