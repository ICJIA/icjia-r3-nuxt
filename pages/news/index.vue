<template>
  <div>
    <h1>All news posts</h1>
    <div v-if="data">
      {{ data }}
    </div>
    <!-- <nuxtLink to="/news/test-post-1">Test Post 1</nuxtLink><br />
    <nuxtLink to="/news/test-post-2">Test Post 2</nuxtLink><br />
    <nuxtLink to="/news/test-post-3">Test Post 3</nuxtLink><br /> -->
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: ["is-valid-content"],
// });
useHead({
  title: "Latest News",
});
const { path } = useRoute();
const router = useRouter();

// const error = useError();
const { data } = await useAsyncData(`news-${path}`, async () => {
  const post = await queryContent("/news").find();
  return post;
});
const redirect = () => {
  router.push("/404");
};
</script>

<style lang="scss" scoped></style>
