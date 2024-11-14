<script>
import axios from 'axios'; // ! importo axios per poter effettuare chiamate AJAX // Asyncronous Javascript And Xml

export default {
    name: "AppMain",
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
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="h2 py-3">
                        Posts List:
                    </h2>
                </div>
                <div class="col-12 text-center">
                    <article class="card mb-4 p-2" v-for="singlePost in postList" :key="singlePost.id">
                        <div class="card-body">
                            <h3 class="card-title">
                                {{ singlePost.title }}
                            </h3>
                            <h5 class="card-subtitle">
                                {{ singlePost.user.name }}
                            </h5>
                            <p class="card-text">
                                {{ singlePost.content }}
                            </p>
                        </div>
                    </article>
                </div>
                
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>