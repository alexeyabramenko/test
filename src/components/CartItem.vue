<template>
    <div>
        <div :class="[$style.cart__item]">
            <img :class="[$style.cart__img]" :src="getCartItem.img">
            <a :class="[$style.cart__link]" href="#"> Наименование товара: {{getCartItem.name}}</a>
            <p :class="[$style.cart__price]">Цена: $ {{getCartItem.price}}</p>
            <Button @clicked="removeItem" :textButton="deleteItem"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from './Button.vue'

export default {
    data () {
        return {
            deleteItem: 'Удалить товар'
        }
    },
    props: {
        id: String,
    },
    methods: {
        ...mapActions([
            'removeItemInCart'
        ]),
        removeItem () {
            const id = this.id;
            console.log(id);
            const cartItem = {};
            const item = { ...this.getCartItem }
            console.log(item);
            cartItem[id] = item;
            console.log(cartItem)
            this.removeItemInCart(cartItem);
        }
    },
    computed: {
        ...mapGetters([
            'getCartData'
        ]),
        getCartItem () {
            return this.getCartData[this.id] || {}
        }
    },
    components: {
        Button,
    },
}
</script>

<style module>
    .cart__item {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        background-color: rgba(245, 222, 179, 0.267);
        padding: 10px;
    }
    .cart__img {
        width: 200px;
        margin: 20px 0 20px 0;
    }

    .cart__link {
        text-align: center;
        text-decoration: none;
        color:black;
        font-size: 16px;
    }

    .cart__price {
        font-weight: bold;
    }

</style>