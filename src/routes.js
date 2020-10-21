import Index from "./views/Index.vue";
import Movie from "./views/movie";
const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/movie/:movieId",
    component: Movie,
  },
];
export default routes;
