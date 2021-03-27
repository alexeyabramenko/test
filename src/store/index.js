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
            console.log(data)
            state.cartData = { ...data.cartData };
            state.itemsInCart.push(...Object.keys(data.cartData));
        },

        changeCart (state, newData) {
            const id = Object.keys(newData);
            if (id in state.cartData) {
                state.cartData[id].count += 1;
            } else {
                state.cartData = { ...state.cartData, ...newData };
                console.log(state.cartData);
                state.itemsInCart = [];
                state.itemsInCart.push( ...Object.keys(state.cartData));
            }
        },

        removeItem (state, data) {
            const id = Object.keys(data);
            if (state.cartData[id].count == 1) {
                delete state.cartData[id];
                state.itemsInCart = [ ...Object.keys(state.cartData)];
            } else {
                state.cartData[id].count -= 1;
            }
        }

    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getCartData: state => state.cartData,
        getItemsInCart: state => state.itemsInCart,
        getFullPrice: state => {
            const keys = state.itemsInCart;
            return keys.reduce((res, cur) => res + state.cartData[cur].price * state.cartData[cur].count, 0);
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
        addItemInCart ({ commit, state }, data) {
            fetch('/cartitem', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    commit('changeCart', data);
                })
        }, 
        removeItemInCart ({ commit, state }, data) {
            fetch('/deleteitemscart', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    commit('removeItem', data);
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