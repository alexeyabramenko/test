<template>
    <div :class="[$style.formAddItem]">
        <Header :message="text"/>
        <input type="text" placeholder="name" v-model="name"><br>
        <input type="text" placeholder="price" v-model="price"><br>
        <Button @clicked="addGood">Добавить товар</Button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from './Button.vue'
import Header from './Header.vue'
export default {
    components: {
        Button,
        Header,
    },
    data () {
        return {
            name: '',
            price: '',
            text: 'Добавить новый товар'
        }
    },
    methods: {
        ...mapActions([
            'addItem'
        ]),
        addGood () {
            const goodToAdd = { name: this.name, price: this.price, img: '', count: 1}
            this.addItem(goodToAdd)
        }
    }
}
</script>

<style module>
    .formAddItem {
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        width: 200px;
        align-items: center;
        background-color: rgba(245, 222, 179, 0.267);
        padding: 20px;
        box-shadow: 10px 6px 8px 9px rgb(32 0 0 / 20%);
        margin-bottom: 50px;
    }
    .input {
        padding: 6px;
    }
</style>