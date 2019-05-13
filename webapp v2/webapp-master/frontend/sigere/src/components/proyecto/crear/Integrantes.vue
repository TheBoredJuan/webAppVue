<template>
  <div class="Integrantes">
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
    <p class="Subtitulo">Integrantes</p>
    <button class ="Agregar" type="submit"><img src="../assets/plus.png" height="64" width="64"></button>
  </div>
</template>

<style scoped lang="scss">
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
  p.Subtitulo{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 30px;
    color: #000000;
    width:300px;
    height:100px;
    position: absolute;
    margin-top:150px;
    margin-left:120px;
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
</style>