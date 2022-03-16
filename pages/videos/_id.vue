<template>
<div>
 <search-Bar/>
 
</div>

</template>
<script>
import SearchBar from "@/components/videosComponents/sBar.vue";

export default {
      components:{
    SearchBar,  
  },
  head() {
    return {
      title: this.$t('videos.title'),
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
#titulo-videos {
  color: var(--videos0) !important;
}

/* Dropdown libreria */
.dropdown-videos {
  position: relative;
  font-family: "Fira Sans", sans-serif;
  font-size: 0.8888rem;
  min-width: 21%;
  flex-basis: 50%;
  flex-grow: 1;
  margin-top: 0.2222rem;
  margin-bottom: 0.2222rem;
  margin-right: 0.5rem;
}
.dropdown-videos:focus {
  outline: 2px solid var(--interfacesp);
}
.dropdown-videos select {
  display: none; /*hide original SELECT element: */
}
.dropdown-videos .select-selected {
  background-color: var(--videos0);
}
.dropdown-videos .select-selected:hover {
  background-color: var(--videos1);
}
/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 0.55rem;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}
/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 0.25rem;
}

/* style the items (options),  */
.dropdown-videos .select-items div {
  color: var(--videos0);
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent var(--videos0) transparent var(--videos0); */
  cursor: pointer;
}
/* including the selected item: */
.dropdown-videos .select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent transparent var(--videos0) transparent; */
  cursor: pointer;
}

/* Style items (options): */
.dropdown-videos .select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--videos0);
}

/* Hide the items when the select box is closed: */
.dropdown-videos .select-hide {
  display: none;
}

.dropdown-videos .select-items div:hover,
.dropdown-videos .same-as-selected {
  background-color: var(--videos0);
  color: white !important;
}

/* BOTONES LIBRERIA */
#btn-reset-lexico-buscador-videos {
  border-color: var(--videos0);
  color: var(--videos0);
}
#btn-reset-lexico-buscador-videos:hover {
  background-color: var(--videos1);
  color: white;
  border-color: var(--videos1);
}
#btn-search-lexico-buscador-videos {
  background-color: var(--videos0);
}
#btn-search-lexico-buscador-videos:hover {
  background-color: var(--videos1);
}
/* BOTONES DE buscador lexico */
.contenedor-general-botones-busqueda-videos {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.videos__table {
  margin-bottom: 3rem;
}
.videos__table__header {
  border-bottom: 2px solid var(--gris2);
}
.videos__table__header__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.videos__table__header__row__cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.33rem 0.33rem 0.33rem 0.75rem !important;
  flex-grow: 1;
  flex-basis: 25%;
}
.videos__table__header__row__cell:last-of-type {
  padding-right: 0.33rem !important;
}
.videos__table__header__row__cell:first-of-type {
  padding-left: 0.33rem !important;
}
.videos__table__header__row__cell__title {
  margin: 0 0.3rem 0 0 !important;
  color: var(--gris2);
  font-weight: 600 !important;
  letter-spacing: 0.5px;
}
.videos__table__header__row__cell__switch {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
}

.videos__table__header__row__cell__switch__btn__asc {
  background: none;
  color: var(--interface1);
  padding: 0;
  margin: 0 !important;
  line-height: 100%;
  font-size: 1rem;
}
.videos__table__header__row__cell__switch__btn__asc::before {
  content: "△";
}
.videos__table__header__row__cell__switch__btn__asc:hover {
  background: none;
}
.videos__table__header__row__cell__switch__btn__asc:hover::before {
  content: "▲";
  color: var(--interface0);
}

.videos__table__header__row__cell__switch__btn__asc-active {
  background: none;
  color: var(--interfacesp);
  padding: 0;
  margin: 0 !important;
  line-height: 100%;
  font-size: 1rem;
}
.videos__table__header__row__cell__switch__btn__asc-active:hover {
  background: none;
  color: var(--interface0);
}
.videos__table__header__row__cell__switch__btn__asc-active::before {
  content: "▲";
}

.videos__table__header__row__cell__title__btn__des {
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
.videos__table__header__row__cell__title__btn__des:hover {
  background: none;
}
.videos__table__header__row__cell__title__btn__des:hover::before {
  content: "▲";
  color: var(--interface0);
}
.videos__table__header__row__cell__title__btn__des::before {
  content: "△";
}

.videos__table__header__row__cell__title__btn__des-active {
  background: none;
  color: var(--interfacesp);
  padding: 0;
  margin: 0 !important;
  line-height: 100%;
  font-size: 1rem;
}
.videos__table__header__row__cell__title__btn__des-active:hover {
  background: none;
  color: var(--interface0);
}
.videos__table__header__row__cell__title__btn__des-active::before {
  content: "▲";
}

.videos__table__main {
}
.videos__table__main__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  border-bottom: 1px solid var(--gris3);
}
.videos__table__main__row:nth-of-type(even) {
  background: var(--videos3);
}
.videos__table__main__row__cell {
  padding: 1rem 0.75rem;
  flex-grow: 1;
  flex-basis: 25%;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}
.videos__table__main__row__cell:last-of-type {
}
.videos__table__main__row__cell:first-of-type {
  padding-left: 0.33rem !important;
}
.videos__table__main_row__cell__title {
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--videos0) !important;
}
.videos__table__main_row__cell__title:hover {
  color: var(--videos1) !important;
}
.videos__table__main__row__cell__data {
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 0.88rem;
}
.videos__table__main__row__cell__data__group--lang {
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 0.88rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-right: 0.15rem;
  display: block !important;
  width: 100%;
}
.videos__table__main__row__cell__data__group--lang--code {
  font-family: "Fira Sans Condensed", sans-serif;
  letter-spacing: 1.5px;
  font-size: 70% !important;
  text-transform: none !important;
  background-color: #fff !important;
  padding: 2px 2px;
  vertical-align: middle !important;
}
.videos__table__main__row__cell__data__group--lang--code:hover {
  background-color: #fff !important;
}
.videos__table__main__row__cell__data__terminal--lang {
  font-family: "Fira Sans Condensed", sans-serif;
  font-size: 0.88rem;
  
  margin-right: 0.15rem;
  margin-left: 0.66rem;
}
.videos__table__main__row__cell__data__terminal--lang::before {
  content: "●";
  color: var(--videos1) !important;
  font-size: 0.88rem;
  margin-left: -0.66rem;
}
.videos__table__main__row__cell__data__terminal--lang--code {
  font-family: "Fira Sans Condensed", sans-serif;
  letter-spacing: 1.5px;
  font-size: 70% !important;
  background-color: #fff !important;
  padding: 2px 2px;
  vertical-align: middle;
}
.videos__table__main__row__cell__data__terminal--lang--code:hover {
  background-color: var(--gris4);
}

code:before {
  content: "[";
  margin: 0 1px;
  color: var(--videos1);
}

code:after {
  content: "]";
  margin: 0 1px;
  color: var(--videos1);
}

.videos__table__main__row_cell__button-button_micro {
  height: 1rem !important;
  width: 1rem !important;
  padding: 0 !important;
  margin: 0 !important;
  background: var(--videos0);
  align-self: center;
}
.videos__table__main__row_cell__button-button_micro:hover {
  background: var(--videos1);
}
.videos__table__main__row_cell__button-button_micro__icono_boton_descagar_micro {
  font-size: 18px !important;
  margin: 0 !important;
}

/* Ajustes de anchos */
/*Las filas de header, main y footer, deben de ir ligadas en tamaño, por eso estan juntas*/

.videos__table__header__row__cell:nth-of-type(1),
.videos__table__main__row__cell:nth-of-type(1) {
  flex-basis: 27%;
  flex-grow: 2;
}
.videos__table__header__row__cell:nth-of-type(2),
.videos__table__main__row__cell:nth-of-type(2) {
  flex-basis: 20%;
  flex-grow: 1;
}
.videos__table__header__row__cell:nth-of-type(3),
.videos__table__main__row__cell:nth-of-type(3) {
  flex-basis: 27%;
  flex-grow: 1;
}
.videos__table__header__row__cell:nth-of-type(4),
.videos__table__main__row__cell:nth-of-type(4) {
  flex-basis: 18%;
  flex-grow: 1;
}
.videos__table__header__row__cell:nth-of-type(5),
.videos__table__main__row__cell:nth-of-type(5) {
  flex-basis: calc(27% - 1.36rem);
  flex-grow: 1;
}
.videos__table__header__row__cell:nth-of-type(6),
.videos__table__main__row__cell:nth-of-type(6),
.videos__table__header__row__cell:nth-of-type(7),
.videos__table__main__row__cell:nth-of-type(7) {
  flex-basis: 1.8rem !important;
  padding: 1rem 0.165rem 1rem 0.165rem !important;
  flex-grow: 0;
}
</style>