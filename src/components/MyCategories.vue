<template>
    <div>
        <ul  class="categories">
            <li 
                :class="(selectedCategory === 0) ? 'active' : ''"
                @click="$emit('setCategory', 0)"
            >
                Все
            </li>
            <li 
                :class="(index + 1 === selectedCategory) ? 'active' : '' "
                v-for="(category, index) in categories"
                :key="index"
                :category="category"
                @click='$emit("setCategory", index + 1)'
            >
                {{category}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyCategories",
        props: {
            categories: {
                type: Array,
                required: true
            },
            selectedCategory: Number
        },
    }
</script>

<style scoped>
    .categories{
        padding: 0;
        display: flex;
        width: 500px;
        list-style-type: none;
    }
    .categories li {
        border: 1px solid #ccc;
        padding: 10px;
        cursor: pointer;
    }
    .categories li:first-child{
        border-radius: 5px 0 0 5px ;
    }
    .categories li:last-child{
        border-radius: 0 5px 5px 0 ;
    }

    .active{
        background-color:rgb(56, 56, 56);
        color: #fff;
        border: 1px solid #000;
    }
</style>