<template>
  <div v-if="data && isMounted">
    <v-container fluid class="full-width">
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in splash"
          :key="`splash-photo-${index}`"
          style="background: #ccc"
          cols="12"
          md="6"
        >
          <v-card class="hoverCard" style="min-height: 500px">
            <v-img
              cover
              :src="item.src"
              :lazy-src="item.lazySrc"
              aspect-ratio="1"
              class="grey lighten-2"
              height="550"
            >
              <div class="text-center px-12" style="margin-top: 150px">
                <h1 class="nofo-title mt-3">{{ item.title }}</h1>
                <div class="nofo-tagline">
                  {{ item.tagline }}
                </div>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12">
          <ContentDoc
            :key="data?.title"
            :value="data"
            class="markdown-body mt-12"
          >
            <template #empty>Document not found</template>
            <template #not-found>Document not found</template>
          </ContentDoc>
        </v-col></v-row
      ></v-container
    >
    <div style="background: #fafafa" class="mt-10">
      <v-container
        fluid
        style="
          margin: 0;
          padding: 0;
          border-top: 1px solid #aaa;
          min-height: 30vh;
        "
      >
        <v-row>
          <v-col cols="12" md="6"> The Tool boxes here </v-col>
          <v-col cols="12" md="6"> The News here </v-col></v-row
        ></v-container
      >
    </div>
  </div>
</template>

<script setup>
const { splash } = useAppConfig();
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
.nofo-tagline {
  color: #fff;
}
.nofo-title {
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 10px #000;
}
.full-width {
  margin: 0;
  padding: 0;
}
.white-heading {
  color: #fff !important;
}
.dark-rule {
  border-bottom: 1px solid #000 !important;
}
</style>
