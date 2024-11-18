<script>
import PostsList from '../components/PostsList.vue';

export default {
    name: "AppPosts",
    data() {
        return {
        }
    },
    methods:{
    },
    created(){
    },
    components:{
        PostsList
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

                <PostsList />
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>