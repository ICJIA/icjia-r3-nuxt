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
            <v-card
              elevation="0"
              class="toc px-5 py-5 markdown-body"
              style="background: #fafafa"
            >
              <h2>TODO: Table of Contents</h2>

              <strong>Show table of contents: <br /></strong>
              {{ data.showTableOfContents }}<br /><br /><strong
                >Table of Contents: <br />
              </strong>
              {{ data.body.toc }}
            </v-card>
          </v-col>
        </v-row></v-container
      >
    </div>
  </div>
</template>

<style scoped>
.divider {
  border-left: 1px solid #ccc;
}
.visible {
  color: #0d4474;
  font-weight: bold;
}
.anchor {
  padding: 2px 5px 2px 5px;
}
.anchor:hover {
  color: #0d4474;
  background: #eee;
}
.shaded {
  background: #eee;
  padding: 15px;
  margin-bottom: 25px;
}
.toc {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 185px !important;
  font-size: 14px;
}
ul.toc-list {
  list-style-type: none;
}
ul.toc-list li {
  color: #333;
  padding: 2px 5px 2px 5px;
  cursor: pointer;
  margin-bottom: 3px;
  font-size: 14px;
}
ul.toc-list li:hover {
  color: #aaa;
  background: #eee;
}
.tocListItem {
  margin-left: -20px !important;
}
/* .tocItem {
} */
@media only screen and (max-width: 1024px) {
  /* .divider {
    border-left: 0px solid #ccc;
  } */
  ul.toc-list li:hover {
    color: #fff;
    background: #aaa;
  }
}
</style>
