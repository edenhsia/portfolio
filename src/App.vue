<template>
  <div>
    <ModeButton @switch="switchMode" />
    <About />
    <Skill />
    <ExperienceAndProjects />
    <MainFooter />
  </div>
</template>

<script>
import ModeButton from './components/ModeButton.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import ExperienceAndProjects from './components/ExperienceAndProjects.vue'
import MainFooter from './components/MainFooter.vue'

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
    MainFooter,
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
