<script setup>
const route = useRoute()
const { data } = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
</script>

<template>
  <div class="relative h-screen bg-gradient-to-br from-sky-50 to-gray-200 py-16">
    <h1>User page</h1>
    <p>{{ data.name }}</p>
  </div>
</template>
