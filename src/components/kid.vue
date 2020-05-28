<template>
  <div>
  <div>hh{{msg}}</div>
  <button @click="kp"></button>
  </div>
</template>

<script>
  export default {
    props:{msg:{
      type:String,
      default:'0',
      required:false
    }},
    data(){
       return {}
  },
  methods:{kp(e){
   this.$emit('kpclick','strdate')
   }
  }

  }
</script>

<style>
</style>
