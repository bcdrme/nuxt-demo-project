<script setup>
const { data } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>

<template>
  <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 h-screen">
    <h1>Users</h1>
    <ul>
      <li
        v-for="user in data"
        :key="user.id">
        <NuxtLink :to="`/users/${user.id}`">
          {{ user.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
