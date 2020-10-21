<template>
  <div class="#index">
    <main-search @hasText="updateIsSearching($event)" />
    <movie-list
      v-if="isSearching"
      :title="`Searching for ${searchKeyword}`"
      :list="searchResults.results"
    ></movie-list>
    <template v-else>
      <movie-list title="Popular Movies" :list="popular.results"></movie-list>
      <movie-list title="Upcoming Movies" :list="upcoming.results"></movie-list>
      <movie-list title="Now Playing" :list="nowPlaying.results"></movie-list>
    </template>
  </div>
</template>

<script>
import MainSearch from "@/components/main-search";
import MovieList from "@/components/movie-list";
import axios from "axios";
export default {
  name: "index",
  components: { MainSearch, MovieList },
  data: () => ({
    isSearching: false,
    searchKeyword: "",
    popular: [],
    upcoming: [],
    nowPlaying: [],
    searchResults: [],
  }),
  methods: {
    updateIsSearching(isSearching) {
      this.isSearching = isSearching.hasText;
      if (isSearching.hasText) {
        this.searchKeyword = isSearching.word;
        this.getSearchResults();
      }
    },
    getPopularMovies() {
      var vm = this;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}&page=1`
        )
        .then((response) => {
          vm.popular = response.data;
        });
    },
    getUpcomingMovies() {
      var vm = this;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}&page=1`
        )
        .then((response) => {
          vm.upcoming = response.data;
        });
    },
    getNowPlaying() {
      var vm = this;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}&page=1`
        )
        .then((response) => {
          vm.nowPlaying = response.data;
        });
    },
    getSearchResults() {
      var vm = this;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}&query=${this.searchKeyword}&page=1`
        )
        .then((response) => {
          vm.searchResults = response.data;
        });
    },
  },
  created() {
    this.getPopularMovies();
    this.getUpcomingMovies();
    this.getNowPlaying();
  },
};
</script>
