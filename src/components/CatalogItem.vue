<template>
    <div>
        <div :class="[$style.item]">
            <img :class="[$style.item__img]" :src="getItemData.img">
            <a :class="[$style.item__link]" href="#">Наименование товара: {{ getItemData.name }}</a>
            <p :class="[$style.item__price]">Цена: $ {{ getItemData.price }}</p>
            <Button @clicked="addInCart" :textButton ="text"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from './Button.vue'

export default {
    data () {
        return {
        text: 'Добавить в корзину',
        }
    },
    props: {
        id: String,
    },
    methods: {
        ...mapActions([
            'addItemInCart',
        ]),
        addInCart () {
            const id = this.id;
            const cartItem = {};
            const item = { ...this.getItemData }
            cartItem[id] = item;
            console.log(cartItem);
            this.addItemInCart(cartItem);
        },
    },
    computed: {
        ...mapGetters ([
            'getData',
        ]),
        getItemData () {
            return this.getData[this.id] || {}
        }
    },
    components: {
        Button,
    },
}
</script>

<style module>
    .item {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        background-color: rgba(245, 222, 179, 0.267);
        padding: 10px;
        box-shadow: 10px 6px 8px 9px rgb(32 0 0 / 20%);
    }
    .item__img {
        width: 200px;
        margin: 20px 0 20px 0;
    }

    .item__link {
        text-align: center;
        text-decoration: none;
        color:black;
        font-size: 16px;
    }

    .item__price {
        font-weight: bold;
    }
    .item__button {
        width: 200px;
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        padding: 6px;
        align-items: center;
        text-align: center;
        border: black solid 1px;
        border-radius: 10rem;
        background-color: transparent;
    }
</style>