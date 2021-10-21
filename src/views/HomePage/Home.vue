<template>
  <home-nav-bar />
  <Hero />
  <services />
  <feature />
  <Process></Process>
  <Md />
  <contact />
  <Footer></Footer>

</template>

<script>
import Contact from './Contact.vue'
import Feature from './Feature.vue'
import Hero from './Hero.vue'
import Services from './Services.vue'
import Footer from './Footer.vue'
import Process from './Process.vue'
import Md from './Md.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Services,
    Feature,
    Contact,
    Footer,
    Process,
    Md
  }
}
</script>
