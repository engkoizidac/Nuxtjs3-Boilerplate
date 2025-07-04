<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const mainItems = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },

  {
    label: "Settings",
    children: [
      {
        label: "User",
        description: "User account management",
        icon: "i-lucide-circle-user",
      },
      {
        label: "Installation",
        description: "User Access privilege settings.",
        icon: "i-lucide-settings",
      },
    ],
  },
]);

const logoutItem = ref<NavigationMenuItem[]>([
  {
    label: "Log-in",
    to: "/login", // optional: add your logout route
  },
]);
</script>

<template>
  <nav
    class="flex items-center justify-center border-b border-default px-4 py-2 bg-white dark:bg-gray-900"
  >
    <!-- Logo on the left -->
    <NuxtLink to="/" class="flex items-center font-bold text-xl text-primary">
      Engkoi<span class="text-amber-50">Zidac</span>
    </NuxtLink>

    <!-- Center menu -->
    <div class="flex-1 flex justify-center">
      <UNavigationMenu
        highlight
        highlight-color="primary"
        orientation="horizontal"
        :items="mainItems"
        class="w-full flex justify-center"
      />
    </div>

    <!-- Logout on the right -->
    <div class="flex justify-end">
      <UNavigationMenu
        orientation="horizontal"
        :items="logoutItem"
        class="w-auto"
      />
    </div>
  </nav>
</template>
