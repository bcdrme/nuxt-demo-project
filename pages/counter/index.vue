<template>
  <div class="grid gap-10">
    <ClickCounter />
    <NavButton
      @click="
        () => {
          $router.push('/')
        }
      ">
      Back
    </NavButton>
  </div>
</template>
