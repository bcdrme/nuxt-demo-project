<script setup>
const { data } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>

<template>
  <div class="grid gap-10">
    <div class="rounded-xl bg-white p-12 shadow-xl">
      <h2 class="mb-8 text-2xl font-bold text-cyan-900">Users</h2>
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
    </div>
    <NavButton
      @click="
        () => {
          $router.push('/')
        }
      ">
      Back
    </NavButton>
  </div>
</template>
