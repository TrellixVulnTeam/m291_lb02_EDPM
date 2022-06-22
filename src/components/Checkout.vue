<template>
  <div class="checkout">
    <h2 class="title-checkout">Checkout</h2>
    Your total is CHF {{ cartTotal.toFixed(2) }}.
    <b-button variant="primary" v-show="cartTotal > 0" @click="checkout">Checkout</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Checkout processed!');
    }
  }
}
</script>

<style>
.title-checkout {
  padding-top: 20px;
  color: black;
}

.checkout {
  color: black;
  padding-top: 50px;
}

.btn-primary {
  color: white !important;
  background-color: black !important;
  border: none !important;
  margin-left: 5px;
}
</style>