const app = Vue.createApp({
  data() {
    return {
      //courseGoal: 123,
      //courseGoal: "Learn Vue By Example!"
      courseGoal: { name: "Vue ", author: "sample", version: "1.1.1" },
      vueLink: "https://vuejs.org/v2/guide/",
    };
  },
});
//If we control a HTML element with Vue,
// we will also control all the child elements of that elements
// Control all child elements of that elements
app.mount("#user-goal");
