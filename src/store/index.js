import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        cartData: {},
        itemsInCart: [],
    },
    mutations: {
        setData (state, payload) {
            state.data = { ...state.data, ...payload.newData };
            state.itemsOnPage.push(...Object.keys(payload.newData));
        },
        setCart (state, data) {
            state.cartData = { ...state.data, ...data.cartData };
            state.itemsInCart.push(...Object.keys(data.cartData));
        }
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getCartData: state => state.cartData,
        getItemsInCart: state => state.itemsInCart,
        getFullPrice: state => {
            const keys = state.itemsOnPage;
            return keys.reduce((res, cur) => res + state.data[cur].price, 0);
        },
    },
    actions: {
        requestData ({ commit, state }, page) {
            fetch(`/itemslist/${page}`, { 
                method: 'GET',
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', { newData: res });
                });
        },
        addItem ({}, data) {
            fetch('/itemslist', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        addItemInCart ({}, data) {
            fetch('/cartitem', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        removeItemInCart ({}, data) {
            fetch('/deleteitemscart', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        getCartItems ({ commit, state }) {
            fetch('/cartitems', {
                method: 'GET',
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setCart', { cartData: res });
                });  
        }
    },
});