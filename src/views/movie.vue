<template>
  <div>
    <div>
      <router-link to="/" class="btn btn-primary">Back</router-link>
    </div>
    <div class="container">
      <div v-if="!!selectedMovie">
        <div class="movie-container">
          <h3>{{ selectedMovie.original_title }}</h3>
          <img
            :src="
              `https://image.tmdb.org/t/p/w780/${selectedMovie.backdrop_path}`
            "
            alt="Movie Backdrop"
          />
          <p>
            <a :href="`${selectedMovie.homepage}`"
              >{{ selectedMovie.original_title }} - Home Page</a
            >
          </p>
          <p>{{ selectedMovie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    selectedMovie: null,
  }),
  created() {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${this.$route.params.movieId}?api_key=${process.env.VUE_APP_MOVIEDB_API_KEY}`
    ).then((response) => {
      this.selectedMovie = response.data;
    });
  },
};
</script>
