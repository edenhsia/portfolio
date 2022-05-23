<template>
  <section>
    <div class="container flex flex-col items-center">
      <Tabs v-model:activeTab="activeTab" :tabs="TAB" />
      <div class="max-w-xl mx-auto">
        <Transition name="fade" mode="out-in">
          <ul
            v-if="activeTab === TAB.SKILL"
            class="skill-list columns-2 text-justify"
          >
            <li v-for="(skill, i) in skills" :key="i" class="skill-item">
              <font-awesome-icon
                :icon="['far', 'circle-play']"
                class="text-sky-500 mr-1"
              />
              {{ skill }}
            </li>
          </ul>
          <ol v-else class="experience space-y-6">
            <li v-for="(exp, i) in experience" :key="i">
              <time class="text-sm text-gray-700 dark:text-gray-300">
                {{ exp.from }} - {{ exp.to }}
              </time>
              <h3 class="font-medium text-sky-500 mb-2">
                {{ exp.position }} - {{ exp.company }}
              </h3>
              <ul
                class="pl-4 space-y-1.5 border-l-4 border-gray-800 dark:border-gray-100"
              >
                <li
                  v-for="(des, i) in exp.description"
                  :key="`des-${i}`"
                  class="text-gray-800 dark:text-gray-100"
                >
                  {{ des }}
                </li>
              </ul>
            </li>
          </ol>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from './Tabs.vue'

const TAB = {
  SKILL: 'Skill',
  EXPERIENCE: 'Experience',
}

export default {
  components: { Tabs },
  data: () => ({ activeTab: TAB.SKILL }),
  computed: {
    TAB: () => TAB,
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
    experience() {
      return [
        {
          position: 'Front-end developer',
          company: 'Freelance',
          from: 'Mar. 2022',
          to: 'Present',
          description: [
            'Built event website by using HTML/CSS/Bootstrap.',
            'Built fundraising website by using HTML/CSS/Tailwind.',
          ],
        },
        {
          position: 'Front-end developer',
          company: 'Fontech Co., Ltd',
          from: 'Sep. 2020',
          to: 'Feb. 2022',
          description: [
            'Built 17+ projects by using HTML/CSS/JavaScript/Tailwind/Vue/Nuxt.',
            'Collaborated with UI/UX designers, back-end developers to design, build and improve web products.',
            'Maintained/intergrated/rewrote older projects.',
            'Discussed with teammates for problematic issues.',
          ],
        },
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
