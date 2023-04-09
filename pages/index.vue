<template>
  <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 h-screen">
    <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
      <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
        <div class="rounded-xl bg-white shadow-xl">
          <div class="p-6 sm:p-16">
            <div class="space-y-4">
              <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                Nuxt<br />
                Demo Project
              </h2>
            </div>
            <div class="mt-16 grid space-y-4">
              <NavButton
                @click="
                  () => {
                    $router.push('/users')
                  }
                "
                >Users</NavButton
              >
            </div>
            <div class="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
              <p class="text-xs">
                By proceeding, you agree to our
                <a href="" class="underline">Disclaimer</a> and confirm you have read our
                <a href="" class="underline">Privacy and Cookie Statement</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
