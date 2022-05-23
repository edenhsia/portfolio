<template>
  <section>
    <div class="container">
      <Tabs v-model:activeTab="activeTab" :tabs="TAB" />
      <div class="max-w-xl mx-auto">
        <Transition name="fade" mode="out-in">
          <ul v-if="activeTab === TAB.PROJECTS" class="projects space-y-6">
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
          <ul v-else class="space-y-8">
            <li v-for="(pen, i) in codePen" :key="i">
              <iframe
                height="324"
                style="width: 100%"
                scrolling="no"
                title="Playlist using  counter"
                :src="`https://codepen.io/edenhsia/embed/${pen.id}?default-tab=result`"
                frameborder="no"
                loading="lazy"
                allowtransparency="true"
                allowfullscreen="true"
                class="mb-3"
              >
                See the Pen
                <a :href="`https://codepen.io/edenhsia/pen/${pen.id}`">
                  Playlist using css counter
                </a>
                by Eden Hsia (<a href="https://codepen.io/edenhsia">@edenhsia</a
                >) on <a href="https://codepen.io">CodePen</a>.
              </iframe>
              <h3 class="font-medium">{{ pen.name }}</h3>
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
  PROJECTS: 'Projects',
  CODE_PEN: 'Code Pen',
}

export default {
  components: { Tabs },
  data: () => ({ activeTab: TAB.PROJECTS }),
  computed: {
    TAB: () => TAB,
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
    codePen() {
      return [
        {
          id: 'YzeQwze',
          name: 'Playlist using css counter',
        },
        {
          id: 'yLOMRoa',
          name: 'Circular timer animation',
        },
        {
          id: 'XWZaYyY',
          name: 'Progress bar',
        },
        {
          id: 'KKmNVjZ',
          name: 'Linear border animation',
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
