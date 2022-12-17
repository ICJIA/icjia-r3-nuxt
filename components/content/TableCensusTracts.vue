<template>
  <div>
    <div id="doublescroll" style="overflow-x: auto">
      <table id="example" class="display" style="font-size: 12px; width: 100%">
        <thead>
          <tr>
            <th>State</th>
            <th>Funding Region</th>
            <th>County</th>
            <th>census_tract_name</th>
            <th>census_tract_geoid</th>
            <th>high_need_area</th>
            <th>Service_Tier1_MinAmt</th>
            <th>Service_Tier1_MaxAmt</th>
            <th>Service_Tier2_MinAmt</th>
            <th>Service_Tier2_MaxAmt</th>
            <th>Service_Tier3_MinAmt</th>
            <th>Service_Tier3_MaxAmt</th>
            <th>Planning_Tier1_Min</th>
            <th>Planning_Tier1_Max</th>
            <th>Planning_Tier2_Min</th>
            <th>Planning_Tier2_Max</th>
            <th>Planning_Tier3_Min</th>
            <th>Planning_Tier3_Max</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in censusTracts" :key="`item-${index}`">
            <td>{{ item.state }}</td>
            <td>{{ item.r3_funding_region }}</td>
            <td>{{ item.county }}</td>
            <td>{{ item.census_tract_name }}</td>
            <td>{{ item.census_tract_geoid }}</td>
            <td>{{ item.high_need_area }}</td>
            <td>{{ item.Service_Tier1_MinAmt }}</td>
            <td>{{ item.Service_Tier1_MaxAmt }}</td>
            <td>{{ item.Service_Tier2_MinAmt }}</td>
            <td>{{ item.Service_Tier2_MaxAmt }}</td>
            <td>{{ item.Service_Tier3_MinAmt }}</td>
            <td>{{ item.Service_Tier3_MaxAmt }}</td>
            <td>{{ item.Planning_Tier1_Min }}</td>
            <td>{{ item.Planning_Tier1_Max }}</td>
            <td>{{ item.Planning_Tier2_Min }}</td>
            <td>{{ item.Planning_Tier2_Max }}</td>
            <td>{{ item.Planning_Tier3_Min }}</td>
            <td>{{ item.Planning_Tier3_Max }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import censusTracts from "~/assets/json/EligibleAreasCensusTracts2.json";

// console.dir(censusTracts);
const isLoaded = ref(false);

function doubleScroll(element) {
  const scrollbar = document.createElement("div");
  scrollbar.appendChild(document.createElement("div"));
  scrollbar.style.overflow = "auto";
  scrollbar.style.overflowY = "hidden";
  scrollbar.style.marginBottom = "15px";
  scrollbar.firstChild.style.width = element.scrollWidth + "px";
  scrollbar.firstChild.style.paddingTop = "1px";
  scrollbar.firstChild.appendChild(document.createTextNode("\xA0"));
  let running = false;
  scrollbar.onscroll = function () {
    if (running) {
      running = false;
      return;
    }
    running = true;
    element.scrollLeft = scrollbar.scrollLeft;
  };
  element.onscroll = function () {
    if (running) {
      running = false;
      return;
    }
    running = true;
    scrollbar.scrollLeft = element.scrollLeft;
  };
  element.parentNode.insertBefore(scrollbar, element);
}

useHead({
  title: "Sandbox",
  bodyAttrs: {},
  link: [],
  script: [],
});

onMounted(() => {
  $(document).ready(async () => {
    await nextTick();
    setTimeout(() => {
      $("#example").DataTable({
        responsive: false,
        autoWidth: false,
        pageLength: 25,
        fixedHeader: true,
        aLengthMenu: [
          [25, 50, 100, 250, -1],
          [25, 50, 100, 250, "All"],
        ],
      });
    }, 500);

    doubleScroll(document.getElementById("doublescroll"));
    isLoaded.value = true;
  });
});
</script>

<style scoped></style>
