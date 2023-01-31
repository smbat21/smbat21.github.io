<template>
  <div class="app-info">
    <h1>Учет сотрудников в компании N</h1>
    <slot name="employees"></slot>
    <slot name="increase"></slot>
    <slot name="rise"></slot>
  </div>
</template>

<script>
export default {
  props: {
    increased: Number
  }
};
</script>

<style>
.app-info {
  margin-top: 30px;
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
}
</style>
