<template>
  <div class="py-10 space-y-12">
    <ModeButton @switch="switchMode" />
    <About />
    <Skill />
    <ExperienceAndProjects class="pb-12" />
  </div>
</template>

<script>
import ModeButton from './components/ModeButton.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import ExperienceAndProjects from './components/ExperienceAndProjects.vue'

const MODE = {
  LIGHT: 'light',
  DARK: 'dark',
}

export default {
  components: {
    ModeButton,
    About,
    Skill,
    ExperienceAndProjects,
  },
  created() {
    if (
      localStorage.theme === MODE.DARK ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return this.darkModeOn()
    }

    return this.darkModeOff()
  },
  methods: {
    switchMode() {
      if (localStorage.theme === MODE.DARK) {
        return this.darkModeOff()
      }

      this.darkModeOn()
    },
    darkModeOn() {
      localStorage.theme = MODE.DARK
      document.documentElement.classList.add('dark')
    },
    darkModeOff() {
      localStorage.theme = MODE.LIGHT
      document.documentElement.classList.remove('dark')
    },
  },
}
</script>
