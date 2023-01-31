<template>
  <div class="btn-group search-panel">
    <button
      v-for="btn in buttonsData"
      :key="btn"
      type="button"
      @click="filterBtn(btn.name)"
      class="btn"
      :class="{
        'btn-light': btn.light,
        'btn-outline-light': btn.outline
      }"
    >
      {{ btn.label }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonsData: [
        { name: "all", label: "Все сотрудники", light: true, outline: false },
        {
          name: "increase",
          label: "Премию получат",
          light: false,
          outline: true
        },
        { name: "rise", label: "На повышение", light: false, outline: true },
        {
          name: "moreThen1000",
          label: "З/П больше 1000$",
          light: false,
          outline: true
        }
      ]
    };
  },
  emits: ["filterBtn"],
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

<style scoped>
.search-panel {
  display: block;
  margin-top: 30px;
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
}
</style>
