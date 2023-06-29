<template>
    <sidebar-menu :menu="menu" :theme="theme" />
</template>

<script>
  export default {
    props: {
      theme: {
    type: String,
    default: 'dark-theme'
  },
    },
    data() {
      return {
        menu: [
          {
            header: 'MENU : ',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user'
          },
          {
            href: '/',
            title: 'Aktuaności',
            icon: 'fa fa-newspaper-o'
          },
          {
            href: '/',
            title: 'Galeria',
            icon: 'fa fa-picture-o'
          },
          {
            href: '/',
            title: 'Wsparcie 1%',
            icon: 'fa fa-percent'
          },
          {
            // href: '/ch',
            title: 'Poradnie',
            icon: 'fa fa-handshake-o',
            child: [
              {
                href: '/',
                title: 'Poradnia pomocy społeczenj długa /t linia'
              },
              {
                href: '/',
                title: 'Sub Link'
              }
            ]
          },
          {
            // href: '/ch',
            title: 'O nas',
            icon: 'fa fa-info-circle',
            child: [
              {
                href: '/history',
                title: 'Historia'
              },
              {
                href: '/',
                title: 'Zadania'
              },
              {
                href: '/',
                title: 'Zarząd'
              }
            ]
          },
        ]
      }
    }
  }
</script>
