<script setup>
const { $trpc } = useNuxtApp()
const { data: hello, error } = await $trpc.hello.useQuery({ text: 'client' })
</script>

<template>
  <div class="rounded-xl bg-white p-12 shadow-xl">
    <h2 class="mb-8 text-2xl font-bold text-cyan-900">tRPC</h2>
    <p>{{ hello?.greeting }}</p>
    <p class="text-red-400">{{ error?.greeting }}</p>
  </div>
</template>
