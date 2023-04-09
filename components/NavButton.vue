<script>
export default defineComponent({
  props: {
    click: {
      type: Function,
      required: true,
    },
  },
})
</script>

<template>
  <button
    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
    @click="click">
    <div class="relative flex items-center space-x-4 justify-center">
      <span
        class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
        <slot />
      </span>
    </div>
  </button>
</template>
