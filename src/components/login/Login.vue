<template>
  <div class="wrapper">

    <!--  Header  -->
    <header class="section header">
      <div class="trapezoid"></div>

      <div class="header__text">
        <h1>sup.</h1>
        <p>Sign in or create a new account.</p>
      </div>
    </header>

    <!--  Sign Up  -->
    <section class="section sign-up">
      <div class="trapezoid"></div>
      <form action="">
        <input type="text" name="name" placeholder="Name">
        <input type="text" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <input type="password" name="confirm" placeholder="Confirm Password">
        <button>Create Account</button>
        <p class="opposite-btn2">Already have an account?</p>
      </form>
    </section>

    <!--  Sign In  -->
    <section class="section sign-in">
      <form action="">
        <input type="text" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <button>Sign In</button>
        <p class="opposite-btn1">Don't have an account?</p>
      </form>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        myaccount: {
          account: null,
          password: null
        }
      }
    },
    methods: {
      login () {
        this.$http.post('／login', this.myaccount).then(response => {
          if (response.code === '00') {

          }
        })
      }
    }
  }
</script>
<style scoped>
</style>
