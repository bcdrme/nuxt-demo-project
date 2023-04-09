<script setup>
const count = useState('count', () => 0)

const clicked = ref(false)

const increment = () => {
  count.value++
  wiggle()
}

const decrement = () => {
  count.value--
  wiggle()
}

const wiggle = () => {
  clicked.value = true
  setTimeout(() => {
    clicked.value = false
  }, 500)
}
</script>

<template>
  <h2 class="mb-8 text-2xl font-bold text-cyan-900">Counter</h2>
  <div class="grid place-items-center gap-8">
    <div
      class="border-1 relative flex h-36 w-36 items-center justify-center rounded-full bg-white p-5 text-center text-4xl text-cyan-900 shadow-xl"
      :class="{ 'animate-[wiggle_.5s_ease-in-out_normal]': clicked }">
      <span class="absolute left-0 top-0 text-4xl">🙂 </span>
      {{ count }}
    </div>
    <div class="grid grid-flow-col gap-4">
      <NavButton @click="decrement">-</NavButton>
      <NavButton @click="increment">+</NavButton>
    </div>
  </div>
</template>
