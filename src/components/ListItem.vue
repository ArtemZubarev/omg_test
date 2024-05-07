<template>
  <div class="square">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ value }>();
</script>
<style>
.square {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px; /* Измените радиус скругления */
  text-align: center;
  line-height: 50px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  flex-shrink: 0;
}

.square:hover {
  transform: scale(0.8);
}
</style>
