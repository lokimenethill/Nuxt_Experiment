<template>
  <div class="contenedor-columnas">
    <h4 class="instrucciones">Choose a terminal language</h4>
    <!-- Contenedor  mosaico lenguas terminales sumario -->
    <div class="contenedor-12-col contenedor-sumario-lenguas-terminales">
      <!-- Módulo mosaico lenguas terminales sumario -->
      <div
        id="myBtn"
        onclick=""
        class="sumario-lengua-terminal-item sumario-lengua-terminal-item-triqui"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          {{ $t('topicIndex.bottomCards.triqui.region0') }}
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/chic1273"
            target="_blank"
            >chic1273</a
          ></code
        >
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <div
        id="myBtn"
        onclick=""
        class="sumario-lengua-terminal-item sumario-lengua-terminal-item-triqui"
      >
        <h3 class="sumario-lengua-terminal-titulo">
          {{ $t('topicIndex.bottomCards.triqui.region1') }}
        </h3>
        <code class="modulo-lexicos"
          ><a
            href="https://glottolog.org/resource/languoid/id/sanm1298"
            target="_blank"
            >sanm1298</a
          ></code
        >
        <!-- <p class="sumario-modulo-lengua-termial-very-short-description">Very short description seven words
                extension</p> -->
      </div>
      <!-- Módulo mosaico lenguas terminales sumario etc -->
      <div id="" onclick="" class="sumario-lexico-item-boton-regresar">
        <h5 class="titulo-sumario-modulo-lexico-instrucciones">
          {{ $t('topicIndex.bottomCards.back') }}
        </h5>
        <span
          class="
            material-icons-outlined
            sumario-lexico-item-icono-boton-regresar
          "
        >
          arrow_back
        </span>
      </div>
    </div>
  </div>
</template>
<style>
/* Columna de izquierda */

div.contenedor-titulo-sumario-gpo-lenguas {
  border-right: 1px solid var(--interface1);
  top: 1rem;
}
/* Contenedor grupo lenguas sumario particularidades */
#contenedor-titulo-sumario-amuzgo {
  border-right: 1px solid var(--amuzgo0);
}
#contenedor-titulo-sumario-nahuatl {
  border-right: 1px solid var(--nahuatl0);
}
#contenedor-titulo-sumario-maya {
  border-right: 1px solid var(--maya0);
}
#contenedor-titulo-sumario-mixteco {
  border-right: 1px solid var(--mixteco0);
}
#contenedor-titulo-sumario-totonaco {
  border-right: 1px solid var(--totonaco0);
}
#contenedor-titulo-sumario-triqui {
  border-right: 1px solid var(--triqui0);
}

/* Titulos grupo lenguas sumario particularidades*/
#amuzgo-titulo-sumario {
  color: var(--amuzgo0);
}
#nahuatl-titulo-sumario {
  color: var(--nahuatl0);
}
#maya-titulo-sumario {
  color: var(--maya0);
}
#mixteco-titulo-sumario {
  color: var(--mixteco0);
}
#totonaco-titulo-sumario {
  color: var(--totonaco0);
}
#triqui-titulo-sumario {
  color: var(--triqui0);
}

/* Columna derecha */
div.contendor-texto-sumario-grupo-lenguas {
  max-height: 10.3rem;
  overflow-y: hidden;
}
/* <!-- Contenedor  mosaico lenguas terminales sumario --> */

div.contenedor-sumario-lenguas-terminales {
  height: 200px; /*define la altura para que sea scrolleable a la derecha */
  padding: 0;
  display: flex;
  flex-flow: row nowrap; /*define que sea scrolleable a la derecha "no hay salto de fila"*/
  align-items: flex-start; /*importante para que no se estire el contenido*/
  overflow-x: scroll;
  overflow-y: hidden;
  animation: overflow-x-hidden 1.7s ease-in-out;
}
/* Módulo lengua terminal sumario Base de estilos */
div.sumario-lengua-terminal-item {
  min-width: calc(
    980px / 5.5
  ); /*hace que en el ancho del contenedor quepan 5.5 módulos aprox*/
  flex-basis: calc(
    980px / 5.5
  ); /*hace que en el ancho del contenedor quepan 5.5 módulos aprox*/
  padding: 0.5rem;
  aspect-ratio: 1/1; /*proporcion cuadrada. experimental*/
  min-height: calc(980px / 5.5);
  margin: 0;
  border: 1px solid white;
  position: relative;
  cursor: pointer;
}

/* Particularidades de modulo lengua terminal sumario por lengua */
div.sumario-lengua-terminal-item-amuzgo {
  background-color: var(--amuzgo0);
}
div.sumario-lengua-terminal-item-amuzgo:hover {
  background-color: var(--amuzgo1);
}
div.sumario-lengua-terminal-item-nahuatl {
  background-color: var(--nahuatl0);
}
div.sumario-lengua-terminal-item-nahuatl:hover {
  background-color: var(--nahuatl1);
}
div.sumario-lengua-terminal-item-maya {
  background-color: var(--maya0);
}
div.sumario-lengua-terminal-item-maya:hover {
  background-color: var(--maya1);
}
div.sumario-lengua-terminal-item-mixteco {
  background-color: var(--mixteco0);
}
div.sumario-lengua-terminal-item-mixteco:hover {
  background-color: var(--mixteco1);
}
div.sumario-lengua-terminal-item-totonaco {
  background-color: var(--totonaco0);
}
div.sumario-lengua-terminal-item-totonaco:hover {
  background-color: var(--totonaco1);
}
div.sumario-lengua-terminal-item-triqui {
  background-color: var(--triqui0);
}
div.sumario-lengua-terminal-item-triqui:hover {
  background-color: var(--triqui1);
}

/* Título módulo lengua terminal sumario */
.sumario-lengua-terminal-titulo {
  font-size: 0.88rem;
  letter-spacing: 1px;
  color: white;
  margin-top: 2rem !important;
  margin-bottom: 0.3333rem;
}
/*glotocode lengua terminal sumario*/
code.modulo-lexicos {
  font-size: 00.6rem;
  color: white;
  display: inline;
  background-color: rgba(0, 0, 0, 0.1);
  background-blend-mode: darken;
  position: absolute;
  top: 0.5rem;
}
code.modulo-lexicos:hover {
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
}
/* Very short description */
p.sumario-modulo-lengua-termial-very-short-description {
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.7777rem; /*14 px*/
  line-height: 160%;
  margin-top: 0.66rem !important;
  margin-bottom: 0.5rem;
  color: white;
}
/* p.sumario-modulo-lengua-termial-very-short-description:first-of-type {
  margin-top: 0.5rem;
} */

/*Boton regresar*/
.sumario-lexico-item-boton-regresar {
  flex-grow: 1;
  flex-basis: calc(980px / 5.5);
  min-width: calc(980px / 5.5);
  aspect-ratio: 1/1;
  height: auto;
  padding: 0.5rem;
  margin: 0;
  cursor: pointer;
  background-color: var(--interface1);
  border: 1px solid white;

  display: flex;
  flex-flow: column wrap;

  animation: desplegado-sumario-lexicos 1.7s ease-in-out;
}
.sumario-lexico-item-boton-regresar:hover {
  background-color: var(--interface0);
}
h5.titulo-sumario-modulo-lexico-instrucciones {
  color: var(--interface5);
  text-align: left;
  font-size: 0.6667rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.lexico-item-boton-regresar:hover h5.titulo-modulo-lexico-instrucciones {
  color: white;
  opacity: 0.8;
}

.sumario-lexico-item-icono-boton-regresar {
  font-size: 5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 7%;

  color: white;
}
.sumario-lexico-item-boton-regresar:hover
  .sumario-lexico-item-icono-boton-regresar {
  color: white;
}

@keyframes desplegado-sumario-lexicos {
  0% {
    transform: translateX(700%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes overflow-x-hidden {
  0% {
    overflow-x: hidden;
  }
  100% {
    overflow-x: scroll;
  }
}
.sumario-lengua-terminal-item:nth-of-type(1) {
  animation: desplegado-sumario-lexicos 0.6s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(2) {
  animation: desplegado-sumario-lexicos 0.8s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(3) {
  animation: desplegado-sumario-lexicos 0.9s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(4) {
  animation: desplegado-sumario-lexicos 1.1s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(5) {
  animation: desplegado-sumario-lexicos 1.3s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(6) {
  animation: desplegado-sumario-lexicos 1.5s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(7) {
  animation: desplegado-sumario-lexicos 1.7s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(8) {
  animation: desplegado-sumario-lexicos 1.9s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(9) {
  animation: desplegado-sumario-lexicos 2.1s ease-in-out 1;
}
.sumario-lengua-terminal-item:nth-of-type(10) {
  animation: desplegado-sumario-lexicos 2.3s ease-in-out 1;
}
/* Pantalla emergente */

.fondo-pantalla-emergente {
  position: absolute;
  top: 3.5rem;
  right: 0;
  bottom: 3.5rem;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  display: none;
  animation: desplegado-pantalla-emergente 1s cubic-bezier(0, 0.26, 0.53, 0.99);
  overflow-y: hidden;
}
.contenedor-pantalla-emergente {
  max-width: 1020px;
  height: 486px;
  overflow: hidden;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;
  z-index: 10;
  border-bottom: 6px solid;
  box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.32);
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
}

/* Header pantalla emergente */
nav.header-pantalla-emergente {
  margin: 0;
  padding: 0 !important;
  max-height: 1.77rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  overflow: hidden;
}
/* Breadcums de pantalla emergente */
.contenedor-breadcums-pantalla-emergente {
  padding: 0 !important;
  margin: 0.3rem 3rem 0 1rem;
  text-align: right;
}
.breadcums-pantalla-emergente {
  font-size: 0.6666rem;
  line-height: 100%;
  font-weight: 300;
  color: var(--gris1);
  text-align: left;
  display: inline;
  cursor: pointer;
}
.separador-breadcums {
  text-align: left;
  font-size: 0.6666rem;
  font-weight: 300;
  color: var(--gris1);
  margin: 0 0.1111rem;
  display: inline;
}
/* Clase que define y marca el lugar en el que esta (breadcum final) */
.breadcums-pantalla-emergente-activo {
  font-size: 0.6666rem;
  font-weight: 500;
  color: var(--gris1) !important;
  text-align: left;
  display: inline;
  margin: 0;
}

/* Contenedor X cerrar pantalla emergente */
div.boton-cerrar {
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
}
/* boton X cerrar pantalla emergente */
.cerrar {
  padding: 0;
  color: var(--interface2);
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: 300;
  cursor: pointer;
}
.cerrar:hover {
  color: var(--interface0) !important;
  font-weight: 500;
  background: none;
}
/* Contenedor de titulo para pantalla emergente */
.contenedor-titulo-pantalla-emergente {
  margin-top: 1rem;
  min-height: 5.2rem; /* Esta calculado para 2 renglones de titulo */

  overflow-y: hidden;
  /* Esto es para centrar el titulo verticualmente cuando hay solo 1 renglon */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.titulo-pantalla-emergente {
  margin: 0 !important;
  font-size: 2rem;
}
/* Contenedor de texto e imagen */
.contenedor-columnas-pantalla-emergente {
  margin-top: 1rem;
  flex-grow: 1;
  overflow-y: hidden;
  max-height: 220px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.columna-izquierda-pantalla-emergente {
  flex-basis: calc(65% - 0.5rem);
}
/* Contenedor para scroll de texto */
.contenedor-texto-lengua-pantalla-emergente {
  max-height: 220px;
  overflow-y: scroll;
}
/* Contenedor para imagen derecha */
.columna-derecha-pantalla-emergente {
  flex-basis: calc(31% - 0.5rem);
  align-self: flex-end;
}
.figure-pantalla-emergente {
  width: 100%;
  margin: 0;
}
.imagen-pantalla-emergente {
  width: 100%;
  aspect-ratio: 3/2;
  margin-bottom: 0.25rem;
}
/* Footer pantalla emergente */
.footer-pantalla-emergente {
  margin-top: 1rem;
  margin-bottom: 0rem;
  display: flex;
  flex-flow: row nowrap;
}

.footer-columna-item {
  flex-grow: 1;
}
.lexicons-footer-item-pantalla-emergente {
  flex-grow: 1;
}

.titulo-footer-pantalla-emergente {
  font-size: 0.8888rem;
  font-weight: 700;
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
}
.vinculo-footer-pantalla-emergente {
  font-size: 0.6666rem;
  margin-top: 0 !important;
  display: block;
  color: var(--interface1) !important;
}
.vinculo-footer-pantalla-emergente:hover {
  color: var(--interface0) !important;
}
@keyframes desplegado-pantalla-emergente {
  0% {
    transform: translateY(-648px);
  }
  100% {
    transform: translateY(0%);
  }
}
/* Particularidades de color de cada lengua en pantalla emergente sumario */
/* Amuzgo */

.contenedor-pantalla-emergente-amuzgo {
  border-bottom-color: var(--amuzgo0);
}
.titulo-pantalla-emergente-amuzgo,
.titulo-footer-pantalla-emergente-amuzgo {
  color: var(--amuzgo0);
}
/* Nahuatl */
.contenedor-pantalla-emergente-nahuatl {
  border-bottom-color: var(--nahuatl0);
}
.titulo-pantalla-emergente-nahuatl,
.titulo-footer-pantalla-emergente-nahuatl {
  color: var(--nahuatl0);
}
/* Maya */
.contenedor-pantalla-emergente-maya {
  border-bottom-color: var(--maya0);
}
.titulo-pantalla-emergente-maya,
.titulo-footer-pantalla-emergente-maya {
  color: var(--maya0);
}
/* Mixteco */
.contenedor-pantalla-emergente-mixteco {
  border-bottom-color: var(--mixteco0);
}
.titulo-pantalla-emergente-mixteco,
.titulo-footer-pantalla-emergente-mixteco {
  color: var(--mixteco0);
}
/* Totonaco */
.contenedor-pantalla-emergente-totonaco {
  border-bottom-color: var(--totonaco0);
}
.titulo-pantalla-emergente-totonaco,
.titulo-footer-pantalla-emergente-totonaco {
  color: var(--totonaco0);
}
/* Triqui */
.contenedor-pantalla-emergente-triqui {
  border-bottom-color: var(--triqui0);
}
.titulo-pantalla-emergente-triqui,
.titulo-footer-pantalla-emergente-triqui {
  color: var(--triqui0);
}
</style>