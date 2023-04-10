import { HelloTrpc } from '~/.nuxt/components';

<template>
  <div class="grid gap-10">
    <h2 class="text-2xl font-bold text-cyan-900">tRPC</h2>
    <HelloTrpc />
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
