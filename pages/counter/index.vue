<template>
  <div class="grid gap-10">
    <h2 class="text-2xl font-bold text-cyan-900">Counter</h2>
    <ClickCounter />
    <DefaultButton
      @click="
        () => {
          $router.push('/')
        }
      ">
      Back
    </DefaultButton>
  </div>
</template>
