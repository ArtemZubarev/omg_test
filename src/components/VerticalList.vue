<template>
  <div class="vertical-list">
    <RecycleScroller :items="list" :item-size="60" key-field="id" class="scroller">
      <template v-slot="{ item }">
        <HorizontalList>
          <ListItem
            v-for="horizontalItem in item.value"
            :value="horizontalItem.value"
            :key="horizontalItem.id"
          />
        </HorizontalList>
      </template>
    </RecycleScroller>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HorizontalList from './HorizontalList.vue';
import ListItem from './ListItem.vue';
import { generateRandomArray, generateRandomNumber } from '@/utils';

const listLength = generateRandomNumber(10000);
const list = computed(() => generateRandomArray(listLength));
</script>

<style>
.vertical-list {
  display: flex;
  flex-direction: column;
  /* width: 80%; */
}

.scroller {
  overflow-y: auto;
  max-height: 100vh;
}
</style>
