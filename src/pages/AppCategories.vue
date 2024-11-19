<script>
import CategoriesList from '../components/CategoriesList.vue';

export default {
    name: "AppCategories",
    data() {
        return {
        }
    },
    methods:{
    },
    created(){
    },
    components:{
        CategoriesList
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="h2 py-3">
                        Available Categories:
                    </h2>
                </div>

                <CategoriesList />
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>