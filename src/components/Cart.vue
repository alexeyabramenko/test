<template>
    <div>
        <Header :message="header"/>
        <div :class="[$style.cart__container]">
            <CartItem
                v-for="id in getItemsInCart"
                :id="id"
                :key="id"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItem from './CartItem.vue';
import Header from './Header.vue';

export default {
    data () {
        return {
            header: 'Корзина'
        }
    },
    components: {
        CartItem,
        Header,
    },
    computed: {
        ...mapGetters ([
            'getData',
            'getFullPrice',
            'getItemsOnPage',
            'getItemsInCart',
        ]),
    },
    methods: {
        ...mapActions([
            'getCartItems'
        ]),
        loadCart () {
            this.getCartItems()
        }
    },
    created () {
        this.loadCart();
    },
}
</script>

<style module>
    .cart__container {
        margin: 0 auto;
        display: flex;
        width: 800px;
        gap: 30px;
        flex-wrap: wrap;
    }
</style>