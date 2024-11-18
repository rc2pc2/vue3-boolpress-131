<script>
import axios from 'axios'; // ! importo axios per poter effettuare chiamate AJAX // Asyncronous Javascript And Xml
import PostsListCard from './PostsListCard.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: "PostsList",
    components: {
        PostsListCard,
        AppLoader
    },
    data() {
        return {
            postList : [],
            apiUrl: "http://127.0.0.1:8000/api/post s",
            // loaded: false,
        }
    },
    methods:{
        getPosts(){
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.results);
                    this.postList = response.data.results;
                    // this.loaded = true;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created(){
        this.getPosts();
    },
    computed:{
        loaded(){
            return this.postList.length > 0;
        }
    }
}
</script>

<template>

    <section class="loader" v-if="!loaded">
        <AppLoader />
    </section>

    <section class="col-12 text-center" id="post-list-wrapper" v-else>
        <PostsListCard v-for="singlePost in postList" 
            :key="singlePost.id" 
            :singlePostObject="singlePost" />
    </section>
</template>

<style scoped>
</style>