<template>
  <div class="mt-0">
    <v-card
      elevation="0"
      class="toc px-5 py-5 markdown-body"
      style="border-left: 0px solid #eee"
    >
      <h2>Navigation</h2>
      <div v-for="(item, index) in props.data.links" :key="index" class="pl-3">
        <div
          :id="`toc-${item.id}`"
          class="mb-3 hover toc-item"
          @click="scrollTo(item.id)"
        >
          {{ item.text }}
        </div>
      </div>
      <br /><br />
      <!-- Debug:<br />
      {{ props.data }} -->
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
window.onscroll = function () {
  // console.log("scrolling");
};

const scrollTo = (id) => {
  console.log("scrolling to", id);
  const el = document.querySelector(`#${id}`);
  console.log("el: ", el);
  window.scrollTo({
    behavior: "smooth",
    top:
      el.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      80,
  });
};
</script>

<style>
/* TOC Styles */

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
  top: 115px !important;
  font-size: 14px !important;
}

.toc-item {
  margin-bottom: 3px;
  font-size: 14px;
}

.toc-item:hover {
  font-weight: 700;
}

/* ul.toc-list {
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
} */

/* .tocItem {
} */
</style>
