<script>
import axios from 'axios';

import AppLoader from '../components/AppLoader.vue';
import CategoriesListCard from '../components/CategoriesListCard.vue';

export default {
    name:"AppSingleCategories",
    components: {
        CategoriesListCard,
        AppLoader,
    },
    data() {
        return {
            category : null,
            apiUrl : "http://127.0.0.1:8000/api/categories"
        }
    },
    methods:{
        getCategory(){
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then((response) => {
                    console.log(response.data.results);
                    this.category = response.data.results;
                    // 
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    created(){
        this.getCategory();
    },
    computed:{
        loaded(){
            return this.category !== null;
        }
    }
}
</script>

<template>
    <h2>
        Single category with ID : {{ $route.params.id }}
    </h2>
    <CategoriesListCard :categoryObj="category" v-if="loaded"/>
    <AppLoader v-else />
</template>


<style scoped>
</style>