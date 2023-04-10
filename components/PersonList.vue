<script setup lang="ts">
type User = {
  id: number
  name: string
}
const { data } = await useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
</script>

<template>
  <ul>
    <li
      v-for="user in data"
      :key="user.id"
      class="hover:text-cyan-900">
      <NuxtLink :to="`/users/${user.id}`">
        {{ user.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
