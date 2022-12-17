<template>
  <div>
    <v-card
      elevation="0"
      class="toc px-5 py-5 markdown-body"
      style="background: #fafafa"
    >
      <h2>TODO: Table of Contents</h2>

      <strong>Table of Contents: <br /> </strong>

      {{ props.data }}
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
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
  top: 185px !important;
  font-size: 14px !important;
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
