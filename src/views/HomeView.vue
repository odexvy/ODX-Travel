<template>
  <div class="home">
    <HomeCaroussel />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeCaroussel from "@/components/HomeCaroussel.vue"; // @ is an alias to /src

@Options({
  components: {
    HomeCaroussel,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped>
.home {
}
</style>
