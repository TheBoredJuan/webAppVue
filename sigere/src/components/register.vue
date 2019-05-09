<template>
  <div class="register">
    <div class="box1">
        <a class="backbutton" href="/paginaAnterior"><img src="../assets/back.svg" height ="75" width="75"></a> 
      <b><p class="a">SIGERE</br> Sistema Gestor de Requisitos</p></b>

    </div>
    <div v-if="loggingIn" class="container-loading">
      <img src="/loading.gif" alt="Loading Icon"<>
    </div>
    <!-- Hola-->
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccessful">Login Successful</p>
    <form @submit.prevent="loginSubmit">
    <div class="box2">
      <h1 style="margin-bottom:1px"> <font color= "B7B7B7"> Registrarse </font></h1>
      <input class ="log" type="text" placeholder="Nombre" v-model="name">
      <input class ="log" type="text" placeholder="Apellido" v-model="apellido">
      <input class ="log" type="text" placeholder="Usuario" v-model="usuario">
      <input class ="log" type="email" placeholder="E-Mail" v-model="email">
      <input class ="log"type="password" placeholder="Password" v-model="password">
      <h3 style="text-align:left;margin-left:18px;"></br><font color= "B7B7B7">Al continuar acepta los terminos y condiciones</font></h3>
      <button class ="log" type="submit">Registrarse</button>
     </div> 
    </form>
  </div>
</template>

<style scoped lang="scss">
  .backbutton{
    position:relative;
    left:25px;
    top:25px;
  }
  button.log{
    width: 175px;
    justify-content: center;
    position: relative;
    border-radius:3px;
    top: 5px;
  }
  input.log{
    width: 300px;
    justify-content: center;
    position: relative;
    top :25px;
    border-radius: 5px;
  }
  .register {
    padding: 0.0rem;
    border-spacing: 0;
    margin:-1%;
    border-collapse: collapse;
    width: 1366px;
    height: 900px;
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
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
      }
    }
  }
  .box1 {
    width: 1366px;
    height: 138px;
    background-color: #90caf9;
    background-size: cover;
    display:flex;
    text-align:center;
    line-height:50px;
    padding-top : 10px;
    padding-left : 10px;
  }
  .box2{
    width: 350px;
    height: 475px;
    /*width: 350px;
    height: 248px;*/
    background-color: #555555;
    background-size: cover;
    padding : 50px 50px;
    border: 10px red;
    position: absolute;
    top: 250px;
    left: 450px;
    border-radius: 10px;
    box-shadow:10px 10px 15px grey;  
  }
  p.a{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 25px;
    justify-content: center;
    color: #000000;
    width:1170px;
    text-align: center;
    position:relative;
  }
</style>