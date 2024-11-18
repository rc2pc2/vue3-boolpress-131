<script>
export default {
    name: "PostsListCard",
    data() {
        return {
            
        }
    },
    props: {
        singlePostObject : {
            type: Object,
            required: true,
        }
    },
    computed:{
        postImage(){
            return "http://127.0.0.1:8000/storage/" + this.singlePostObject.image;
        }
    }
}
</script>

<template>
    <article class="card mb-4 p-2">
        <div class="card-body">
            <h3 class="card-title">
                {{ singlePostObject.title }}
            </h3>
            <h5 class="card-subtitle">
                {{ singlePostObject.user.name }}
            </h5>
            <img width="250" :src="postImage" :alt="singlePostObject.title">
            <p class="card-text">
                {{ singlePostObject.content }}
            </p>
        </div>
    </article>
</template>

<style scoped>
</style>