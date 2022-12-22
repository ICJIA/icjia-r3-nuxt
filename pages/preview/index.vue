<template>
  <div>
    <h1>Preview route here</h1>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Preview page",
});
const route = useRoute();
console.dir(route.path);
</script>

<style lang="scss" scoped></style>
