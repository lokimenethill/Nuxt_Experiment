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
};
</script>
<style>
#titulo-library {
  color: var(--library1) !important;
}

/* Dropdown libreria */
.dropdown-libreria {
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
.dropdown-libreria:focus {
  outline: 2px solid var(--interfacesp);
}
.dropdown-libreria select {
  display: none; /*hide original SELECT element: */
}
.dropdown-libreria .select-selected {
  background-color: var(--library1);
}
.dropdown-libreria .select-selected:hover {
  background-color: var(--library2);
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
.dropdown-libreria .select-items div {
  color: var(--library1);
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent var(--videos1) transparent var(--videos1); */
  cursor: pointer;
}
/* including the selected item: */
.dropdown-libreria .select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent transparent var(--videos1) transparent; */
  cursor: pointer;
}

/* Style items (options): */
.dropdown-libreria .select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--library1);
}

/* Hide the items when the select box is closed: */
.dropdown-libreria .select-hide {
  display: none;
}

.dropdown-libreria .select-items div:hover,
.dropdown-libreria .same-as-selected {
  background-color: var(--library1);
  color: white !important;
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
}
.table__header {
  border-bottom: 2px solid var(--gris2);
}
.table__header__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
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

.table__main {
}
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
.table__main__row__cell:last-of-type {
}
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

.table__main__row_cell__button-button_micro {
  height: 1rem !important;
  width: 1rem !important;
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
  flex-basis: 30%;
  flex-grow: 2;
}
.table__header__row__cell:nth-of-type(2),
.table__main__row__cell:nth-of-type(2) {
  flex-basis: 25%;
  flex-grow: 1;
}
.table__header__row__cell:nth-of-type(3),
.table__main__row__cell:nth-of-type(3) {
  flex-basis: 25%;
  flex-grow: 1;
}
.table__header__row__cell:nth-of-type(4),
.table__main__row__cell:nth-of-type(4) {
  flex-basis: calc(20% - 1.36rem);
  flex-grow: 1;
}
.table__header__row__cell:nth-of-type(5),
.table__main__row__cell:nth-of-type(5) {
  flex-basis: 1.36rem !important;
  padding: 1rem 0.33rem 1rem 0 !important;
  flex-grow: 0;
}

</style>