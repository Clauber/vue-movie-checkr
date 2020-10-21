<template>
  <div class="card">
    <img
      class="card-img-top"
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      alt="Movie Poster"
    />
    <div class="card-body">
      <h5 class="card-title">
        {{ getTitle() }}
        {{ getReleaseDate() }}
      </h5>
      <p class="card-text">
        {{ getMovieOverview() }}
      </p>
    </div>
    <router-link class="btn btn-primary" :to="`/movie/${movie.id}`"
      >Read More</router-link
    >
  </div>
</template>

<script>
import { truncate } from "lodash";
export default {
  props: {
    movie: Object,
  },
  methods: {
    getTitle() {
      return this.movie &&
        this.movie.original_title &&
        this.movie.original_title.length > 0
        ? truncate(this.movie.original_title, {
            length: 24,
          })
        : "";
    },
    getReleaseDate() {
      return this.movie &&
        this.movie.release_date &&
        this.movie.release_date.length > 0
        ? truncate(this.movie.release_date, {
            length: 24,
          })
        : "";
    },
    getMovieOverview() {
      return this.movie && this.movie.overview
        ? truncate(this.movie.overview, {
            length: 90,
          })
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0 12px;
  .card-title {
    min-height: 50px;
  }
  .card-text {
    min-height: 100px;
  }
}
</style>
