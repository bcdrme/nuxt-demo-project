<script setup>
const route = useRoute()
const { data } = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
</script>

<template>
  <div class="grid gap-10">
    <div class="rounded-xl bg-white p-12 shadow-xl">
      <h2 class="mb-8 text-2xl font-bold text-cyan-900">{{ data.name }}</h2>
      <p>{{ data }}</p>
    </div>
    <DefaultButton
      @click="
        () => {
          $router.push('/users')
        }
      ">
      Back
    </DefaultButton>
  </div>
</template>
