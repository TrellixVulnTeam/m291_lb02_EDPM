<!--Using Watchers to Set New Values-->
<template>
  <div class="discount">
    <h2 class="title-sale">Sale</h2>
    <div>
      Save on your next purchase!
      <strike v-show="oldDiscount">Was {{ oldDiscount }}%</strike><br/>
      <strong> Now {{ discount }}% OFF</strong><br/><br/>
      <a href="#" @click="updateDiscount">Increase discount by 5%</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
    }
  },
  watch: {
    discount: {
      handler: function (newVal, oldVal){
        console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
        this.oldDiscount = oldVal;
      },
      immediate: false,
      deep: true
    }
    // Or shortcut for the same watch as above
    // discount(newVal, oldVal){
    //   console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
    //   this.oldDiscount = oldVal;
    //}
  },
  methods: {
    updateDiscount(){
      this.discount = this.discount + 5;
    }
  }
}
</script>

<style lang="scss" scoped>
.discount {
  padding-left: 50px;
  max-width: 600px;
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
.title-sale {
  padding-top: 30px;
  text-align: center;
  color: black;
}
</style>