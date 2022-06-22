import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const baseURL = "http://localhost:3000/";
export default new Vuex.Store({
  state: {
    products: [
        {name: "Nike Football Shoes", price: 220.00},
        {name: "Nike Football", price: 90.00},
        {name: "Jersey FC Liverpool", price: 110.00},
        {name: "Ice Hockey Stick", price: 95.00},
        {name: "Ice Skates", price: 130.00},
        {name: "Volleyball", price: 50.00},
    ],
    cart: []
  },
  getters: {
    /**
     * https://thecodebarbarian.com/javascript-reduce-in-5-examples.html
     * @param state
     * @returns {*}
     */
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        let product = state.products.find(p => p.name === item.name);
        return total + (product.price * item.quantity);
      }, 0);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({name: product.name, quantity: 1});
      }
    },
    removeFromCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity--;
        if (state.cart[index].quantity === 0) state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    loadProducts(context) {
      fetch(baseURL + "v1/products")
          .then((res) => {
            //console.log(res.json());
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            context.commit('setProducts', data);
          }).catch(error => {
        console.error(error);
      });
    }
  },
})