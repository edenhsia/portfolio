<template>
  <section>
    <div class="container flex flex-col items-center">
      <h2 class="text-center font-medium text-lg mb-3">Skills</h2>
      <ul class="skill-list columns-2 text-justify">
        <li v-for="(skill, i) in skills" :key="i" class="skill-item">
          <font-awesome-icon
            :icon="['far', 'circle-play']"
            class="text-sky-500 mr-1"
          />
          {{ skill }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    skills() {
      return [
        'HTML',
        'CSS',
        'JavaScript',
        'Vue',
        'Tailwind',
        'Git',
        'Bootstrap',
        'Bulma',
      ]
    },
  },
}
</script>

<style scoped>
.skill-item {
  @apply px-4 py-2;
}
</style>
