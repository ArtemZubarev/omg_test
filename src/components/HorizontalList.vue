<template>
  <div class="horizontal-list-container">
    <div class="horizontal-list-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style>
.horizontal-list-container {
  overflow-x: auto;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.horizontal-list-content {
  display: flex;
  margin: 5px;

  max-width: 100%;
}
</style>
