<template>
  <!--Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)-->
  <div>
    <h1 v-show="true" v-text="mytext">Loading...</h1>
    <h2 v-show="true" v-html="myhtml" />
    <a class="button-store"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
       @click="gotoShop()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      mytext: '',
      // v-html
      myhtml: '',
      // v-bind
      link: {
        url: 'store',
        tabindex: '0',
        title: 'To the Store'
      },
    }
  },
  methods: {
    gotoShop(){
      this.$router.push('/store');
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {
  display: block;
  margin-top: 70px;
  position: absolute;
  left: 0;
  top: 50%;
  width: 10%;
  text-align: center;
  color: #ffffff;
  font-size: 25px;
}
.button-store {
  margin-left: 45%;
  background-color: white;
  color: black;
  border-radius: 9px;
}
.button-store:hover {
  color: black;
}
</style>