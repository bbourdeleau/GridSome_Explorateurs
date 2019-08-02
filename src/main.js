import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css'
export default function (Vue, { head }) {
	Vue.component('Layout', DefaultLayout)
  	head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Exo|Rubik&display=swap',
  })
}


