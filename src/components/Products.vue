<template>
  <div class="div-products">
      <h2 class="title-products">Products</h2>
      <table>
        <thead>
        <tr>
          <th class="th-name">Name</th>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <th class=" th-price">Price</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, idx) in products" :key="idx">
          <td>{{ product.name }}</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>{{ product.price.toFixed(2) }}</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>
            <b-button variant="success"  @click="addToCart(product)">+</b-button>
            <b-button variant="danger" @click="removeFromCart(product)">-</b-button>
          </td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Products',
  computed: mapState(['products']),
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
    }
  },
  created() {
    this.$store.dispatch("loadProducts")
  }
}
</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  margin-top: 30px;
  color: black;
}
.title-products {
  padding-top: 30px;
  text-align: center;
  color: black;
}
td {
  padding-right: 30px;
}
.div-products {
  float: left;
  margin-left: 100px;
  margin-bottom: 80px;
}
</style>