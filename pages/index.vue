<template>
  <MainMenu>
    <DefaultButton
      @click="
        () => {
          $router.push('/users')
        }
      ">
      Users
    </DefaultButton>
    <DefaultButton
      @click="
        () => {
          $router.push('/counter')
        }
      ">
      Counter
    </DefaultButton>
    <DefaultButton
      @click="
        () => {
          $router.push('/trpc')
        }
      ">
      tRPC
    </DefaultButton>
    <DefaultButton
      @click="
        () => {
          $router.push('/serverComponent')
        }
      ">
      Server Component
    </DefaultButton>
  </MainMenu>
</template>
