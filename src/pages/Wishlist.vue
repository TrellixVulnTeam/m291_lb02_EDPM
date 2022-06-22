<template>
  <div class="about">
    <MyShoppinglist/>
  </div>
</template>

<script>
import Shoppinglist from "../components/WishList"

export default {
  name: 'app',
  components: {
    MyShoppinglist: Shoppinglist

  }
}
</script>

<style lang="scss">
//Import of global-style
@import '../styles/global';
</style>