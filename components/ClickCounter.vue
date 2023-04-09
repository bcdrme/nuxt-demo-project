<script></script>

<template>
  <div class="rounded-xl bg-white p-12 shadow-xl">
    <h2 class="mb-8 text-2xl font-bold text-cyan-900">Counter</h2>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
