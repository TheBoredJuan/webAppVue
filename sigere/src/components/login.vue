<template>
  <div class="login">
    <div class="box1">
      <img src ="../assets/ingenieriaReq.png" height ="207" width="207">
      <b><p class="a"><h2>SIGERE</br> Sistema Gestor de Requisitos</h2></p></b>

    </div>
    <div v-if="loggingIn" class="container-loading">
      <img src="/loading.gif" alt="Loading Icon">
    </div>
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccessful">Login Successful</p>
    <form @submit.prevent="loginSubmit">
    <div class="box2">
      <input class ="log" type="email" placeholder="E-Mail" v-model="email">
      <input class ="log"type="password" placeholder="Password" v-model="password">
      <button class ="log" type="submit">Login</button>
     </div> 
    </form>
  </div>
</template>

<style scoped lang="scss">
  button.log{
    width: 250px;
    justify-content: center;
    position: relative;
    top: 50px;
    border-radius: 5px;
  }
  input.log{
    width: 500px;
    justify-content: center;
    position: relative;
    top :50px;
    border-radius: 5px;
  }
  .login {
    padding: 0.0rem;
    border-spacing: 0;
    margin:-1%;
    border-collapse: collapse;
    width: 1366px;
    height: 768px;
    overflow: hidden;
    .container-loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.3);
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    form {
      display: flex;
      flex-flow: column;
      *:not(:last-child) {
        margin-bottom: 1rem;
      }
      input {
        padding: .5rem;
      }
      button {
        padding: .5rem;
        background-color: lightgray;
        border: 1px solid gray;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
      }
    }
  }
  .box1 {
    width: 1366px;
    height: 215px;
    background-color: #90caf9;
    background-size: cover;
    display:flex;
    text-align:center;
    line-height:75px;
  }
  .box2{
    width: 522px;
    height: 248px;
    background-color: #555555;
    background-size: cover;
    padding : 50px 50px;
    border: 10px red;
    position: absolute;
    top: 250px;
    left: 400px;
    border-radius: 10px;
  }
  p.a{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 20px;
    justify-content: center;
    color: #000000;
    width:1000px;
    text-align: center;
    /*position:absolute;*/
  }
</style>