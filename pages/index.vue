<template>
  <div v-if="data && isMounted">
    <ContentDoc :key="data?.title" :value="data" class="markdown-body mt-12">
      <template #empty>Document not found</template>
      <template #not-found>Document not found</template>
    </ContentDoc>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6"> Tool boxes here </v-col>
        <v-col cols="12" md="6"> News here </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
const { path } = useRoute();
const router = useRouter();
const isMounted = ref(false);

// const error = useError();
const { data } = await useAsyncData(`content-home`, async () => {
  const post = await queryContent().where({ _path: "/" }).findOne();
  return post;
});
const redirect = () => {
  router.push("/404");
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<style>
.white-heading {
  color: #fff !important;
}
.dark-rule {
  border-bottom: 1px solid #000 !important;
}
</style>
