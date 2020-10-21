<template>
  <div class="search-bar text-center">
    <b-form-input
      v-model="searchText"
      placeholder="Search for a movie/actor/producer"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  props: {
    isSearching: String,
  },
  data: () => ({
    searchText: "",
  }),
  watch: {
    searchText(newText) {
      if (newText.length > 4) {
        this.$emit("hasText", {
          hasText: true,
          word: newText,
        });
      } else {
        this.$emit("hasText", {
          hasText: false,
          word: "",
        });
      }
    },
  },
};
</script>

<style>
.search-bar {
  margin: 10px 20%;
}
</style>
