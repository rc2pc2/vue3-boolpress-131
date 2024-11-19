<script>
import axios from 'axios'; // ! importo axios per poter effettuare chiamate AJAX // Asyncronous Javascript And Xml
import CategoriesListCard from './CategoriesListCard.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: "CategoriesList",
    components: {
        CategoriesListCard,
        AppLoader
    },
    data() {
        return {
            categoriesList : [],
            apiUrl: "http://127.0.0.1:8000/api/categories",
        }
    },
    methods:{
        getCategories(){
            axios.get(this.apiUrl, { params: {} })
                .then((response) => {
                    // console.log(response.data.results);
                    this.categoriesList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        show(categoryId){
            this.$router.push({ name: 'categories.show', params: { id: categoryId } })
        }

    },
    created(){
        this.getCategories();
    },
    computed:{
        loaded(){
            return this.categoriesList.length > 0;
        },
    }
}
</script>

<template>

    <section class="loader" v-if="!loaded">
        <AppLoader />
    </section>

    <section class="col-12 text-center" id="post-list-wrapper" v-else>
        <CategoriesListCard v-for="category in categoriesList" 
            :categoryObj="category" @click="show(category.id)"/>
    </section>
</template>

<style scoped>
</style>