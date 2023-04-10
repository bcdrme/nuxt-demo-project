<template>
  <button
    class="group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
    <div class="relative flex items-center justify-center space-x-4">
      <span
        class="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
        <slot />
      </span>
    </div>
  </button>
</template>
