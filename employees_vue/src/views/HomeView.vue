<template>
  <app-info>
    <template #employees
      ><h2>Общее число сотрудников: {{ employeesCount }}</h2>
    </template>
    <template #increase>
      <h2>Премию получат: {{ increaseCount }}</h2>
    </template>
    <template #rise
      ><h2>На повышение: {{ riseCount }}</h2>
    </template>
  </app-info>
  <app-filter @filter-btn="filterBtn"></app-filter>
  <employees-list
    :employees="visibleEmployees"
    @toggle-rise="toggleRise"
    @toggle-increase="toggleIncrease"
    @delete-item="deleteItem"
  ></employees-list>
  <employees-add-form @add-employee="addEmployee"></employees-add-form>
</template>

<script>
import AppInfo from "../components/AppInfo.vue";
import AppFilter from "../components/AppFilter.vue";
import EmployeesList from "../components/EmployeesList.vue";
import EmployeesAddForm from "../components/EmployeesAddForm.vue";

export default {
  components: {
    AppInfo,
    AppFilter,
    EmployeesList,
    EmployeesAddForm
  },
  data() {
    return {
      employees: [
        { name: "John C.", salary: 800, increase: true, rise: true, id: 1 },
        { name: "Alex M.", salary: 5000, increase: false, rise: false, id: 2 },
        { name: "Carl W.", salary: 3000, increase: true, rise: false, id: 3 }
      ],
      maxid: 4,
      visibleEmployees: []
    };
  },
  methods: {
    toggleRise(id) {
      const index = this.employees.findIndex(employee => employee.id === id);
      this.employees[index].rise = !this.employees[index].rise;
    },
    toggleIncrease(id) {
      const index = this.employees.findIndex(employee => employee.id === id);
      this.employees[index].increase = !this.employees[index].increase;
    },
    deleteItem(item) {
      this.employees = this.employees.filter(elem => elem !== item);
      this.visibleEmployees = [...this.employees];
      console.log(this.employees);
    },
    addEmployee(name, salary) {
      this.employees.push({
        name: name,
        salary: salary,
        increase: false,
        rise: false,
        id: this.maxid++
      });
      this.visibleEmployees = [...this.employees];
    },
    searchEmp(term) {
      if (term.length == 0) {
        this.visibleEmployees = [...this.employees];
      }
      this.visibleEmployees = this.employees.filter(item => {
        return item.name.indexOf(term) > -1;
      });
    },
    filterBtn(name) {
      switch (name) {
        case "rise":
          this.visibleEmployees = this.employees.filter(item => item.rise);
          break;
        case "moreThen1000":
          this.visibleEmployees = this.employees.filter(
            item => item.salary > 1000
          );
          break;
        case "increase":
          this.visibleEmployees = this.employees.filter(item => item.increase);
          break;
        default:
          this.visibleEmployees = [...this.employees];
          break;
      }
    }
  },
  mounted() {
    this.visibleEmployees = [...this.employees];
    console.log("mounted");
  },
  computed: {
    increaseCount() {
      return this.employees.filter(item => item.increase).length;
    },
    employeesCount() {
      return this.employees.length;
    },
    riseCount() {
      return this.employees.filter(item => item.rise).length;
    }
  }
};
</script>

<style></style>
