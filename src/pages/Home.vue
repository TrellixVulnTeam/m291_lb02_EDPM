<template>
  <div class="bg">
    <MyVueDirectives/>
    <h1 class="title">Welcome to the Sports Onlineshop!</h1>
  </div>
</template>

<script>
import VueDirective from "../components/VueDirectives"

export default {
  name: 'app',
  components: {
    MyVueDirectives: VueDirective
  }
}
</script>

<style>
.bg {
  background-image: url("../assets/sport-shop-bg-unsplash.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 90vh !important; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border: black 0.5px solid;
}
</style>