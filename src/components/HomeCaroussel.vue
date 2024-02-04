<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="image">
     <text class="title">INDONESIA</text>
     <button class="button">DISCOVER</button>
    </div>
    <div class="test"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  public windowWidth: number = window.innerWidth;
  public windowHeight: number = window.innerHeight;

   public mounted() {
       window.addEventListener('resize', this.handleResize);
   }

   public handleResize() {
       this.windowWidth = window.innerWidth;
       this.windowHeight = window.innerHeight;
   }

   public beforeDestroy() {
       window.removeEventListener('resize', this.handleResize);
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
.image {
 display: flex;
 justify-content: center;
 align-items: center;
  width: auto;
height:100vh;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/photo indonesia.jpg");
  flex-direction: column;
}
.title {
  color: rgb(255, 81, 0);
  font-size: 90px;
  padding: 10%;
  font-weight: bold;
  flex:1
}
.button {
  background-color: rgb(255, 81, 0);
  color:black;
 padding: 16px 48px;
 font-size: 16px;
 margin: 10%;
border-radius: 8px;
border-width: 0px;
font-weight: 900;
   transition: opacity 1s ease;

}
.button:hover {
  scale: 1.05;
  cursor: pointer;
}
.button:active {
  scale: 1;
  cursor: pointer;
}
.test {
  height: 500px;
  width: 200px;
  background-color: blueviolet;
}
</style>
