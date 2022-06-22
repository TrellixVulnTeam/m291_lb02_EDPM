<template>
  <div class="faq">
    <h1 class="title-faq">FAQ</h1>
    <div class="div-faq" v-for="(m, i) in messages" :key="i" >
      <router-link class="frage" :to="{ name: 'singlemessage', params: {content: m}}">
        {{ m.frage }}
      </router-link>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
      {frage: 'Where can I shop locally?', antwort: "We have stores in Zurich, Bern and Lucerne."},
      {frage: "Can I return the products?", antwort: "Yes, you have a 14-day return policy with us."},
      {frage: "Who can I contact if I have questions?", antwort: "You can contact us at info@sportstore.com or call us at 000000000!"},
      ]
    }
  }
}
</script>

<style>
.faq {
  text-align: center;
}

.title-faq {
  padding-top: 30px;
  padding-bottom: 20px;
  color: white;
}

.frage {
  color: white;
  padding-top: 10px;
  font-size: 20px;
}

.div-faq {
  padding-top: 10px;
}

.faq {
  background-image: url("../assets/sport-shop-bg-unsplash.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 90vh !important; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border: black 0.5px solid;
}
</style>