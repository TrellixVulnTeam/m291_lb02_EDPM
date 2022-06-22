<template>
  <div>
    <h2 class="title-cart">Cart</h2>
    <table class="table-cart">
      <thead>
      <tr>
        <th class="table-cart-name">Name</th>
        <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, idx) in cart" :key="idx">
        <td>{{ product.name }}</td>
        <td>{{ product.quantity  }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  computed: mapState(['cart'])
}
</script>

<style>
.title-cart {
  padding-top: 30px;
  color: black;
}
th {
  text-align: left;
}
.table-cart {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  margin-top: 20px;
  color: black;
}
.table-cart-name {
  padding-right: 100px;
}
td {
  padding-top: 10px;
}
</style>