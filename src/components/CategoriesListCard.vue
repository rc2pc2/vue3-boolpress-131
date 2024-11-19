<script>
export default {
    name: "CategoriesListCard",
    data() {
        return {
            
        }
    },
    props: {
        categoryObj : {
            type: Object,
            required: true,
        }
    },
    computed:{
    }
}
</script>

<template>
    <article class="card mb-4 p-2">
        <div class="card-body">
            <h3 class="card-title">
                Name: {{ categoryObj.name }}
            </h3>
            <h5 class="card-subtitle">
                Category id: {{ categoryObj.id }}
            </h5>
            
            <h6>
                Posts in this category:
            </h6>
            <ul>
                <li v-for="post in categoryObj.posts">
                    {{ post.title }} -- {{ post.user.name }}
                </li>
            </ul>
        </div>
    </article>
</template>

<style scoped>
</style>