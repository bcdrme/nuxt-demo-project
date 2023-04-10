<script setup>
const { $trpc } = useNuxtApp()
const { data: hello, error } = await $trpc.hello.useQuery({ text: 'client' })
</script>

<template>
  <div class="rounded-xl bg-white p-12 shadow-xl">
    
    <p class="italic">{{ hello?.greeting }}</p>
    <p class="text-red-400">{{ error?.greeting }}</p>
  </div>
</template>
