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
        <input type="text" name="email" placeholder="Email" v-model="myaccount.account">
        <input type="password" name="password" placeholder="Password" v-model="myaccount.password">
        <button v-on:click="Loginaction">Sign In</button>
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
        isSignup: true,
        isSignin: false,
        myaccount: {
          account: null,
          password: null
        }
      }
    },
    created: {
    },
    methods: {
      Loginaction () {
        this.$http.post('／login', this.myaccount).then(response => {
          if (response.code === '00') {
            this.$route.push({path: '/payment/PaymentHomepage'})
          }
        })
      }
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
    font-family: inherit;
  }

  body {
    margin: 0;
    padding-bottom: 20px;
    font-family: 'Nunito', sans-serif;
    color: #fefefe;
    background: #fefefe;
  }

  .wrapper {
    margin: 0 auto;
    width: 405px;
    height: 730px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .section {
    padding: 1rem;
  }

  .header {
    position: relative;
    text-align: center;
  }
  .header__text {
    position: relative;
    padding: 3.5rem 0 7rem;
  }
  .header__text > h1 {
    margin: 0;
    font-size: 2.5rem;
  }
  .header > .trapezoid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skewY(-10deg);
    transform-origin: top left;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: linear-gradient(rgba(17, 38, 190, 0.8), rgba(17, 38, 190, 0.8)), url("https://images.pexels.com/photos/520936/pexels-photo-520936.jpeg?w=940&h=650&auto=compress&cs=tinysrgb");
    background-position: top center;
    background-attachment: fixed;
  }

  form {
    margin: 0 auto;
    max-width: 17rem;
    overflow: auto;
  }
  form > * + * {
    margin-top: 1rem;
  }
  form > input {
    border: 0;
    border-bottom: 1px solid #1126be;
    border-radius: 0;
    width: 100%;
    height: 2rem;
    padding: 0 0 0.25rem 0;
    font-size: 1rem;
    color: #1126be;
    background: #fefefe;
  }
  form > input:focus {
    outline: none;
  }
  form > input::placeholder {
    color: #1126be;
  }
  form > button {
    margin-top: 2rem;
    border: 0;
    border-radius: 200px;
    width: 100%;
    padding: 0.85rem;
    font-size: 1rem;
    color: #fefefe;
    background: #1126be;
  }
  form > button:focus {
    outline: none;
  }
  form > p {
    margin: 0.25rem 0 0;
    text-align: center;
    color: #1126be;
  }

  .sign-up {
    display: none;
  }

  .opposite-btn1,
  .opposite-btn2 {
    cursor: pointer;
  }

</style>
