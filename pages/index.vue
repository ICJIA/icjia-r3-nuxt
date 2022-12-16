<template>
  <div>
    <div v-if="data">
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
                <div class="text-center px-12" style="margin-top: 100px">
                  <h1 class="nofo-title mt-3">{{ item.title }}</h1>
                  <div class="nofo-tagline">
                    {{ item.tagline }}
                  </div>
                  <div>
                    <v-btn
                      variant="outlined"
                      color="white"
                      class="mt-8"
                      @click="routeToFunding(item)"
                      >Find out more</v-btn
                    >
                  </div>
                </div>
                <template #placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-4"
                    ></v-progress-circular>
                  </div>
                </template>
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
      <div
        class="mt-10 pb-12"
        style="
          background: #fafafa;
          border-top: 1px solid #aaa;
          min-height: 30vh;
        "
      >
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="6"><h2>Applicant Tools</h2> </v-col>
            <v-col cols="12" md="6">
              <h2>News & Updates</h2>
              <!-- <div v-if="test">{{ test[0].title }}</div> -->

              <v-card
                v-for="item in sortedNews"
                :key="item.id"
                elevation="1"
                class="px-5 py-3 mb-3"
                @click="routeToNews(item)"
              >
                <div style="font-size: 12px; font-weight: 700">
                  {{ formatDate(item.createdAt) }}
                </div>
                <h3
                  style="
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 8px;
                    margin-bottom: 20px;
                  "
                >
                  {{ item.title }}
                </h3>
                <p>{{ item.summary }}</p>
              </v-card>
              <div class="text-center mt-10">
                <nuxt-link to="/news" class="home-link"
                  >News archive&nbsp;&raquo;</nuxt-link
                >
              </div>
            </v-col></v-row
          ></v-container
        >
      </div>
    </div>
    <div v-else>
      <v-container class="text-center" style="margin-top: 200px">
        <v-row>
          <v-col>
            <h1 id="loading" style="border-bottom: 0px; margin-bottom: 50px">
              R3 RESTORE. REINVEST. RENEW.
            </h1>
            <TheAltLoader></TheAltLoader></v-col></v-row
      ></v-container>
    </div>
  </div>
</template>

<script setup>
import _ from "lodash";
const { splash } = useAppConfig();
const { path } = useRoute();
const router = useRouter();
const isMounted = ref(false);

// const error = useError();
const { data } = await useAsyncData(`content-home`, async () => {
  const post = await queryContent().where({ _path: "/" }).findOne();
  return post;
});
const { data: news } = await useAsyncData(`news-${path}`, async () => {
  const post = await queryContent("/news").find();

  return post;
});

const redirect = () => {
  router.push("/404");
};

let sortedNews = _.orderBy(news.value, ["createdAt"], ["desc"]);
sortedNews = sortedNews.slice(0, 3);

const routeToNews = (item) => {
  router.push(`/news/${item.slug}`);
};

const routeToFunding = (item) => {
  alert("Route to funding info here");
};

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<style>
a.home-link {
  color: #333;
}

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
