<template>
  <ul class="app-list list-group">
    <employees-list-item
      v-for="employee in employees"
      :key="employee.id"
      :employeesItem="employee"
      @toggle-rise="toggleRise"
      @toggle-increase="toggleIncrease"
      @delete-item="deleteItem"
    ></employees-list-item>
  </ul>
</template>

<script>
import EmployeesListItem from "./EmployeesListItem.vue";

export default {
  components: {
    EmployeesListItem
  },
  props: {
    employees: {
      type: Array,
      required: true
    }
  },
  emits: ["toggleRise", "toggleIncrease", "deleteItem"],
  methods: {
    toggleRise(id) {
      this.$emit("toggleRise", id);
    },
    toggleIncrease(id) {
      this.$emit("toggleIncrease", id);
    },
    deleteItem(item) {
      this.$emit("deleteItem", item);
    }
  }
};
</script>

<style scoped>
.app-list {
  margin-top: 30px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
}
</style>
