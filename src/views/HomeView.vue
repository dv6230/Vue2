<template>
  <div class="home">
    home page
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  created() {
    let user = this.$store.state.isLogin
    if (user){
      this.$router.push({ path : `/main` })
    }else{
      this.$router.push({ path : `/login` })
    }
  },
}
</script>
