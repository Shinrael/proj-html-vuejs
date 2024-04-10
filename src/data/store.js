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

  menuList : [
    'Home',
    'Rates',
    'Testimonials',
    'FAQ',
    'Blog',
    'Contact'
  ],

  cardsService : [
    {
      img: '../public/img/avada-movers-serviceonephoto-final.jpg',
      title: 'Two Man Teams',
      paragraph: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit. Nullam ac augue. Orci varius natoque penatibus et magnis dis parturient montes, ridiculus mus.'
    },
    {
      img: '../public/img/avada-movers-servicetwophoto-final.jpg',
      title: 'We Do All The Lifting',
      paragraph: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit. Nullam ac augue. Orci varius natoque penatibus et magnis dis parturient montes, ridiculus mus.'
    },
    {
      img: '../public/img/avada-movers-servicethreephoto-final.jpg',
      title: 'Coast to Coast',
      paragraph: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit. Nullam ac augue. Orci varius natoque penatibus et magnis dis parturient montes, ridiculus mus.'
    }
  ],

  testimonialsCard : [
    {
      img: '../public/img/avada-movers-johndoe-final.jpg',
      name: 'John Doe',
      description: '"Lorem ipsum dolor sit amet, consecteur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum."'
    },
    {
      img: '../public/img/avada-movers-janedoe-final.jpg',
      name: 'Jane Doe',
      description: '"Lorem ipsum dolor sit amet, consecteur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum."'
    },
    {
      img: '../public/img/avada-movers-johnsmith-final.jpg',
      name: 'John Smith',
      description: '"Lorem ipsum dolor sit amet, consecteur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo. Vivamus varius pretium fermentum."'
    },
  ],

  avadaMovers : [
    '> Home',
    '> Rates',
    '> Testimonials',
    '> Blog',
    '> Free Quote'
  ],

  recentPosts : [
    '> Heading Out To College?',
    '> Moving Your Business?',
    '> Outstanding Quality',
    '> Cost Of Moving',
    '> Best Moving Tips'
  ]
})