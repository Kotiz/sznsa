<template>
    <VueAwesomeSideBar
    :menu="testMenu"
    :width="width"
    :miniMenu="false"
    :menuType="menuType"
    :collapsed="collapsed"
    :closeOnClickOutSide="true"
    @update:collapsed="handelCollapse"
    :overLayerOnOpen="ismobile"
    :childrenOpenAnimation="true"
    :keepChildrenOpen="true"
    :BottomMiniMenuBtn="true"
    @item-click="itemClickHandel"
    :closeOpenMenuOnHrefPush="true"
    vueRouterEnabel
      ></VueAwesomeSideBar>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const collapsed = ref(false)
  // const miniMenu = ref(false)
  
  const testMenu = [
    {
      name: 'O nas',
      icon: { text: 'home' , class: 'material-icons-outlined' },
      children: [
        {
          name: 'Historia',
          href: '/history',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
        {
          name: 'Cele',
          href: '/nasz-cele',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
        {
          name: 'Zarząd',
          href: '/a',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
      ],
    },
    {
      header: 'Settings'
    },
    {
      name: 'Świetlice',
      icon: { class: 'material-icons-outlined', text: 'dashboard' },
      children: [
        {
          name: 'Warsztatowe Centrum Kreatywne',
          href: '/a',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
        {
          name: 'Kreatywne Centrum Rozwoju',
          href: '/a',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
      ]
    },
    {
      name: 'Centrum Poradnicze - Daj sobie szansę !',
      icon: { class: 'material-icons-outlined', text: 'dashboard' },
      children: [
        {
          name: 'Poradnictwo Rodzinno - Pedagogiczne ',
          href: '/a',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
        {
          name: 'Poradnictwo Psychologiczne',
          href: '/a',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
        {
          name: 'Poradnictwo Prawne',
          href: '/a',
          icon: { text: 'home' , class: 'material-icons-outlined'},
        },
      ]
    },
  ]
  </script>