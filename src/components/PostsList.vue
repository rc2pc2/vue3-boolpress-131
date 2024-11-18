<script>
import axios from 'axios'; // ! importo axios per poter effettuare chiamate AJAX // Asyncronous Javascript And Xml
import PostsListCard from './PostsListCard.vue';

export default {
    name: "PostsList",
    components: {
        PostsListCard
    },
    data() {
        return {
            postList : [],
            apiUrl: "http://127.0.0.1:8000/api/posts"
        }
    },
    methods:{
        getPosts(){
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.results);
                    this.postList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created(){
        this.getPosts();
    }
}
</script>

<template>
    <section class="col-12 text-center" id="post-list-wrapper">
        <PostsListCard v-for="singlePost in postList" 
            :key="singlePost.id" 
            :singlePostObject="singlePost" />
    </section>
</template>

<style scoped>
</style>