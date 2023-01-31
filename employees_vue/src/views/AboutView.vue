<template>
  <div class="app-info">
    <h1>Добавить нового сотрудника:</h1>
    <p>Ввести имя от 2 до 30 символов</p>
    <p>Ввести зарплату от 500 до 10 000 $</p>
  </div>
  <div class="app-info">
    <h1>Дать / отменить премию:</h1>
    <p>Нажать на &nbsp;<i class="fas fa-cookie btn-cookie"></i></p>
  </div>
  <div class="app-info">
    <h1>Повысить / отменить повышение сотрудника:</h1>
    <p>
      Кликнуть на сотрудника, появится / исчезнет&nbsp;
      <i class="fas fa-star"></i>
    </p>
  </div>
  <div class="app-info">
    <h1>Удалить сотрудника:</h1>
    <p>
      В разделе "Все сотрудники", нажать на &nbsp;<i class="fas fa-trash"></i>
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: 2rem;
  margin: 0;
}
.btn-cookie {
  color: #e09f3e;
}

.fa-star {
  color: #ffd700;
}
.fa-trash {
  color: #e5383b;
}
</style>
