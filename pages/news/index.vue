<template>
  <div class="mb-10">
    <v-container
      ><v-row
        ><v-col cols="12">
          <h1>News and Updates</h1>

          <div v-if="news" class="mt-12">
            <v-card
              v-for="(item, index) in sortedNews"
              :key="index"
              color="grey-lighten-4"
              class="px-5 py-10 my-10 info-card"
              @click="routeToNews(item.path)"
            >
              <div style="font-size: 10px; font-weight: 900">
                {{ formatDate(item.createdAt) }}
              </div>
              <h2 class="mt-5">{{ item.title }}</h2>
              <div class="mt-8">{{ item.summary }}</div>
            </v-card>
          </div>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
import _ from "lodash";
// definePageMeta({
//   middleware: ["is-valid-content"],
// });
useHead({
  title: "News and Updates",
});
const { path } = useRoute();
const router = useRouter();

// const error = useError();
const { data: news } = await useAsyncData(`news-${path}`, async () => {
  const post = await queryContent("/news").find();
  return post;
});

const sortedNews = _.orderBy(news.value, ["createdAt"], ["desc"]);

const redirect = () => {
  router.push("/404");
};

const routeToNews = (path) => {
  router.push(path);
};

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};
</script>

<style lang="scss" scoped></style>
