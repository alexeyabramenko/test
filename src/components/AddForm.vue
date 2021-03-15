<template>
  <div :class="[$style.formAddItem]">
        <input type="text" placeholder="name" v-model="name"><br>
        <input type="text" placeholder="price" v-model="price"><br>
        <Button @clicked="addGood">Добавить товар</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Button from './Button.vue'
export default {
    components: {
        Button,
    },
    data () {
        return {
            name: '',
            price: '',
        }
    },
    methods: {
        ...mapActions([
            'addItem'
        ]),
        addGood () {
            const goodToAdd = { name: this.name, price: this.price, img: '' }
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
    }
    .input {
        padding: 6px;
    }
</style>