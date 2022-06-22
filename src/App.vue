<template>
  <div>
    <div>
      <div id="nav">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/store">Store</router-link></li>
          <li><router-link to="/wishlist">Wish List</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
        </ul>
      </div>
      <router-view/>
      <MyNavigation/>
    </div>
    <div class="footer">
      <p> © 2022 - Giulio Raetzo</p>
    </div>
    <MyComponent/>
  </div>
</template>

<style lang="scss">
//Import of global-style
@import 'styles/global';

ul {
  margin: 0 !important;
}

footer {
  text-align: center;
  padding: 3px;
  background-color: white;
  color: black;
}

p {
  margin: 0 !important;
  text-align: center;
}

.app-container {
  height: 100%;
}
</style>