<template>
  <div class="imagenDiagrama">
    <div class="box1">
      <a class="back" href ="/"><img src="../../assets/back.svg" heigth="75" width="75"></a>
      <b><p class="Titulo">Proyecto</p></b>
    </div>
    <div class="box2">
      <button class="proyMenu"><img src="../assets/borrador.png" height="72" width="72"></button>
      <button class="proyMenu"><img src="../assets/req.png" height=50 width="50"></button>
      <button class="proyMenu"><img src="../assets/srs.png" height="55" width="55"></button>
      <button class="proyMenu"><img src="../assets/diagrama.png" height="55" width="55"></button>
      <button class="proyMenu"><img src="../assets/chat.png" height="55" width="55"></button>
      <button class="proyMenu"><img src="../assets/añadir.png" height="55" width="55"></button>
      <button class="proyMenu"><img src="../assets/calendario.png" height="55" width="55"></button>
    </div>

    <form>
      <div class="box3">
        <p class="Subtitulo">Cargar imágen y diagrama de contexto</p>
        <input class = "agregarimagen" type="file">
        <p class="CargIm">Imágen:</p>
        <p class="Diag">Diagrama:</p>
        <input class = "agregardiagrama" type="file">
        <button class ="Cargar" type="submit">Cargar</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .Cargar{
    width: 100px;
    justify-content: center;
    position: absolute;
    top: 300px;
    left: 530px;
    border-radius: 0px;
    -moz-box-shadow: 5px 7px 16px -11px #131414;
    -webkit-box-shadow: 5px 7px 16px -11px #131414;
    box-shadow: 5px 7px 16px -11px #131414;
    background-color:#469ab8;
  }
  .agregardiagrama{
    position:absolute;
    top:200px;
    left:500px;
    justify-content:center;
  }
  .agregarimagen{
    position:absolute;
    top:130px;
    left:500px;
    justify-content:center;
   }
  button.proyMenu{
    outline:none;
    background-color:Transparent;
    border: 0px;
    position:relative;
    margin-top:5px;
    margin-bottom:5px;
    cursor:pointer;
    padding:.5rem;
    &:hover{
      background-color:lightgray;
      width: 75px;
      height: 75px;
    }
  }
  button.Agregar{
    outline:none;
    width: 120px;
    height: 120px;
    justify-content: center;
    position: absolute;
    top: 240px;
    left: 170px;
    border-radius:50%;
    padding: .5rem;
        background-color: lightgray;
        border: 1px solid gray;
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
    }
  p.Titulo{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 30px;
    color: #000000;
    width:300px;
    height:2px;
    position: relative;
    margin-top:36px;
  }
  p.CargIm{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 20px;
    color: #000000;
    width:100px;
    height:2px;
    position: absolute;
    margin-top:119px;
    left:350px;   
  }
  p.Diag{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 20px;
    color: #000000;
    width:100px;
    height:2px;
    position: absolute;
    margin-top:190px;
    left:350px;  
  }
  p.Subtitulo{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 30px;
    color: #000000;
    width:700px;
    height:10px;
    position: relative;
    margin-top:10px;
    margin-left:25px;
    text-align:left;     
  }
  .back{
    position:relative;
    top: 25px;
    left: 25px;
  }
  .box1 {
    width: 1366px;
    height: 138px;
    background-color: #90caf9;
    background-size: cover;
    display:flex;
    text-align:center;
    line-height:50px;
    position:absolute;
    top:0px;
    left:0px;
  }
  .box2{
    width: 100px;
    height: 600px;
    background-color: #555555;
    background-size: cover;
    border: 10px red;
    position: absolute;
    top: 138px;
    left: 0px;
    border-radius: 0px;
  }
  .box3 {
    width: 1266px;
    height: 138px;
    background-color: #FFFFFF;
    background-size: cover;
    display:flex;
    text-align:center;
    line-height:50px;
    position:absolute;
    top:138px;
    left:100px;
  }
  p.a{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 20px;
    justify-content: center;
    color: #000000;
    width:1100px;
    text-align: center;
    position: relative;
  }
  p.b{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size:20px;
    color:#B7B7B7;
  }
  .imagenDiagrama {
    padding: 0.0rem;
    border-spacing: 0;
    margin:-1%;
    border-collapse: collapse;
    width: 1366px;
    height: 600px;
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
        padding: .3rem;
      }
      textarea{
          padding: .5rem;
          width: 100%;
          height: 150px;
          box-sizing: border-box;
          background-color: #FFFFFF;
          font-size: 14px;
          resize: none;
          width: 520px;
          justify-content: center;
          position: relative;
          top: 3px;
          border-radius: 5px;
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
</style>