<script>
import PostsList from '../components/PostsList.vue';

export default {
    name: "AppHome",
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
                        Homepage
                    </h2>
                </div>

                <PostsList :withShow="false"/>
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>