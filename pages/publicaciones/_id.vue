<template>
    <div class="container">
        <article>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg" width="250px" alt="Imagen">
            <h1>{{post.title}}</h1>
            <p>{{post.content}}</p>
        </article>
        <aside>
            <h3>Articulos</h3>
            <ul>
                <li v-for="(item) in publicacionesRelacionadas" :key="item.id">
                    <a :href="`/publicaciones/${item.id}`">{{item.title}}</a>
                </li>
            </ul>
        </aside>
        <p class="capa_global">parrafo de prueba de la clase globar</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            publicaciones:[
                {
                    id:'dino',
                    title:'Dinosaurios',
                    content:'Los dinosaurios (Dinosauria, del griego δεινός deinós ‘terrible’ y σαῦρος sauros ‘lagarto’: ‘lagartos terribles’) son un grupo de saurópsidos1​2​ que aparecieron durante el período Triásico. Aunque el origen exacto y su diversificación temprana es tema de activa investigación,3​ el consenso científico actual sitúa su origen entre 231 y 243 millones de años atrás.4​ Fueron los vertebrados terrestres dominantes durante 135 millones de años, desde el inicio del Jurásico (hace unos 200 millones años) hasta el final del Cretácico (hace 66 millones de años), cuando la mayoría de los grupos de dinosaurios se extinguieron durante la extinción masiva del Cretácico-Terciario que puso fin a la Era Mesozoica. El registro fósil indica que las aves evolucionaron a partir de dinosaurios terópodos durante el período Jurásico y, en consecuencia, muchos taxónomos consideran que las aves forman un subgrupo dentro de los dinosaurios.5​ Algunas aves sobrevivieron a este acontecimiento, y sus descendientes continúan el linaje de los dinosaurios hasta nuestros días.6'
                },
                {
                    id:'gato',
                    title:'Gato',
                    content:'El gato doméstico1​2​ (Felis silvestris catus), llamado popularmente gato, y de forma coloquial minino,3​ michino,4​ michi,5​ micho,6​ mizo,7​ miz,8​ morroño9​ o morrongo,10​ entre otros nombres, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano.El nombre actual en muchas lenguas proviene del latín vulgar catus. Irónicamente, catus aludía a los gatos salvajes, mientras que los gatos domésticos, en latín, eran llamados felis.'
                }
            ]
        }
    },
      head(){
        return{
            title:'Biblioteca'
        }
    },
    computed:{
        post(){
           /* return this.publicaciones.find(post => post.id === this.id) dentro de la misma
            dentro del store
           */
           return this.$store.state.publicaciones.all.find(post => post.id === this.id)
        },
        publicacionesRelacionadas(){
            return this.$store.state.publicaciones.all.filter(post => post.id !== this.id)
        }
    }
}
</script>
<style scoped>

</style>
