<template>
  <div class="app-add-form">
    <h3>Добавьте нового сотрудника</h3>
    <form class="add-form d-flex" @submit.prevent="addEmployee">
      <input
        type="text"
        required
        minlength="2"
        maxlength="30"
        class="form-control"
        placeholder="Как его зовут?"
        v-model="name"
      />
      <input
        type="number"
        required
        min="500"
        max="10000"
        class="form-control"
        placeholder="З/П в $?"
        v-model="salary"
      />
      <button type="submit" class="btn btn-outline-light">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      salary: ""
    };
  },
  emits: ["addEmployee"],
  methods: {
    addEmployee() {
      this.$emit("addEmployee", this.name, this.salary);
      this.name = "";
      this.salary = "";
    }
  }
};
</script>

<style scoped>
.app-add-form {
  margin-top: 30px;
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
}

.add-form {
  margin-top: 20px;
}

.add-form input {
  width: 350px;
  margin-right: 20px;
}
</style>
