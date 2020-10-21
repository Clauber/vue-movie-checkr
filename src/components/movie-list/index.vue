<template>
  <div class="container movie-list movie-container">
    <h5 class="card-title">{{ title }}</h5>
    <carousel :per-page="3" :mouse-drag="true" :navigationEnabled="true">
      <slide v-for="movie in list" :key="movie.key">
        <movie-item :movie="movie" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import MovieItem from "./movie-item";
export default {
  components: {
    Carousel,
    Slide,
    MovieItem,
  },
  props: {
    list: Array,
    title: String,
  },
};
</script>
