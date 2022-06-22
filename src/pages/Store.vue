<!--Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div class="store">
    <MyProducts/>
    <MyCart/>
    <MyCheckout/>
    <MyWatchers/>
  </div>
</template>

<script>
import Products from './../components/Products'
import Cart from './../components/Cart'
import Checkout from './../components/Checkout'
import Watchers from '../components/Watchers'

export default {
  name: 'app',
  components:{
    MyProducts: Products,
    MyCart: Cart,
    MyCheckout: Checkout,
    MyWatchers: Watchers

  }
}
</script>

<style>
.store {
  text-align: center;
  padding-top: 20px;
  margin-left: 200px;
}
</style>