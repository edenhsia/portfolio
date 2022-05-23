<template>
  <div class="flex justify-center mb-5">
    <div class="flex bg-gray-200 p-2 rounded-md space-x-2 dark:bg-gray-700">
      <h2
        v-for="(value, key) in tabs"
        :key="key"
        @click="$emit('update:activeTab', value)"
        class="btn-tab"
        :class="{ active: activeTab === value }"
      >
        {{ value }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Object,
      required: true,
    },
    activeTab: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.btn-tab {
  @apply p-3 rounded-md text-lg font-medium transition-all duration-300 cursor-pointer md:px-10;

  &:hover,
  &.active {
    @apply bg-gray-50 dark:bg-gray-800;
  }
}
</style>
