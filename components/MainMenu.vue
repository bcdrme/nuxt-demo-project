<template>
  <div class="rounded-xl bg-white shadow-xl">
    <div class="p-6 sm:p-16">
      <div class="space-y-4">
        <h2 class="mb-8 text-2xl font-bold text-cyan-900">
          Nuxt<br />
          Demo Project
        </h2>
      </div>
      <div class="mt-16 grid space-y-4">
        <slot />
      </div>
      <div class="mt-32 space-y-4 text-center text-gray-600 sm:-mb-8">
        <!-- prettier-ignore -->
        <p class="text-xs">
            By proceeding, you agree to our <a href="" class="underline">Disclaimer</a> and confirm you have read our <a href="" class="underline">Privacy and Cookie Statement</a>.
        </p>
      </div>
    </div>
  </div>
</template>
