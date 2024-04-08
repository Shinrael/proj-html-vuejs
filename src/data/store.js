import { reactive } from 'vue';

export const store = reactive({
  socialIcon : [
    {
      icon: 'fa-brands fa-facebook-f',
      title: 'Facebook'
    },
    {
      icon: 'fa-brands fa-twitter',
      title: 'Twitter'
    },
    {
      icon:'fa-brands fa-instagram',
      title: 'Instagram'
    },
    {
      icon: 'fa-brands fa-youtube',
      title: 'Youtube'
    }
  ],
})