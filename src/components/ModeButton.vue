<template>
  <div class="container text-right">
    <button @click="$emit('switch')">
      <font-awesome-icon :icon="['fas', 'circle-half-stroke']" />
    </button>
  </div>
</template>

<script>
export default {
  emits: ['switch'],
}
</script>
