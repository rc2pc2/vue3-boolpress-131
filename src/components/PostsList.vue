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
    props:{
        withShow: {
            required: false,
            type: Boolean,
        }
    },
    data() {
        return {
            postList : [],
            apiUrl: "http://127.0.0.1:8000/api/posts",
            // loaded: false,
            lastPageNumber : 1,
            currentPageNumber: 1,
        }
    },
    methods:{
        getPosts(pageNumber){
            axios.get(this.apiUrl, {
                    params: {
                        page: pageNumber
                    }
                })
                .then((response) => {
                    console.log(response.data.results.data);
                    console.log(pageNumber);
                    this.postList = response.data.results.data;
                    this.lastPageNumber = response.data.results.last_page;
                    this.currentPageNumber = pageNumber;
                    // this.loaded = true;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        previousPage(){
            console.log("Previous click");
            if(this.currentPageNumber > 1){
                this.currentPageNumber--;
                this.getPosts(this.currentPageNumber);
            }
        },
        nextPage(){
            console.log("Next click");
            if(this.currentPageNumber < this.lastPageNumber){
                this.currentPageNumber++; // 3
                this.getPosts(this.currentPageNumber);
            }
        },
        show(postId){
            if(this.withShow){
                this.$router.push({ name: 'posts.show', params: { id: postId } })
            }
        }

    },
    created(){
        this.getPosts(1);
    },
    computed:{
        loaded(){
            return this.postList.length > 0;
        },
        firstPage(){
            return this.currentPageNumber === 1;
        },
        lastPage(){
            return this.currentPageNumber >= this.lastPageNumber;
        }
    }
}
</script>

<template>

    <section class="loader" v-if="!loaded">
        <AppLoader />
    </section>

    <section class="col-12 text-center" id="post-list-wrapper" v-else>
        <PostsListCard v-for="singlePost in postList" :key="singlePost.id" :singlePostObject="singlePost" @click="show(singlePost.id)"
        />
    </section>

    <section class="navigation">
        <nav>
            <ul class="d-flex justify-content-between list-unstyled">
                <li>
                    <button class="btn btn-primary " @click="previousPage"
                        :class="{ 'disabled' : firstPage }"
                    >
                        Prev
                    </button>
                </li>
                
                <li>
                    <button class="btn btn-primary" @click="nextPage"
                        :class="{ 'disabled' : lastPage }" 
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    </section>
</template>

<style scoped>
</style>