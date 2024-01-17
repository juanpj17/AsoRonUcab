<template>
    <b-container >

        <b-card :img-src="imagen" img-alt="Card image" img-left class="mb-1"   style="background-color: #F2CBA5;"  border-variant="primary">
        <b-card-title style="font-size: 60; text-align: center; font-family: Georgia, 'Times New Roman', Times, serif;">{{ nombre }}</b-card-title>
        <b-card-sub-title  style="text-align: left; "><b>Descripcion</b></b-card-sub-title>
        <p   style="text-align: left;">{{ descripcion }}</p>
        <b-card-sub-title  style="text-align: left; font-weight: bold;">Elaboracion</b-card-sub-title>
        <p   style="text-align: left;">{{ 'Elaborado a base de: ' + materia +' ' +destilacion +' .'+elaboracion+'. '+barril}}</p>
        <b-card-sub-title  style="text-align: left; font-weight: bold;">Añejamiento</b-card-sub-title>
        <p   style="text-align: left;">{{ 'Minimo: ' + minAñe +' años de añejamiento' }}</p>
        <b-card-sub-title  style="text-align: left; font-weight: bold;">Mezclado</b-card-sub-title>
        <p   style="text-align: left;">{{ 'Blend de nuestras reservas de  ' + minAñe +' a '+ maxAñe+ ' años de añejamiento'}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Notas de cata</b-card-sub-title>
        <p  style="text-align: left;"> {{ Notas_cata }}</p>
        <b-card-sub-title  style="text-align: left; font-weight: bold; margin-top: 10px; margin-bottom: 10px;">DATA SHEET</b-card-sub-title>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Capacidad</b-card-sub-title>
        <p  style="text-align: left;"> {{ Capacidad + ' mililitros' }}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Alcohol</b-card-sub-title>
        <p  style="text-align: left;"> {{ Alcohol + '°GL'}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Descripcion del producto</b-card-sub-title>
        <p  style="text-align: left;"> {{ 'Ron: '+tipo +'.'+Variedad + '. Elaborado en: '+ direccion}}</p>
        <b-card-sub-title  style="text-align: left; font-weight: bold">Segmento</b-card-sub-title>
        <p  style="text-align: left;"> {{ Categoria}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Caja</b-card-sub-title>
        <p  style="text-align: left;"> {{ Caja_grande}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Pallet</b-card-sub-title>
        <p  style="text-align: left;"> {{ Pallet}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Botella</b-card-sub-title>
        <p  style="text-align: left;"> {{ botella}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Tapa</b-card-sub-title>
        <p  style="text-align: left;"> {{ tapa}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Alto</b-card-sub-title>
        <p  style="text-align: left;"> {{ alto}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Ancho</b-card-sub-title>
        <p  style="text-align: left;"> {{ ancho}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Peso</b-card-sub-title>
        <p  style="text-align: left;"> {{ peso}}</p>
        <b-card-sub-title  style="text-align: left;font-weight: bold">Empaque</b-card-sub-title>
        <p  style="text-align: left;"> {{ empaque}}</p>




    </b-card> 
    </b-container>
</template>
<script>


export default {
    props:{
        producto:'',
        presentacion:''
    },

    data(){''
        return{
            imagen:'https://ronroble.com/wp-content/uploads/2023/01/Ron-Roble-Viejo-Maestro-.png',
            nombre:'',
            descripcion:'',
            materia:'',
            destilacion:'',
            elaboracion:'',
            barril:'',
            minAñe:'',
            maxAñe:'',
            Notas_cata:'',
            Capacidad:'',
            Alcohol:'',
            Categoria:'',
            Variedad:'',
            direccion:'',
            tipo:'',
            Caja_grande:'',
            Pallet:'',
            botella:'',
            tapa:'',
            alto:'',
            ancho:'',
            peso:'',
            empaque:'',
            añejamiento:''
        }
    },
    created(){
        this.ficha()
    },
    methods:{
        ficha(){
         const url = 'http://localhost:3000/api/producto/ficha';
          const datos ={producto:this.producto,presentacion:this.presentacion}
          this.axios.post(url,datos).then(response => {
           console.log(response)
             this.nombre=response.data[0].nombre
             this.descripcion=response.data[0].nombre
             for(let i=0 ; i < response.data[0].materia_pri.length; i++)
             {this.materia=this.materia+response.data[0].materia_pri[i]+','}
             this.destilacion=response.data[0].destilacion
             this.elaboracion=response.data[0].elaboracion
             this.barril=response.data[0].barril
             this.Notas_cata=response.data[0].nota
             for(let i=1 ; i < response.data.length; i++)
             {this.Notas_cata=this.Notas_cata+'.'+response.data[i].nota }
            this.Capacidad=response.data[0].capacidad
            this.Alcohol=response.data[0].grados_alcohol
            this.Categoria=response.data[0].categoria
            this.Variedad=response.data[0].variedad
            this.direccion=response.data[0].direccion_f
            this.tipo=response.data[0].tipo
            this.Caja_grande=response.data[0].caja_grande_desc + '. '+ response.data[0].caja_grande_cap + ' botellas'
            this.Pallet=response.data[0].paleta_cap +' cajas'
            this.botella=response.data[0].nombre_botella
            this.tapa=response.data[0].tapa
            this.alto=response.data[0].altura + ' cm'
            this.ancho=response.data[0].ancho + ' cm'
            this.peso=response.data[0].peso  + 'kg'
            this.empaque=response.data[0].empaque_ind 
            this.añejamiento=response.data[0].añejamiento
            this.calculo_mezcla()
            console.log(this.añejamiento)
            
        }).catch(error => {
               console.log(error.response.data); });},
               calculo_mezcla(){
          const url = 'http://localhost:3000/api/producto/fichaCalculo';
          const datos ={codigo_a:this.añejamiento}
          console.log(datos)
          this.axios.post(url,datos).then(response => {
              console.log(response.data[0].calcular_añejamiento)
              this.maxAñe=response.data[0].calcular_añejamiento[0]
              this.minAñe=response.data[0].calcular_añejamiento[0]
              for(let i=1 ; i < response.data[0].calcular_añejamiento.length; i++)
                {if( response.data[0].calcular_añejamiento[i]<  this.minAñe)
                { this.minAñe=response.data[0].calcular_añejamiento[i]}
                if( response.data[0].calcular_añejamiento[i]>  this.maxAñe)
                { this.maxAñe=response.data[0].calcular_añejamiento[i]}}
            }).catch(error => {
               console.log(error.response.data); });},
    
    }

}
   
</script>
