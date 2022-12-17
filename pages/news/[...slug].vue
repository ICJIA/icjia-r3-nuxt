<script setup>
// definePageMeta({
//   middleware: ["is-valid-content"],
// });

const { path } = useRoute();
const router = useRouter();

// const error = useError();
const showTOC = ref(false);

const { data } = await useAsyncData(`content-${path}`, async () => {
  const post = await queryContent().where({ _path: path }).findOne();
  return post;
});
const redirect = () => {
  router.push("/404");
};
const cols = ref(12);
onMounted(() => {
  if (data.value.showTableOfContents) {
    showTOC.value = true;
    cols.value = 8;
  }
});
</script>

<template>
  <div>
    <div v-if="data">
      <v-container class="mb-12 mt-6" fluid
        ><v-row
          ><v-col cols="12" :md="cols">
            <div>
              <h1>{{ data.title }}</h1>
              <ContentDoc
                :key="data?.title"
                :value="data"
                class="markdown-body"
              >
                <template #empty>Document not found</template>
                <template #not-found>Document not found</template>
              </ContentDoc>
            </div>
            <!-- <div v-else>{{ redirect() }}</div> -->
          </v-col>

          <v-col
            v-if="showTOC"
            cols="12"
            md="4"
            style="min-height: 40vh !important"
            class="hidden-sm-and-down"
          >
            <TheTableOfContents :data="data.body.toc" class="toc" />
          </v-col> </v-row
      ></v-container>
    </div>
  </div>
</template>
