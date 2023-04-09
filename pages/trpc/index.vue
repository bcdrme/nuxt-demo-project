import { HelloTrpc } from '~/.nuxt/components';

<template>
  <div class="grid gap-10">
    <HelloTrpc />
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
