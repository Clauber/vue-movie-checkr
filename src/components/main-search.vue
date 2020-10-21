<template>
  <div class="search-bar text-center">
    <b-form-input v-model="searchText" placeholder="Search for a movie/actor/producer"></b-form-input>
  </div>
</template>

<script>
export default {
  props: {
    isSearching: String
  },
  data: () => ({
    searchText: ""
  }),
  watch: {
    searchText(newText) {
      if (newText.length > 0) {
        this.$emit("hasText", true);
      } else {
        this.$emit("hasText", false);
      }
    }
  }
};
</script>

<style>
.search-bar {
  margin: 10px 20%;
}
</style>
