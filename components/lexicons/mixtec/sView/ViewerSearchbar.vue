<template lang="">
    <div class="contenedor-general-resultados">
       <div v-if="datasend.page">
       <h4 class="instrucciones" >{{datasend.pageSize}} Resultados mostrados de ({{datasend.total}}) totales</h4>
        </div>
         <div v-for="(element, index) in datasend.data" :key="index" :v-bind="index" >
            <!-- Cada tarjeta tiene 3 secciones: HEADER, MAIN y FOOTER -->
            <div class="contenedor-general-resultados">
 <article class="tarjeta">
    <section class="header-tarjeta">
      <div class="contenedor-header-resultado">
        <!--Este sirve para poner el borde de abajo-->
        <h2 class="titulo-header-tarjeta">
          <!--Se llenara con los datos de la API-->
          <span class="genero">{{String(element.genus)}}</span>
          <span class="especie">{{String(element.species)}}</span>
          <span class="autor">{{String(element.author)}}</span>
          <span class="familia">{{String(element.family)}}</span>
        </h2>
        <div class="contenedor-taxon-page-demca">
          <p class="etiqueta-taxon-page-demca">DEMCA: Taxon page</p><button class="btn-micro-taxon-demca"
            onclick="window.open('https://demca.mesolex.org/portal/taxa/index.php?taxon=Elytraria+imbricata&formsubmit=Search+Terms','_blank')"
            target="_blank"><span class="material-icons icono-play-boton-micro ">
              link</span></button>
          <p class="etiqueta-taxon-page-demca"> Audio of taxon</p><button class="btn-micro-taxon-demca"
            onclick="window.open('https://demca.mesolex.org/portal/ethno/eaf/eafdetail.php?mediaid=105&collid=25','_blank')"
            target="_blank"><span class="material-icons icono-play-boton-micro ">
              volume_up</span></button>

        </div>
      </div>
      <div class="contenedor-colecta-datos">
        <p class="etiqueta-colecta">Collection:
          <span class="colecta">{{String(element.col_num)}}</span>
        </p>
        <audio src=""></audio><button class="btn-micro-audio-externo"
          onclick="window.open('https://demca.mesolex.org/portal/ethno/eaf/eafdetail.php?mediaid=205&collid=0','_blank')"
          target="_blank"><span class="material-icons icono-play-boton-micro ">
            volume_up</span></button>



      </div>
    </section>
    <!-- MAIN DE TARJETA -->
    <section class="main-tarjeta">
      <!-- Un resultado de tarjeta, puede traer varias comunidades y cada comunidad puede tener un audio -->
      <div class="contenedor-datos-comunidad">
        <!--Agrupa los datos de cada comunidad-->
        <p class="etiqueta-comunidad">Community:</p>
        <h3 class="comunidad">{{String(element.c1_village)}}</h3>
        <audio src=""></audio>
        <!-- YA NO VA EL BOTON  -->
        <!--El audio no supe como manejarlo, tiene que ver con backend-->
        <!--Boton de reproduccion-->
        <!-- <button class="btn-play-small-mixteco">
          <span class="material-icons icono-play-boton">
            play_arrow
          </span></button> -->
        <!-- Cada comunidad puede tener hasta 3 glosas y nombres de planta -->
        <div class="contenedor-glosas-y-nombre-plantas-mixteco ">
          <!--Agrupa las glosas y nombres de plantas-->
          <div class="contenedor-grupo-glosas-y-nombres  ">
            <div class="contenedor-glosa ">
              <!--p class="etiqueta-num-glosa">Gloss {#}</p-->
              <p class="nombre-planta">{{String(element.nombre_1)}}</p>
              <p class="glossa-planta">{{String(element.glosa_nombre_1)}}</p>
            </div>
          </div>
          <div class="contenedor-grupo-glosas-y-nombres">
            <div class="contenedor-glosa ">

              <p class="nombre-planta">{{String(element.nombre_2)}}</p>
              <p class="glossa-planta">{{String(element.glosa_nombre_2)}}</p>
            </div>
          </div>
          <div class="contenedor-grupo-glosas-y-nombres">
            <div class="contenedor-glosa ">

              <p class="nombre-planta">{{String(element.nombre_3)}}</p>
              <p class="glossa-planta">{{String(element.glosa_nombre_3)}}</p>
            </div>
          </div>
        </div>
        <!-- Contenedor de comentarios o textos largos son 2 columnas y esta pensado por filas -->
        <div class="contenedor-sumarios-y-comentarios">
          <!-- Inicia una fila -->
          <div class="fila-sumario-comentarios">
            <!-- Columna izquierda -->
            <div class="col-etiqueta">
              <p class="etiqueta-comentarios">Field recording summary</p>
              <p class="etiqueta-uid-grabacion">UID:<span class="uid-grabacion">{{String(element.field_recording_uid)}}</span></p>
            </div>
            <!-- Columna derecha -->
            <div class="col-dato">
              <p class="resumen">{{String(element.fieldbot_summary)}}</p>
            </div>
          </div>
          <div class="fila-sumario-comentarios">
            <!-- Columna izquierda -->
            <div class="col-etiqueta">
              <p class="etiqueta-comentarios">Comments</p>

            </div>
            <!-- Columna derecha -->
            <div class="col-dato">
              <p class="comentarios">{{String(element.comments)}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer de tarjeta por el momento no tiene nada, pero para el futuro puede servir -->
    <section class="footer-tarjeta">
    </section>
  </article>
  </div>
  <!-- Nuevo resultado -->
         </div>
    </div>
</template>
<script>
export default {
  props: {
    datasend: {
      type: Object,
      default() {
        return { data: {} };
      },
    },
  },
  data() {
    return {
      json_datasend: {},
      contador: 1,
    };
  },
  methods: {
    pruebastorepush() {},
  },
};
</script>
<style>
.contenedor-elementos-notas-lexico {
  height: 1.5rem;
  max-width: 100%;
  display: flex;
  align-items: center;
}
/* <div class="contenedor-elementos-notas-lexico e1">
          <a href="#" class="icono-vinculo-readme e1">
            <span class="material-icons icono-readme e2">
              info
            </span>
          </a>
          <a href="#" class="texto-vinculo-readme e2">Readme for more information</a>
        </div> */
a.icono-vinculo-readme {
  margin: 0;

  margin: 0;
  padding: 0;
}
a.icono-vinculo-readme:hover {
  text-decoration: none;
}
span.icono-readme {
  color: var(--interfacesp);
  font-size: 1.25rem;
  display: block;
  margin: 0 !important;
  padding: 0 !important ;
}
span.icono-readme:hover {
  color: var(--interface0);
}
a.texto-vinculo-readme {
  font-size: 0.6667rem;
  margin-left: 0.25rem;
  min-width: 9.25rem;
  color: var(--negro);
}
a.texto-vinculo-readme:hover {
  font-weight: 500;
  color: var(--interface0) !important;
}

a.texto-vinculo-readme:visited {
  color: currentColor;
}

.contenedor-buscador-general-lexico {
  margin-top: 2rem;
}

.caja-busqueda-lexico {
  height: 2.5rem;
  border: 1px solid var(--gris3);
  display: flex;
  align-items: center;
  padding-left: 0.38rem;
  margin-bottom: 0.5rem;
}

.caja-busqueda-lexico:focus-within {
  outline: 3px solid #009d9375;
  /* Hace que se enfocque el elemento padre */
}

/* Dropdown tipo busqueda */
.dropdown-tipo-busqueda {
  position: relative;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.8888rem;
  flex-basis: 21%;
  margin-right: 0.5rem;
}
.dropdown-tipo-busqueda:focus {
  outline: 2px solid var(--interfacesp);
}
.dropdown-tipo-busqueda select {
  display: none; /*hide original SELECT element: */
}
.select-selected {
  background-color: var(--dr-tp-busq0);
}
.select-selected:hover {
  background-color: var(--dr-tp-busq1);
}
/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: '';
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
.select-items div {
  color: var(--dr-tp-busq0);
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent var(--videos1) transparent var(--videos1); */
  cursor: pointer;
}
/* including the selected item: */
.select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  /* border-color: transparent transparent var(--videos1) transparent; */
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--dr-tp-busq1);
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: var(--dr-tp-busq1);
  color: white !important;
}
/* --------------------------------------------------------------------- */

/* Dropdow parametros de palabras */
/* The container must be positioned relative: */
.dropdow-parametros-palabras {
  position: relative;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.8888rem;
  flex-basis: 19%;
  margin-right: 0.5rem;
}
.dropdow-parametros-palabras:focus {
  outline: 3px solid #009d9375;
}

.dropdow-parametros-palabras select {
  display: none; /*hide original SELECT element: */
}

.dropdow-parametros-palabras .select-selected {
  background-color: var(--dr-par-pal0);
}
.dropdow-parametros-palabras .select-selected:hover {
  background-color: var(--dr-par-pal1);
}

/* Style the arrow inside the select element:
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
} */

/* Point the arrow upwards when the select box is open (active):
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
} */

/* style the items (options), */
.dropdow-parametros-palabras .select-items div {
  color: var(--dr-par-pal0);
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}
/*including the selected item: */
.dropdow-parametros-palabras .select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}
/* Style items (options): */
.dropdow-parametros-palabras .select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--dr-par-pal1);
}

/* Hide the items when the select box is closed: */
.dropdow-parametros-palabras .select-hide {
  display: none;
}

.dropdow-parametros-palabras .select-items div:hover,
.dropdow-parametros-palabras .same-as-selected {
  background-color: var(--dr-par-pal1);
  color: white !important;
}
/* Dropdow opciones al añadir filtro */
.dropdown-opcion-filtro {
  position: relative;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.8888rem;
  flex-basis: 12%;
  margin-right: 0.5rem;
}
.dropdown-opcion-filtro:focus {
  outline: 3px solid #009d9375;
}

.dropdown-opcion-filtro select {
  display: none; /*hide original SELECT element: */
}

.dropdown-opcion-filtro .select-selected {
  background-color: var(--dr-fil-mas0);
}
.dropdown-opcion-filtro .select-selected:hover {
  background-color: var(--dr-fil-mas1);
}

/* Style the arrow inside the select element: */
/* .dropdown-opcion-filtro .select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
} */

/* Point the arrow upwards when the select box is open (active): */
/* .dropdown-opcion-filtro .select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
} */

/* style the items (options), including the selected item: */
.dropdown-opcion-filtro .select-items div {
  color: var(--dr-fil-mas0);
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}
.dropdown-opcion-filtro .select-selected {
  color: white;
  padding: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
}

/* Style items (options): */
.dropdown-opcion-filtro .select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid var(--dr-fil-mas1);
}

/* Hide the items when the select box is closed: */
.dropdown-opcion-filtro .select-hide {
  display: none;
}

.dropdown-opcion-filtro .select-items div:hover,
.same-as-selected {
  background-color: var(--dr-fil-mas1);
  color: white !important;
}
/* Caja de texto de busqueda*/

.input-caja-busqueda-lexico {
  align-self: stretch;
  flex-basis: 50%;
  flex: 1;
  padding: 0 0.5rem;
  margin: 0;
  border: none;
  font-size: 0.8888rem;
  font-weight: 500;
  height: 100%;
}
.input-caja-busqueda-lexico:focus {
  outline: none;
}
.input-caja-busqueda-lexico::placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
.input-caja-busqueda-lexico::-webkit-input-placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
.input-caja-busqueda-lexico:-ms-input-placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
.input-caja-busqueda-lexico::-moz-placeholder {
  color: var(--gris3);
  font-size: 0.8888rem;
  font-weight: 400 !important;
}
/* Contenedor general de checboxes de lexicos */
.contenedor-general-opciones-busqueda {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 2rem;
}
/* Contenedor de checkboxes y etiquetas */

.contenedor-general-opciones-busqueda .contenedor-checkbox-custom {
  margin-right: 0.75rem;
  margin-left: 0 !important;
}
.contenedor-general-opciones-busqueda .contenedor-checkbox-custom:last-of-type {
  margin-right: 0rem;
  padding-right: 0 !important;
}

/* BOTONES DE buscador lexico */
.contenedor-general-botones-busqueda {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

/* Boton eliminar filtro */

button.eliminar-filtro {
  align-self: stretch;
  flex-basis: 2rem;
  aspect-ratio: 1/1;
  color: var(--interface1);
  padding: 0;
  margin: 0;
  border: 2px solid var(--interface1) !important;
  background: white;
  box-sizing: content-box;
  margin-left: 0.25rem;
}
button.eliminar-filtro:hover {
  color: white;
  background-color: var(--interface0);
  border-color: var(--interface0);
}

/* RESULTADOS */
.contenedor-general-resultados {
  margin-top: 4rem;
}
</style>