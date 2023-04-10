<template>
  <div class="grid gap-10">
    <div class="rounded-xl bg-white p-12 shadow-xl">
      <h2 class="mb-8 text-2xl font-bold text-cyan-900">Users</h2>
      <PersonList />
    </div>
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
