<template>
    <div>
        <Header :message="msg" />
        <div :class="[$style.container]">
            <Catalog />
            <Cart />
        </div>
        <div :class="[$style.form]">
            <AddForm />
        </div>
    </div>
</template>

<script>
//Подключаемые компоненты
import Header from './components/Header.vue'
import Catalog from './components/Catalog.vue'
import AddForm from './components/AddForm.vue'
import Cart from './components/Cart.vue'

export default {
    //Данные
    data () {
        return {
        msg: 'Online store',
        }
    },
    //Подключенные компоненты
    components: {
        Header,
        Catalog,
        AddForm,
        Cart,
    },
    //Функции для работы с компонентами
    methods: {
    },

    //Функции для работы с компонентами, обязаны вовзращать значение. 
    //Срабатывает один раз, если не меняются данные. Обращение к функции происходит как к методу.
    computed: {

    },
}
</script>

<style module>
    body {
        margin: 0;
        padding: 0;
        background-color: rgba(222, 184, 135, 0.418);
    }
    .myheader {
        color: red;
    }
    .container {
        display: flex;
        justify-content: space-between;
    }
    .form {
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
</style>