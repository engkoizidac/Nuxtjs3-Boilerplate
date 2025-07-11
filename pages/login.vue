<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { useFetch } from "#app";

const router = useRouter();

const form = reactive({
  username: "",
  password: "",
});

const loading = ref(false);
const showPassword = ref(false);
const errorMessage = ref("");

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const data = await $fetch("/api/auth/login", {
      method: "POST",
      body: form,
      credentials: "include", // ✅ required to receive and send cookies
    });

    console.log("Login success:", data);
    // Optional: store user info
    // useAuthStore().setUser(data.user);
    router.push("/dashboard");
  } catch (err: any) {
    console.error("Login failed:", err);
    errorMessage.value =
      err?.statusCode === 401
        ? "Invalid username or password."
        : "An error occurred. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <UContainer
    class="flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 pt-32"
  >
    <UCard class="w-full max-w-md shadow-2xl rounded-2xl px-6 py-2 space-y-6">
      <template #header>
        <div class="text-center space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold text-primary">
            Welcome Back
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            Please login to your account
          </p>
        </div>
      </template>

      <UForm :state="form" @submit.prevent="handleLogin" class="space-y-5">
        <div class="space-y-1">
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Username
          </label>
          <UInput
            id="username"
            v-model="form.username"
            placeholder="Enter your username"
            size="xl"
            icon="i-heroicons-user"
            autocomplete="username"
            class="w-full"
          />
        </div>

        <div class="space-y-1 relative">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>

          <!-- Wrap input + eye button -->
          <div class="relative">
            <UInput
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              size="xl"
              icon="i-heroicons-lock-closed"
              autocomplete="current-password"
              class="w-full"
            />
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <template v-if="showPassword">
                <EyeIcon class="w-5 h-5" />
              </template>
              <template v-else>
                <EyeSlashIcon class="w-5 h-5" />
              </template>
            </button>
          </div>
        </div>

        <div class="space-y-1 pt-2">
          <UButton
            type="submit"
            color="primary"
            block
            size="lg"
            :loading="loading"
          >
            Login
          </UButton>
          <div v-if="errorMessage" class="text-red-600 text-sm text-center">
            {{ errorMessage }}
          </div>
        </div>
      </UForm>
    </UCard>
  </UContainer>
</template>
