<template>
  <div>External Modal here</div>
</template>

<script setup>
const dialog = ref(false);
const show = ref(true);
const toggleState = useTranslateToggle();
const closeDialog = () => {
  dialog.value = false;
  toggleState.value = false;
};

watch(dialog, () => {
  toggleState.value = dialog.value;
});
watchEffect(() => {
  dialog.value = toggleState.value;
});
</script>

<style lang="scss" scoped></style>
