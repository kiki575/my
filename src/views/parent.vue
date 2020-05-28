<template>
<div>
<kid :msg="'s'" @kpclick='eprint'></kid>
<h1>{{e}}</h1>
</div>
</template>

<script>
  import kid from '../components/kid.vue'
  export default {
    data(){
      return {
        e:'1'
      }
    },
    components:{kid},
    methods:{eprint(e){
           this.e=e
    }}
  }
</script>

<style>
</style>
