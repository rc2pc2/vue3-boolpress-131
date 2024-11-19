<script>
import axios from 'axios';

import PostsListCard from '../components/PostsListCard.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name:"AppSinglePost",
    components: {
        PostsListCard,
        AppLoader,
    },
    data() {
        return {
            singlePost : null,
            apiUrl : "http://127.0.0.1:8000/api/posts"
        }
    },
    methods:{
        getSinglePost(){
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then((response) => {
                    console.log(response.data.results);
                    this.singlePost = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    created(){
        this.getSinglePost();
    },
    computed:{
        loaded(){
            return this.singlePost !== null;
        }
    }


}
</script>

<template>
    <h2>
        Single post page with ID : {{ $route.params.id }}
    </h2>
    <PostsListCard :singlePostObject="singlePost" v-if="loaded"/>
    <AppLoader v-else />
</template>


<style scoped>
</style>