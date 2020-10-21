<template>
  <div class="#index">
    <main-search @hasText="updateIsSearching($event)" />
    <movie-list title="Popular Movies" :list="popular.results"></movie-list>
    <movie-list title="Upcoming Movies" :list="upcoming.results"></movie-list>
    <movie-list title="Now Playing" :list="nowPlaying.results"></movie-list>
    Upcoming Movies Now Playing
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
    popular: [],
    upcoming: [],
    nowPlaying: [],
    searchResults: [],
  }),
  methods: {
    updateIsSearching(value) {
      this.isSearching = value;
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
    getSearchResults(keyWord) {
      var vm = this;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}&query=${keyWord}&page=1`
        )
        .then((response) => {
          vm.searchResults = response.data;
        });
    },
  },
  created() {
    console.log("process.env", process.env);
    this.getPopularMovies();
    this.getUpcomingMovies();
    this.getNowPlaying();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
