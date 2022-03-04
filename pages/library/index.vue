<template>
<div>
 <search-Bar/>
 
</div>

</template>
<script>
import SearchBar from "@/components/libraryComponents/sBar.vue";

export default {
      components:{
    SearchBar,  
  },
  head() {
    return {
      title: this.$t('library.title'),
      /* metatags
    meta:[
        {name:'twitter:title', content: this.post.title},
        {name:'twitter:description', content:"prueba de proyecto nuxt"},
        {name:'twitter:image', content:'none'},
        {name:'twitter:card', content:'summary_large_image'}
      ]
      */
    };
  },
};
</script>
<style>
#titulo-library {
  color: var(--library1) !important;
}


/* BOTONES LIBRERIA */
#btn-reset-lexico-buscador-library {
  border-color: var(--library1);
  color: var(--library1);
}
#btn-reset-lexico-buscador-library:hover {
  background-color: var(--library2);
  color: white;
  border-color: var(--library2);
}
#btn-search-lexico-buscador-library {
  background-color: var(--library1);
}
#btn-search-lexico-buscador-library:hover {
  background-color: var(--library2);
}
/* BOTONES DE buscador lexico */
.contenedor-general-botones-busqueda-library {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.table {
  margin-bottom: 3rem;
  min-height: 550px;
}
.table__header {
  border-bottom: 2px solid var(--gris2);
}
.table__header__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
}
.table__header__row__cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.33rem 0.33rem 0.33rem 0.75rem !important;
  flex-grow: 1;
  flex-basis: 25%;
}
.table__header__row__cell:last-of-type {
  padding-right: 0.33rem !important;
}
.table__header__row__cell:first-of-type {
  padding-left: 0.33rem !important;
}
.table__header__row__cell__title {
  margin: 0 0.3rem 0 0 !important;
  color: var(--gris2);
  font-weight: 600 !important;
  letter-spacing: 0.5px;
}
.table__header__row__cell__switch {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
}

.table__header__row__cell__switch__btn__asc {
  background: none;
  color: var(--interface1);
  padding: 0;
  margin: 0 !important;
  line-height: 100%;
  font-size: 1rem;
}
.table__header__row__cell__switch__btn__asc::before {
  content: "△";
}
.table__header__row__cell__switch__btn__asc:hover {
  background: none;
}
.table__header__row__cell__switch__btn__asc:hover::before {
  content: "▲";
  color: var(--interface0);
}

.table__header__row__cell__switch__btn__asc-active {
  background: none;
  color: var(--interfacesp);
  padding: 0;
  margin: 0 !important;
  line-height: 100%;
  font-size: 1rem;
}
.table__header__row__cell__switch__btn__asc-active:hover {
  background: none;
  color: var(--interface0);
}
.table__header__row__cell__switch__btn__asc-active::before {
  content: "▲";
}

.table__header__row__cell__title__btn__des {
  background: none;
  color: var(--interface1);
  padding: 0;
  margin: 0 !important;
  line-height: 100%;
  font-size: 1rem;
  transform: rotate(
    180deg
  ); /*Se roto 180deg porque los caracteres de triangulo hacia abajo estan mas altos y generan ruido*/
}
.table__header__row__cell__title__btn__des:hover {
  background: none;
}
.table__header__row__cell__title__btn__des:hover::before {
  content: "▲";
  color: var(--interface0);
}
.table__header__row__cell__title__btn__des::before {
  content: "△";
}

.table__header__row__cell__title__btn__des-active {
  background: none;
  color: var(--interfacesp);
  padding: 0;
  margin: 0 !important;
  line-height: 100%;
  font-size: 1rem;
}
.table__header__row__cell__title__btn__des-active:hover {
  background: none;
  color: var(--interface0);
}
.table__header__row__cell__title__btn__des-active::before {
  content: "▲";
}

/* .table__main {
} */
.table__main__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  border-bottom: 1px solid var(--gris3);
}
.table__main__row:nth-of-type(even) {
  background: var(--library3);
}
.table__main__row__cell {
  padding: 1rem 0.75rem;
  flex-grow: 1;
  flex-basis: 25%;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}
/* .table__main__row__cell:last-of-type {
} */
.table__main__row__cell:first-of-type {
  padding-left: 0.33rem !important;
}
.table__main_row__cell__title {
  font-family: "Fira Sans Condensed", sans-serif;
  font-style: italic;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--library1) !important;
}
.table__main_row__cell__title:hover {
  color: var(--library2) !important;
}
.table__main__row__cell__data {
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 0.88rem;
}
.table__main__row__cell__data__group--lang {
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 0.88rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 0.15rem;
  display: block !important;
  width: 100%;
}
.table__main__row__cell__data__group--lang--code {
  font-family: "Fira Sans Condensed", sans-serif;
  letter-spacing: 1.5px;
  font-size: 70% !important;
  text-transform: none !important;
  background-color: #fff !important;
  padding: 2px 2px;
  vertical-align: middle !important;
}
.table__main__row__cell__data__group--lang--code:hover {
  background-color: #fff !important;
}
.table__main__row__cell__data__terminal--lang {
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 0.88rem;
  margin-right: 0.15rem;
  margin-left: 0.66rem;
}
.table__main__row__cell__data__terminal--lang::before {
  content: "●";
  color: var(--library1) !important;
 
  margin-left: -0.66rem;
  font-size: 28px;
}
.table__main__row__cell__data__terminal--lang--code {
  font-family: "Fira Sans Condensed", sans-serif;
  letter-spacing: 1.5px;
  font-size: 70% !important;
  background-color: #fff !important;
  padding: 2px 2px;
  vertical-align: middle;
}
.table__main__row__cell__data__terminal--lang--code:hover {
  background-color: var(--gris4);
}

.table__main__row_cell__button-button_micro {
  height: 1.20rem !important;
  width: 1.20rem !important;
  padding: 0 !important;
  margin: 0 !important;
  background: var(--library1);
  align-self: center;
}
.table__main__row_cell__button-button_micro:hover {
  background: var(--library2);
}
.table__main__row_cell__button-button_micro__icono_boton_descagar_micro {
  font-size: 18px !important;
  margin: 0 !important;
}

/* Ajustes de anchos */
/*Las filas de header, main y footer, deben de ir ligadas en tamaño, por eso estan juntas*/

.table__header__row__cell:nth-of-type(1),
.table__main__row__cell:nth-of-type(1) {
  flex-basis: 27%;
  flex-grow: 2;
}
.table__header__row__cell:nth-of-type(2),
.table__main__row__cell:nth-of-type(2) {
  flex-basis: 20%;
  flex-grow: 1;
}
.table__header__row__cell:nth-of-type(3),
.table__main__row__cell:nth-of-type(3) {
  flex-basis: 27%;
  flex-grow: 1;
}
.table__header__row__cell:nth-of-type(4),
.table__main__row__cell:nth-of-type(4) {
  flex-basis: 18%;
  flex-grow: 1;
}
.table__header__row__cell:nth-of-type(5),
.table__main__row__cell:nth-of-type(5) {
  flex-basis: calc(27% - 1.36rem);
  flex-grow: 1;
}
.table__header__row__cell:nth-of-type(6),
.table__main__row__cell:nth-of-type(6),
.table__header__row__cell:nth-of-type(7),
.table__main__row__cell:nth-of-type(7) {
  flex-basis: 1.8rem !important;
  padding: 1rem 0.165rem 1rem 0.165rem !important;
  flex-grow: 0;
}

/* Pantalla emergente */

.fondo-pantalla-emergente-2 {
  
  position:absolute;
  top: 3.5rem;
  right: 0;
  bottom: 0rem;
  left: 3.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  
  animation: desplegado-pantalla-emergente 1s cubic-bezier(0, 0.26, 0.53, 0.99);
  overflow-y: hidden;
}
.contenedor-pantalla-emergente-ficha--bibliografica {
  max-width: 682px;
  width: 75%;
  max-height: 648px;
  overflow: hidden;

  padding: 1rem;
  background-color: white;
  z-index: 10;
  border-bottom: 6px solid var(--library1);
  box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.32);
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
}

/* Header pantalla emergente */
nav.header-pantalla-emergente-ficha--bibliografica {
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
.contenedor-titulo-pantalla-emergente-ficha--bibliografica {
  margin-top: 0rem;
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
.titulo-pantalla-emergente-ficha--bibliografica {
  color: var(--library1);
}
/* Contenedor de texto e imagen */
.contenedor-columnas-pantalla-emergente-ficha--bibliografica {
  margin-top: 1rem;
  flex-grow: 1;
  /* overflow-y: hidden;
  max-height: 220px; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.columna-izquierda-pantalla-emergente-ficha--bibliografica {
  flex-basis: calc(15% - 0.5rem);
  margin-right: 1rem;
}
p.ano {
  text-align: right !important;
}
/* Contenedor para scroll de texto */
/* .contenedor-texto-lengua-pantalla-emergente-ficha--bibliografica {
} */
/* Contenedor para imagen derecha */
.columna-derecha-pantalla-emergente-ficha--bibliografica {
  flex-basis: calc(85% - 0.5rem);
  flex-grow: 2;
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
.footer-pantalla-emergente-ficha--bibliografica {
  margin-top: 1rem;
  margin-bottom: 0rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
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

/* Ficha */
p.ficha_texto {
  text-align: justify;
  text-justify: inter-word;
}
.boton_library {
  background-color: var(--library1) !important;
}
.boton_library:hover {
  background-color: var(--library2) !important;
}


</style>