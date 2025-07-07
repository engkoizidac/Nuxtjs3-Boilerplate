<script setup lang="ts">
const { data: users, pending, error } = await useFetch("/api/users/users");
</script>

<template>
  <div>
    <h1>User List (via API)</h1>

    <div v-if="pending">Loading users...</div>
    <div v-if="error">Error loading users: {{ error.message }}</div>

    <ul v-if="users && users.length">
      <li v-for="u in users" :key="u.id">
        <strong>{{ u.fullName }}</strong> ({{ u.username }}) — Status:
        {{ u.status }}
      </li>
    </ul>
  </div>
</template>
