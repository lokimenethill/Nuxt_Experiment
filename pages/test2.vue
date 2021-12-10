<template>
  <div>
   <main class="">
    <div class="contenedor-general-rebasado">
      <div class="contenedor-general">
        <div class="contenedor-breadcums"><a class="breadcums">Languages index</a>
          <p class="breadcums">/</p><a href="" class="breadcums-activo">Mixtec</a>
        </div>
        <h6>Lexicon</h6>
        <h1>Nahuat of the Sierra Nororiental de Puebla</h1>

        <div class="contenedor-elementos-notas-lexico">
          <a href="#" class="icono-vinculo-readme ">
            <span class="material-icons icono-readme ">
              info
            </span>
          </a>
          <a href="#" class="texto-vinculo-readme">Readme for more information</a>
        </div>


        <div class="contenedor-buscador-general-lexico ">
          <form action="">
            <div class="caja-busqueda-lexico">
              <!-- Selector personalizado https://www.w3schools.com/howto/howto_custom_select.asp -->
              <div class="dropdown-tipo-busqueda ">
                <select>
                  <option value="Headword" selected>Headword</option>
                  <option value="Gloss">Gloss</option>
                  <option value="Root">Root</option>
                  <option value="Semantic field">Semantic field</option>
                  <option value="Grammatical category">Grammatical category</option>
                  <option value="Inflection">Inflection</option>
                  <option value="Exact meaning">Exact meaning</option>
                  <option value="Extended meaning">Extended meaning</option>
                  <option value="Illustrative phrases">Illustrative phrases</option>
                  <option value="Full search">Full search</option>
                </select>
              </div>
              <div class="dropdow-parametros-palabras">
                <select>
                  <option value="begins with" selected>begins with</option>
                  <option value="ends with">ends with</option>
                  <option value="contains sequence">contains sequence</option>
                  <option value="contains word">contains word</option>
                  <option value="exactly equals">exactly equals</option>
                  <option value="regular expression">regular expression</option>

                </select>
              </div>
              <input type="search" placeholder="Type words for search" class="input-caja-busqueda-lexico">
            </div>
            <div class="contenedor-general-opciones-busqueda">
              <!-- Checkbox Neutralize vowel length -->

              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Activate flexible orthography</span>
              </label>
              <!-- Checkbox bilingue -->
              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Activate bilingual search</span>
              </label>
              <!-- Checkbox Tesauro -->
              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Activate tesaurus</span>
              </label>
              <!-- Checkbox solo sonidos -->
              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Only display inputs with sound</span>
              </label>

            </div>

            <!-- <div class="contenedor-general-botones-busqueda ">
              <div class="contenedor-botones-izquierda ">
                <button id="adfilter" class="btn-secundario">Add filter</button>
              </div>
              <div class="contenedor-botones-derecha  ">
                <button type="reset" id="reset-lexico-buscador" class="btn-secundario">Reset</button>

                <button type="submit" id="search-lexico">Search</button>
              </div>
            </div> -->

            <div class="caja-busqueda-lexico">
              <!-- Selector personalizado https://www.w3schools.com/howto/howto_custom_select.asp -->
              <div class="dropdown-opcion-filtro ">
                <select>
                  <option value="and" selected>and</option>
                  <option value="or">or</option>
                  <option value="and not">and not</option>
                  <option value="or not">or not</option>
                </select>
              </div>




              <div class="dropdown-tipo-busqueda ">
                <select>
                  <option value="Headword" selected>Headword</option>
                  <option value="Gloss">Gloss</option>
                  <option value="Root">Root</option>
                  <option value="Semantic field">Semantic field</option>
                  <option value="Grammatical category">Grammatical category</option>
                  <option value="Inflection">Inflection</option>
                  <option value="Exact meaning">Exact meaning</option>
                  <option value="Extended meaning">Extended meaning</option>
                  <option value="Illustrative phrases">Illustrative phrases</option>
                  <option value="Full search">Full search</option>
                </select>
              </div>
              <div class="dropdow-parametros-palabras">
                <select>
                  <option value="begins with" selected>begins with</option>
                  <option value="ends with">ends with</option>
                  <option value="contains sequence">contains sequence</option>
                  <option value="contains word">contains word</option>
                  <option value="exactly equals">exactly equals</option>
                  <option value="regular expression">regular expression</option>

                </select>
              </div>
              <input type="search" placeholder="Type words for search" class="input-caja-busqueda-lexico">
              <!-- Botón eliminar filtro -->
              <button class="eliminar-filtro">x</button>
            </div>
            <div class="contenedor-general-opciones-busqueda">
              <!-- Checkbox Neutralize vowel length -->

              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Activate flexible orthography</span>
              </label>
              <!-- Checkbox bilingue -->
              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Activate bilingual search</span>
              </label>
              <!-- Checkbox Tesauro -->
              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Activate tesaurus</span>
              </label>
              <!-- Checkbox solo sonidos -->
              <label class="contenedor-checkbox-custom ">
                <input type="checkbox">
                <span class="cuadro-check"></span>
                <span class="etiqueta-checkbox">Only display inputs with sound</span>
              </label>

            </div>
            <div class="contenedor-general-botones-busqueda ">
              <div class="contenedor-botones-izquierda ">
                <button id="adfilter" class="btn-secundario">Add filter</button>
              </div>
              <div class="contenedor-botones-derecha  ">
                <button type="reset" id="reset-lexico-buscador" class="btn-secundario">Reset</button>

                <button type="submit" id="search-lexico">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div class="contenedor-general-resultados">
          <h4 class="instrucciones">{#} results. (Page {#} de {#})</h4>

          <div class="contenedor-resultado-item">
            <div class="cabecera-resultado">
              <h2 class="palabra-resultado"><span>a:chi:petik</span></h2>
              <div role="group" tabindex="0" aria-label="Audio Player" class="rhap_container "
                style="display: inline-block; margin: 0px 1em;">
                <audio src="http://www.balsas-nahuatl.org/Mesolex/Headwords_mp3/00001-01000/00016_Xaltn_ADA300.mp3"
                  preload="auto">
                </audio>
                <div class="rhap_main rhap_stacked">
                  <div class="rhap_progress-section">
                  </div>
                  <div class="rhap_controls-section">
                    <div class="rhap_main-controls">
                      <button aria-label="Play"
                        class="rhap_button-clear rhap_main-controls-button rhap_play-pause-button" type="button"><span
                          class="material-icons">
                          play_arrow
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cabecera-resultados-secundarios">
                <p>
                  <i>Citación:</i><span>a:chi:petik</span>, <i>Glosa:
                  </i><span>de.color.bajo</span>&nbsp;|&nbsp;<i>Categoría gramatical:
                  </i><span>Adj</span>&nbsp;|&nbsp;<i>Campo semántico: </i><span>Color</span>
                </p>
              </div>
            </div>
            <div class="card-body">
              <ol class="search-results-list">
                <li>
                  <p class="card-text">
                  <p><span>de color bajo, no fuerte (particularmente flores, pero también cosas como telas)</span></p>
                  </p>
                  <blockquote class="card-text example font-weight-light">
                    <p><span>Kita:lia n' i:n kowtanepano:l ika se: taselo:t mono:tsa chamakih, chamakih ika
                        tepe:xi:lo:t. Yehwa n' tachihchi:wa n' chamakih, we:weyak ihkó:n mahyá:, <esp>este</esp>, onkak
                        chi:chi:ltik, kostik, ista:k, xokoyo:ltsi:n, n... a:chi:petik wa:n
                        xokotik.</span>&nbsp;<i><span>Ponen los palos adornados con la flor de heliconias, heliconias
                          con hojas de tepexilote. Con eso heliconias adornan (los altares), de hojas largas, este, hay
                          rojas, amarillas, blancas, un color combinado entre rojo fuerte, café y blanco, hay otro de
                          color bajo y (otro) verde.</span></i></p>
                  </blockquote>
                </li>
                <li>
                  <p class="card-text">
                  <p><span>[col] <vnawa>kostik</vnawa>
                      <nawa>a:chi:petik</nawa> | [lit., 'amarrillo de.color.bajo'] de color amarillo bajo, no fuerte
                    </span></p>
                  </p>
                  <blockquote class="card-text example font-weight-light">
                    <p><span>Ke:mah, pos <esp>papaya</esp> onkak miak taman, ke:meh yo:n seki kiliah nehjó:n <esp>papaya
                        </esp> yo:n tein itahta:i, nehjó:n yeh xo:..., xo:chiowa wa:n ma:..., ma:tohtokotstik mochi:wa,
                        we:noh, mota:lia itech ko..., kowke:span ixo:chiotsi:n. Wa:n ixo:chiotsi:n achi, a:chi a:kostik,
                        a:mo semi kostik, a:kostik sah, <esp>medio</esp> pochiktik, pero a:kostik, mah tikihto:ka:n
                        a:kostik xo:chit, a:mo kostik kwaltsi:n. Kostik a:chi:petik wa:n poso:ni ixo:chiotsi:n
                        kowke:span wa:n ke:mah mopilowa ya kowtet, mochi:wa pero tsikitsi:n ke:meh xokot
                        sah.</span>&nbsp;<i><span>Si, pues hay muchas variedades de papaya, como el que le llaman papaya
                          cimarrón, esta florea y sus ramas no son tan largas, las flores nacen en el tallo. Y sus
                          flores son un poco descoloridas con tendencia a amarillas, no son muy amarillas, son de color
                          bajo, amarillas, un poco blanquisas pero una amarilla descolorida, podemos decir que son de
                          color bajo, no tienen un color amarillo bonito Son descoloridas con tendencia a amarillo y las
                          flores nacen en el tallo y ahí mismo nace el fruto. El fruto es muy pequeño, como el tamaño de
                          una naranja.</span></i></p>
                  </blockquote>
                </li>
                <li>
                  <p class="card-text">
                  <p><span>[col] <vnawa>chi:chi:ltik</vnawa>
                      <nawa>a:chi:petik</nawa> | [lit., 'rojo de.color.bajo'] de color rojo bajo, no fuerte
                    </span></p>
                  </p>
                  <blockquote class="card-text example font-weight-light">
                    <p><span>AND-- ¿Ista:k oso tsih...? JVC-- N' a:kolin ne:n ixo:chio me..., <esp>medio</esp>,
                        chi:chi:ltik a:chi:petik n' ixo:chio n' a:kolin. Ke:mah, wa:n ne: pané: tiki:xmati yo:n
                        kinamakah kwesala:n a:ko:lxo:chit, kiliah ata yo:n yo:n kinamakah yo:n achi tepe:wi xo:chit wa:n
                        olo:chposo:ni ihkwí:n. Yehwa n' ixo:chio, <esp>igualito</esp> yo:n.</span>&nbsp;<i><span>JVC--
                          ¿Es blanco o ...? AND-- Las flores de ajonjolí son un poco rojos .... JVC-- Son de rojo bajo
                          las flores de ajonjolí. Sí, y parece que las conocemos como (<nawa>a:ko:lxo:chit</nawa>) esas
                          flores que venden en Cuetzalan, así les llaman ésas que luego se caen los pétalos y florecen
                          juntas al mismo tiempo. Esas flores son igualitas.</span></i></p>
                  </blockquote>
                </li>
                <li>
                  <p class="card-text">
                  <p><span>[col] <vnawa>ista:k</vnawa>
                      <nawa>a:chi:petik</nawa> | [lit., 'blanco de.color.bajo'] de color blanco bajo, no fuerte
                    </span></p>
                  </p>
                  <blockquote class="card-text example font-weight-light">
                    <p><span>AND-- Pos ixo:chio (del <vnawa>ahmolkilit</vnawa>) ne:n nochi ne:n pané: aha:chi:petik.
                        A:chi:petik, ista:k. A:chi:petik, a:mo semi telchi:chi:ltik. JVC-- Pané: ista:k. Ista:k
                        a:chi:petik, mo..., kostik, kostik pero a:chi:petik. Ke:mah. Wa:n de pa..., de pawetsi a
                        xo:chitsi:n, moka:wa ya xoxoktsi:n ne: i..., yo:n i..., kowtetsi:n para moskaltia, ata yo:n
                        iteyo mahyá: kipia e..., komoke de ehe:yi.</span>&nbsp;<i><span>JVC-- A pues sus flores (del
                          <sci>Phytolacca rivinoides</sci> Kunth &amp; C.D. Bouché) todas son como de color bajo. Son de
                          color bajo, blanco, de color bajo, no son muy rojos. AND-- Son como blancas, blancas de color
                          bajo, se …, son amarillas, amarillas pero de color bajo. Si. Y cuando ya se caen las flores.
                          ya queda verde lo que será el fruto que ya va a crecer, tiene sus frutos como divididos en
                          tres.
                        </span></i></p>
                  </blockquote>
                </li>
                <li>
                  <p class="card-text">
                  <p><span>[col] <vnawa>xoxoktik</vnawa>
                      <nawa>a:chi:petik</nawa> | [lit., 'verde de.color.bajo'] de color verde bajo, no fuerte
                    </span></p>
                  </p>
                  <blockquote class="card-text example font-weight-light">
                    <p><span>JVC-- Ke:mah, se: kikwa ya tsapot pero neli MJT-- Ke:mah. JVC-- ina:kayo, n' iihtikyo ne:,
                        ata ne:, achi <esp>medio</esp> kos..., <esp>medio</esp> xohxoxoktik, xoxoktik, xoxoktik
                        a:chi:petik. MJT-- Ke:mah, tahtaman sah, mahyá: yo:n .... JVC-- Ke:mah, iwkitik, iwkitik ke:meh
                        yo:n. MJT-- Ke:mah, xoxoktik.\fr_au JVC313</span>&nbsp;<i><span>JVC-- Si, uno ya se come los
                          zapotes pero es cierto, MJT-- Si. JVC-- la parte carnosa, lo de adentro, pues este es un poco
                          ama…, bueno es verdoso, es verde, es verde bajo. MJT-- Sí, son raros, se parece a…, JVC-- Si,
                          se parece, se parece como ése. MJT-- Si, son verdes.</span></i></p>
                  </blockquote>
                </li>
              </ol>
            </div>
            <div class="card-footer">
              <div>
                <p class="small">
                  <strong>Notas semánticas: </strong><span>La palabra <nawa>a:chi:petik</nawa> refiere al color bajo,
                    generalemente de flores pero también de tela o cosas similares. Generalmente son así por naturaleza
                    no
                    por haberse bajado de intensidad de color. Cuando algo bajo de color por el tiempo, el sol, el
                    color,
                    se utiliza una forma de <vnawa>i:xki:sa</vnawa>. En una búsqueda por el corpus de textos en enero
                    2018
                    se encontraron 18 ocurrencias de <nawa>a:chi:petik</nawa> precedido por un color: 12 veces amarrillo
                    (
                    <vnawa>kosti</vnawa>), 1 vez verde (<vnawa>xoxoktik</vnawa>) y una vez rojo (<vnawa>chi:chi:ltik
                    </vnawa>). Aparentemente se pueden formar compuestos de <nawa>a:chi:petik</nawa> con colores pero
                    hasta la fecha (oct. 2011) solamente se ha manifestado uno: <vnawa>a:chi:pechi:chi:ltik</vnawa>
                    .
                  </span>
                </p>
              </div>
              <div>
                <p class="small">
                  <strong>Notas semánticas: </strong><span>En una búsqueda por el corpus de textos en octubre 2011 se
                    encontraron siete ocurrencias de <nawa>a:chi:petik</nawa> precedido por un color: 5 veces amarrillo
                    (
                    <vnawa>kosti</vnawa>), 1 vez verde (<vnawa>xoxoktik</vnawa>) y una vez rojo (<vnawa>chi:chi:ltik
                    </vnawa>). Aparentemente se pueden formar compuestos de <nawa>a:chi:petik</nawa> con colores pero
                    hasta la fecha (oct. 2011) solamente se ha manifestado uno: <vnawa>a:chi:pechi:chi:ltik</vnawa>
                    .
                  </span>
                </p>
              </div>
              <div>
                <p class="small">
                  <strong>Notas morfológicas: </strong><span>La etimología es <nawa>a:chi:petik</nawa> no está claro
                    como no existe <nawa>chi:petik</nawa> ni algo parecido. Hay seis palabras que aparecen en el corpus
                    hasta la fecha (2018-01-09): <nawa>a:chi:petik</nawa>, <vnawa>a:chi:petia</vnawa>, <vnawa>
                      a:chi:pechi:chi:ltik</vnawa>
                    <vnawa>a:chi:pemoradi:toh</vnawa>, <vnawa>chi:chi:la:chi:petik</vnawa> y <vnawa>ma:a:chi:petik
                    </vnawa>
                    aunque la forma mucho más común es el adjectivo <nawa>a:chi:petik</nawa> con 107 de 115 ocurrencias.
                    De las ocurrencias de <nawa>a:chi:petik</nawa> un total de 14 son reduplicados: <nawa>aha:chi:petik
                    </nawa>. Una vez <nawa>a:chi:petik</nawa> ocurre con <nawa>ye:k-</nawa> como prefijo y una vez
                    <nawa>
                      aha:chi:petik</nawa> ocurre así. Es interesante que el orden de la incorporación de colores puede
                    variar: <vnawa>chi:chi:la:chi:petik</vnawa> y <vnawa>a:chi:pechi:chi:ltik</vnawa>. Pero parece que
                    es
                    más común que el color precede. En algunos casos se escribe como dos palabras: <nawa>ista:k
                      a:chi:petik</nawa> y <nawa>kostik a:chi:petik</nawa>.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <article class="contenedor-resultado-item">
            <section class="termino-principal">

              <h2>Resultado palabra</h2><audio></audio><button class="play"></button>
            </section>
            <section class="informacion-secundaria-termino-principal"></section>
            <section class="definiciones"></section>




            <abbr></abbr>
          </article>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>
