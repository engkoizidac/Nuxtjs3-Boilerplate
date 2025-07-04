<template>
  <UApp>
    <UContainer class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <NavBar />

      <main class="flex-1 py-8">
        <slot />
      </main>
    </UContainer>
  </UApp>
</template>
