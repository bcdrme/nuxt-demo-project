<script setup>
const route = useRoute()
const { data } = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
</script>

<template>
  <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 h-screen">
    <h1>User page</h1>
    <p>{{ data.name }}</p>
  </div>
</template>
