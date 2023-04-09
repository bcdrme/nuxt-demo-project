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
  </NavMenu>
</template>
