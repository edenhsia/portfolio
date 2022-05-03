<template>
  <section>
    <div class="container">
      <div class="avatar">
        <img src="../assets/avatar.jpeg" alt="avatar" />
      </div>
      <div class="info text-center mb-4">
        <h1 class="font-medium text-2xl md:text-3xl">Tze-Yun Hsia</h1>
        <h2 class="mb-2 text-gray-800 dark:text-gray-100 md:text-lg">
          Front-end Developer
        </h2>
        <p
          class="text-sm max-w-xl mx-auto mb-3 tracking-wider text-gray-700 dark:text-gray-300"
        >
          Front-end developer with 1.5 years of experience working with
          HTML/CSS/JavaScript/Tailwind/Vue to build websites. Enjoying working
          with others to share ideas, find solutions and improve each other's
          skill.
        </p>
      </div>
      <div class="contact flex justify-center space-x-3 mb-4">
        <a
          href="mailto:edenhsia@gmail.com"
          title="edenhsia@gmail.com"
          class="btn-contact"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
        <a
          href="tel:+886911567079"
          title="+886 911 567 079"
          class="btn-contact"
        >
          <font-awesome-icon :icon="['fas', 'phone']" />
        </a>
        <a
          href="https://www.linkedin.com/in/%E6%A2%93%E8%80%98-%E5%A4%8F-6aa42514a/"
          target="_blank"
          title="linkedin"
          class="btn-contact"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://github.com/edenhsia"
          target="_blank"
          title="github"
          class="btn-contact"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
      <a href="public/cv.pdf" download class="btn-cv">Download CV</a>
    </div>
  </section>
</template>

<style scoped>
.avatar {
  @apply rounded-full overflow-hidden w-40 h-40 mx-auto mb-10 transition-all duration-300;
  @apply ring-8 ring-offset-8 ring-offset-white ring-sky-500 dark:ring-offset-gray-800;
}

.btn-contact {
  @apply p-2 bg-gray-200 rounded w-9 h-9 text-center flex items-center justify-center;
  @apply transition-[background] duration-300 hover:bg-gray-300;
  @apply dark:bg-gray-700 dark:hover:bg-gray-600;
}

.btn-cv {
  @apply block text-center px-5 py-2 bg-sky-500 text-white text-lg font-medium rounded;
  @apply w-full max-w-[12rem] mx-auto;
  @apply transition-all duration-300 hover:bg-sky-400;
}
</style>
