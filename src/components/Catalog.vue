<template>
    <div :class="[$style.container]">
        <Header :message="header"/>
        <div :class="[$style.catalog]">
            <CatalogItem
                v-for="id in getItemsOnPage"
                :id="id"
                :key="id"
            />
        </div>
        <div :class="[$style.catalog__button]">
            <Button @clicked="loadMoreData" :textButton="textInButton"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CatalogItem from './CatalogItem.vue'
import Button from './Button.vue'
import Header from './Header.vue'

export default {
    components: {
        CatalogItem,
        Button,
        Header,
    },

    data () {
        return {
            page: 0,
            textInButton: 'Ещё товары',
            header: 'Каталог товаров'
        }
    },

    methods: {
        ...mapActions ([
            'requestData',
        ]),

        loadMoreData () {
            this.page++
            this.requestData(this.page)
        },
    },

    computed: {
        ...mapGetters ([
            'getData',
            'getFullPrice',
            'getItemsOnPage',
        ]),
    },

    created () {
        this.loadMoreData()
    }
}
</script>

<style module>
    .container {
        margin: 0 auto;
        width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .catalog {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
    }
    .catalog__button {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
</style>