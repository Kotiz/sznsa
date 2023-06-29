<template>
  <ul class="mega-menu d-flex">
    <li v-for="item in homes_data" :key="item.id">
      <router-link :to="item.url" class="dropdown-item img-box">
        <img :src="item.img" alt="" />
        <span class="font-rubik">{{item.title}}</span>
      </router-link>
    </li>
   
    <li>
      <div class="img-box">
        <img src="../../../assets/images/menu/home15.png" alt="" />
        <div class="hover d-flex align-items-center justify-content-center">
          <div class="font-rubik">Coming Soon</div>
        </div>
      </div>
      <span class="font-rubik">E-commerce</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'mega-menus',
  data () {
    return {
      homes_data : [
      {
        id:1,
        url:'/event',
        img:require(`@/assets/images/menu/home01.png`),
        title:'Event Organiser'
      },
      {
        id:2,
        url:'/doc-landing',
        img:require(`@/assets/images/menu/home02.png`),
        title:'Doc landing'
      },
      {
        id:3,
        url:'/',
        img:require(`@/assets/images/menu/home03.png`),
        title:'Project Management'
      },
      {
        id:4,
        url:'/customer-support',
        img:require(`@/assets/images/menu/home04.png`),
        title:'Customer Support'
      },
      {
        id:5,
        url:'/product-landing',
        img:require(`@/assets/images/menu/home05.png`),
        title:'Product Landing'
      },
      {
        id:6,
        url:'/product-landing-dark',
        img:require(`@/assets/images/menu/home06.png`),
        title:'Product Landing Dark'
      },
      {
        id:7,
        url:'/note-taking',
        img:require(`@/assets/images/menu/home07.png`),
        title:'Note Taking App landing'
      },
      {
        id:8,
        url:'/video-editor',
        img:require(`@/assets/images/menu/home08.png`),
        title:'Video Editor Landing'
      },
      {
        id:9,
        url:'/appointment-schedule',
        img:require(`@/assets/images/menu/home10.png`),
        title:'Appointment Schedule'
      },
      {
        id:10,
        url:'/mobile-app',
        img:require(`@/assets/images/menu/home11.png`),
        title:'Mobile App Landing'
      },
      {
        id:11,
        url:'/doc-signature',
        img:require(`@/assets/images/menu/home12.png`),
        title:'Doc Signature Landing'
      },
      {
        id:12,
        url:'/website-builder',
        img:require(`@/assets/images/menu/home13.png`),
        title:'Website Builder'
      },
      {
        id:13,
        url:'/form-survey',
        img:require(`@/assets/images/menu/home14.png`),
        title:'Form & Survey'
      },
      {
        id:14,
        url:'/vr-Landing',
        img:require(`@/assets/images/menu/home16.png`),
        title:'VR Landing'
      },
      {
        id:15,
        url:'/coming-soon',
        img:require(`@/assets/images/menu/home09.png`),
        title:'Coming Soon'
      },
    ]
    }
  }
}
</script>