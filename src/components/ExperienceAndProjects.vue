<template>
  <section>
    <div class="container">
      <Tabs v-model:activeTab="activeTab" :tabs="TAB" />
      <div class="max-w-xl mx-auto">
        <Transition name="fade" mode="out-in">
          <ol v-if="activeTab === TAB.EXPERIENCE" class="experience space-y-6">
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
          <ul v-else class="projects space-y-6">
            <li v-for="(project, i) in projects" :key="i">
              <a :href="project.link" target="_blank" class="image mb-3">
                <div class="responsive">
                  <img :src="project.image" alt="project screenshot" />
                  <span
                    class="bg-gray-900/40 flex justify-center items-center transition-opacity duration-300 opacity-0 hover:opacity-100"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'link']"
                      class="text-white text-3xl"
                    />
                  </span>
                </div>
              </a>
              <div class="text">
                <h3 class="font-medium mb-2">{{ project.name }}</h3>
                <div class="skillset flex flex-wrap mb-2">
                  <span
                    v-for="(skill, i) in project.skillset"
                    :key="`skill-${i}`"
                    class="rounded-full bg-sky-500 px-3 py-0.5 text-sm mr-2 mb-2 text-gray-50"
                  >
                    {{ skill }}
                  </span>
                </div>
                <ul
                  class="pl-4 space-y-1.5 border-l-4 border-gray-800 dark:border-gray-100"
                >
                  <li v-for="(des, i) in project.description" :key="`des-${i}`">
                    {{ des }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from './Tabs.vue'

const TAB = {
  EXPERIENCE: 'Experience',
  PROJECTS: 'Projects',
}

export default {
  components: { Tabs },
  data: () => ({ activeTab: TAB.EXPERIENCE }),
  computed: {
    TAB: () => TAB,
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
    projects() {
      return [
        {
          name: 'OAuth Todos',
          image: new URL('../assets/project-oauth-todos.png', import.meta.url)
            .href,
          skillset: ['HTML', 'CSS', 'RWD', 'JavaScript', 'NodeJs', 'Bulma'],
          description: [
            'Todo app integrated with Google OAuth.',
            "Upgraded version of Hello, today's todo.",
          ],
          link: 'https://oauth-todos.herokuapp.com/',
        },
        {
          name: 'Hello, today',
          image: new URL('../assets/project-hello-today.png', import.meta.url)
            .href,
          skillset: ['HTML', 'CSS', 'JavaScript'],
          description: [
            'A website for people to check time/weather, write down todos and take a break.',
            "It's a non-RWD website, recommend using on desktop.",
          ],
          link: 'https://edenhsia.github.io/Hello-Today',
        },
        {
          name: 'Webbplats',
          image: new URL('../assets/project-webbplats.png', import.meta.url)
            .href,
          skillset: ['HTML', 'CSS', 'RWD', 'JavaScript'],
          description: ['A simple template website.'],
          link: 'https://edenhsia.github.io/Webbplats',
        },
      ]
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

.projects .image {
  @apply block w-full rounded-2xl overflow-hidden;

  .responsive {
    @apply relative;

    padding-bottom: calc(9 / 16 * 100%);

    > * {
      @apply absolute w-full h-full left-0 top-0 object-cover;
    }
  }
}
</style>
