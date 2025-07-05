<template>
  <UApp>
    <div class="flex flex-col min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      <BaseNavigation />

      <main class="flex-1 w-full px-4 py-8">
        <slot />
      </main>
    </div>
  </UApp>
</template>
