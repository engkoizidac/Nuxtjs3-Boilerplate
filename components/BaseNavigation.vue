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
        to: "users/userAccounts",
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
    class="w-full flex items-center justify-between border-b border-default px-4 py-2 bg-white dark:bg-gray-900"
  >
    <!-- Left: Logo -->
    <div class="flex-1">
      <NuxtLink to="/" class="flex items-center font-bold text-xl text-primary">
        Engkoi<span class="text-amber-50">Zidac</span>
      </NuxtLink>
    </div>

    <!-- Center: Main menu -->
    <div class="flex-1 flex justify-center">
      <UNavigationMenu
        highlight
        highlight-color="primary"
        orientation="horizontal"
        :items="mainItems"
        class="w-full max-w-xl"
      />
    </div>

    <!-- Right: Logout -->
    <div class="flex-1 flex justify-end">
      <UNavigationMenu
        orientation="horizontal"
        :items="logoutItem"
        class="w-auto"
      />
    </div>
  </nav>
</template>
