<template>
  <NavMenu>
    <NavButton
      @click="
        () => {
          $router.push('/users')
        }
      ">
      Users
    </NavButton>
    <NavButton
      @click="
        () => {
          $router.push('/counter')
        }
      ">
      Counter
    </NavButton>
    <NavButton
      @click="
        () => {
          $router.push('/trpc')
        }
      ">
      tRPC
    </NavButton>
  </NavMenu>
</template>
