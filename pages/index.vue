<template>
  <div v-if="data && isMounted">
    <v-container fluid class="full-width">
      <v-row no-gutters>
        <v-col style="background: #ccc" cols="12" md="6">
          <v-card class="hoverCard">
            <v-img
              cover
              src="https://r3.icjia-api.cloud/uploads/new_splash_01_0ca141e7db.jpg?updated_at=2022-12-15T16:26:21.124Z"
              lazy-src="https://r3.icjia-api.cloud/uploads/thumbnail_new_splash_01_0ca141e7db.jpg"
              aspect-ratio="1"
              class="grey lighten-2"
              height="550"
            >
              <div class="text-center px-12" style="margin-top: 150px">
                <h1 class="nofo-title mt-3">PLANNING AND CAPACITY BUILDING</h1>
                <div class="nofo-tagline">
                  Grants to provide funds for organizations to develop a
                  community plan for service provision or to build their own
                  internal capacity to provide services.
                </div>

                <!-- <v-btn
                  class="mt-6"
                  variant="outlined"
                  color="white"
                  style="font-weight: 900"
                  >Expired</v-btn
                > -->
              </div>
            </v-img>
          </v-card>
        </v-col>
        <v-col style="background: #ccc" cols="12" md="6">
          <v-card class="hoverCard">
            <v-img
              cover
              src="https://r3.icjia-api.cloud/uploads/new_splash_02_c981e61127.jpg?updated_at=2022-12-15T16:26:20.125Z"
              lazy-src="https://r3.icjia-api.cloud/uploads/thumbnail_new_splash_02_c981e61127.jpg?updated_at=2022-12-15T16:26:20.125Z"
              aspect-ratio="1"
              class="grey lighten-2"
              height="550"
            >
              <div class="text-center px-12" style="margin-top: 150px">
                <h1 class="nofo-title mt-3">SERVICE AND DELIVERY</h1>
                <div class="nofo-tagline">
                  Grants to provide services to repair the harm caused by
                  economic disinvestment, violence, and the war on drugs
                </div>

                <!-- <v-btn
                  class="mt-6"
                  variant="outlined"
                  color="white"
                  style="font-weight: 900"
                  >Expired</v-btn
                > -->
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
