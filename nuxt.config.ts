import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      Components({
        resolvers: [
          (name: string) => {
            if (name.endsWith("Icon")) {
              return {
                name, // e.g. EyeIcon
                from: "@heroicons/vue/24/outline", // or use '@heroicons/vue/24/solid'
              };
            }
          },
        ],
        dts: true, // optional: generates `components.d.ts` for IDE auto-complete
      }),
    ],
  },
});
