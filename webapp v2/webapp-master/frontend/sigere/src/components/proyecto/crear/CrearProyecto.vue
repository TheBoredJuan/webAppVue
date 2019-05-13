<template>
  <div class="crearProy">
    <div class="box1">
      <a class="back" href ="/"><img src="../../assets/back.png" heigth="75" width="75"></a>
      <b><p class="Titulo">Nuevo Proyecto</p></b>
    </div>
    <form>
    <div class="box2">
      <h1 style="margin-top:-10px;margin-bottom: 50px;"><font color="B7B7B7">Creación de proyecto</font></h1>
      <input class ="log" type="text" name="nombreProyecto" placeholder="Nombre del proyecto">
      <textarea type="text" placeholder="Descripción"></textarea>    
      <input class = "log" type="text" placeholder="Cliente">
      <input class = "log" type="text" placeholder="Fecha DD/MM/AA">
      <p class="Subtitulo">Integrantes</p>
      <button class ="Agregar" type="submit"><img src="../../assets/plus.png" height="32" width="32"></button>
      <button class ="log" type="submit">Crear Proyecto</button>
     </div> 
    </form>
  </div>
</template>

<style scoped lang="scss">
  button.log{
    width: 250px;
    justify-content: center;
    position: relative;
    top: 90px;
    left: -35px;
    border-radius: 5px;
  }
  button.Agregar{
    width: 50px;
    height: 50px;
    justify-content: center;
    position: relative;
    top: 20px;
    left: 120px;
    border-radius:50%;
  }
  p.Titulo{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 20px;
    color: #000000;
    width:300px;
    height:2px;
    position: relative;
    margin-top:36px;
  }
  p.Subtitulo{
    font-family: "Lucida Console","Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
    font-size: 20px;
    color: #f5F7F8;
    width:300px;
    height:0px;
    position: relative;
    margin-top:5px;
    margin-left:90px;
    text-align:left;     
  }
  .back{
    position:relative;
    top: 25px;
    left: 25px;
  }
  input.log{
    width: 500px;
    justify-content: center;
    position: relative;
    top :1px;
    border-radius: 5px;
  }
  .crearProy {
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
  .box1 {
    width: 1366px;
    height: 138px;
    background-color: #90caf9;
    background-size: cover;
    display:flex;
    text-align:center;
    line-height:50px;
    padding-top: 10px;
    padding-left: 10px;
  }
  .box2{
    width: 700px;
    height: 550px;
    background-color: #555555;
    background-size: cover;
    padding : 50px 50px;
    border: 10px red;
    position: absolute;
    top: 190px;
    left: 275px;
    border-radius: 10px;
    box-shadow: 10px 10px 15px Gray;
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