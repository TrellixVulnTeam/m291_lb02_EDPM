<template>
  <div class="antwort">
    <h1>{{$route.params.content.frage}}</h1>
    <p class="text-antwort">{{$route.params.content.antwort}}</p>
  </div>
</template>

<script>
export default {
  name: "SingleMessage"
}
</script>

<style>
.antwort {
  text-align: center;
  color: white;
  padding-top: 300px;
  background-image: url("../assets/sport-shop-bg-unsplash.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 90vh !important; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border: black 0.5px solid;
}
.text-antwort {
  font-size: 20px;
}
</style>