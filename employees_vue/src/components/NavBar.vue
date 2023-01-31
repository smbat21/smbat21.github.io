<template>
  <nav class="btn-group navbar">
    <router-link
      v-for="btn in buttonsData"
      :key="btn"
      :to="btn.link"
      @click="filterBtn(btn.name)"
    >
      <button
        class="btn navbtn"
        type="button"
        :class="{
          'btn-light': btn.light,
          'btn-outline-light': btn.outline
        }"
      >
        {{ btn.label }}
      </button>
    </router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      buttonsData: [
        {
          name: "home",
          link: "/",
          label: "Главная",
          light: true,
          outline: false
        },
        {
          name: "about",
          link: "/about",
          label: "Инструкция",
          light: false,
          outline: true
        }
      ]
    };
  },
  methods: {
    filterBtn(name) {
      this.$emit("filterBtn", name);
      this.buttonsData.map(btn => {
        btn.light = false;
        btn.outline = true;
        if (btn.name == name) {
          btn.light = true;
          btn.outline = false;
        }
      });
    }
  }
};
</script>

<style>
nav a {
  text-decoration: none;
  color: white;
}

nav a.router-link-exact-active {
  color: black;
}
.navbar {
  display: block;
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
}
.navbtn {
  margin-right: 40px;
}
</style>
