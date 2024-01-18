<template>
    <b-container fluid>
     
      <b-row style="margin-top: 10px;">
        <b-col cols="3">
          <b-form-select   class="custom-select mr-sm-2  form-control " v-model="mes" :options="meses.map(item => ({ text: item.nombre, value: item.id }))" @change="graficos()"> </b-form-select>  
        </b-col>
    </b-row>
    <b-row style="margin-top: 20px">
      <b-col cols="6">
        <div class="card border border-dark">
          <div class="card-header bg-dark"></div>
          <div class="card-body">
              <Bar v-if="loaded"
                :options="chartOptions"
                :data="chartData"
              ></Bar>
          </div>
        </div>
      </b-col>
      <b-col cols="6">
        <div class="card border border-dark">
          <div class="card-header bg-dark"></div>
          <div class="card-body">
              <Bar v-if="loaded"
                :options="chartOptions"
                :data="segundaData"
              ></Bar>
          </div>
        </div>
      </b-col>
    </b-row>  
      
    <b-row style="margin-top: 20px">
      <b-col cols="6">
        <div class="card border border-dark">
          <div class="card-header bg-dark"></div>
          <div class="card-body">
              <Bar v-if="loaded"
                :options="chartOptions"
                :data="terceraData"
              ></Bar>
          </div>
        </div>
      </b-col>
      <b-col cols="6">
        <div class="card border border-dark">
          <div class="card-header bg-dark"></div>
          <div class="card-body">
              <Bar v-if="loaded"
                :options="chartOptions"
                :data="cuartaData"
              ></Bar>
          </div>
        </div>
      </b-col>
    </b-row>      
    <b-table striped hover :items="items1" :fields="fields1" style="margin-top: 25px"></b-table>  
    </b-container>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    export default {
      extends: 'Bar',
      name: 'BarChart',
      components :{Bar},
      
      

      props: {
        chartId: {
          type: String,
          default: 'bar-chart'
        }
      },
      data() {
        return {
          meses: [ 
            {nombre: 'Enero', id: 1},
            {nombre: 'Febrero', id: 2},
            {nombre: 'Marzo', id: 3},
            {nombre: 'Abril', id: 4},
            {nombre: 'Mayo', id: 5},
            {nombre: 'Junio', id: 6},
            {nombre: 'Julio', id: 7},
            {nombre: 'Agosto', id: 8},
            {nombre: 'Septiembre', id: 9},
            {nombre: 'Octubre', id: 10},
            {nombre: 'Noviembre', id: 11},
            {nombre: 'Diciembre', id: 12},

          ],
          mes: 1,
          fields1: ['Total_de_Compras','Puntos_Canjeados', 'Puntos_Otorgados', 'Ordenes_Retrasadas'],
          loaded: false,
          etiquetas: [],
          valores: [],
          chartData : [],
          segundaData: [],
          terceraData: [],
          cuartaData: [],
          chartOptions: {
            responsive: true
          },
          items: [{ Id:1,Nombre:'Santa teresa',Precio:20,Presentacion:'0,75'}],
          items1: [],
          fields: [
            { key: 'Nombre', label: 'Nombre', },
            { key: 'Precio', label: 'Precio', class: 'text-center' },
            { key: 'Presentacion', label: 'Presentacion', class: 'text-center' },
            
          ],
          totalRows: 1,
          currentPage: 1,
          perPage: 5,
          pageOptions: [5, 10, 15],
          filter: null,
          filterOn: [],
          Categorias:['Premium','Ultra-Premium','Estandar'],
          Categoria:'Estandar',
          Fecha_i: '',
          Fecha_f: '',
          mes_i: '2024-01-01 00:00:00',
          mes_f: '2024-01-31 00:00:00',
          segunda: [],
          etiqueta2: [],
          tercera: [],
          etiqueta3: [],
          cuarta: [],
          etiqueta4: [],
          cantidad: 0,
          puntosC: 0,
          puntosA: 0,
          ordenesR: 0
        }
      },
     
     
      computed: {
        sortOptions() {
          // Create an options list from our fields
          return this.fields
            .filter(f => f.sortable)
            .map(f => {
              return { text: f.label, value: f.key }
            })
        },
  
      },
      async mounted() {
        this.loaded = false
        this.graficos()
        
      },
      methods: {
        onFiltered(filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length
          this.currentPage = 1
        },
        async graficos(){
          this.totalRows = this.items.length
          console.log(this.mes)
          this.formatearDatos()
          this.primerGrafico()
          this.segundoGrafico()
          this.tercerGrafico()
          this.tablaUno()
          this.tablaDos()
          this.cuartoGrafico()
          this.tablaCuatro()
        },
        formatearDatos(){
          this.mes_i = '2024-' + ('0' + this.mes).slice(-2) + '-01 00:00:00';
          if(this.mes == 2){
            this.mes_f = '2024-' + ('0' + this.mes).slice(-2) + '-28 00:00:00';
          }else{
            if ( this.mes == 4 || this.mes == 6 || this.mes == 9 || this.mes == 11){
              this.mes_f = '2024-' + ('0' + this.mes).slice(-2) + '-30 00:00:00';
            }
            else{
              this.mes_f = '2024-' + ('0' + this.mes).slice(-2) + '-31 00:00:00';
            }
          }
        },
        async primerGrafico(){
          
          this.etiquetas = []
          this.valores = []
          this.charData = []
          const data = {
            mes_i: this.mes_i,
            mes_f: this.mes_f,

          }
            const url = 'http://localhost:3000/api/grafico';
            await this.axios.post(url,data).then(response => {
              console.log(response.data)
              for (let i = 0; i < response.data.length; i++) {
                this.etiquetas.push(response.data[i].presentacion),
                this.valores.push(response.data[i].total_cantidad)
              }
            }).catch(error => {
              console.log(error);
            });
               
          this.chartData = {
            labels: this.etiquetas,
            datasets: [
              {label: 'Productos', data: this.valores, backgroundColor: '#f87979',}
            ]
          }
        
          

        },
        async segundoGrafico(){
          const url = 'http://localhost:3000/api/grafico';
          this.segundaData = []
          this.segunda = []
          this.etiqueta2 = []
            await this.axios.get(url).then(response => {
              const resultado = response.data;
              console.log(resultado)
              for (let i = 0; i < response.data.length; i++) {
                this.segunda.push(response.data[i].fk_lugar),
                this.etiqueta2.push(response.data[i].cantidad_ventas)
              }
              this.segundaData = {
                labels: this.segunda,
                datasets: [
                  {label: 'Más compras en línea', data: this.etiqueta2, backgroundColor: '#f87979',}
                ]
              }
            }).catch(error => {
              console.log(error);
            });
          
        },
        async tercerGrafico(){
          this.puntosA = 0
          const url = 'http://localhost:3000/api/grafico/tercera';
          this.terceraData = []
          this.tercera = []
          this.etiqueta3 = []
          const data = {
            mes_i: this.mes_i,
            mes_f: this.mes_f,

          }
            await this.axios.post(url, data).then(response => {
              const resultado = response.data;
              console.log(resultado)
              for (let i = 0; i < response.data.length; i++) {
                this.tercera.push(response.data[i].fk_presentacion),
                this.etiqueta3.push(response.data[i].total_cantidad)
                this.puntosA = this.puntosA + parseInt(response.data[i].total_cantidad)
              }
              
              this.terceraData = {
                labels: this.tercera,
                datasets: [
                  {label: 'Más comprado en físico', data: this.etiqueta3, backgroundColor: '#f87979',}
                ]
              }
            }).catch(error => {
              console.log(error);
            });
            
        },
        async tablaUno(){
          console.log('aqui')
          const url = 'http://localhost:3000/api/grafico/columnaUno';
          this.items1 = []
          console.log('aqui')
          const data = {
            mes_i: this.mes_i,
            mes_f: this.mes_f,
          }
              await this.axios.post(url, data).then(response => {
              const resultado = response.data;
              console.log(resultado)
              this.cantidad = resultado[0].obtenercantidadventas
            }).catch(error => {
              console.log(error);
            });

        },
        async tablaDos(){
          const url = 'http://localhost:3000/api/grafico/columnaDos';
          const data = {
            mes_i: this.mes_i,
            mes_f: this.mes_f,
          }
           
             
              await this.axios.post(url, data).then(response => {
              const resultado = response.data;
              console.log(resultado)
              this.puntosC = resultado[0].obtenertotalpuntos
              
            }).catch(error => {
              console.log(error);
            });



            
        },
        async cuartoGrafico(){
          
          this.etiquetas4 = []
          this.cuarta = []
          this.cuartaData = []
          const data = {
            mes_i: this.mes_i,
            mes_f: this.mes_f,
          }
            const url = 'http://localhost:3000/api/grafico/ordenes';
            await this.axios.post(url,data).then(response => {
              console.log(response.data)
              for (let i = 0; i < response.data.length; i++) {
                this.cuarta.push(response.data[i].est_nombre),
                this.etiqueta4.push(response.data[i].cantidad)
              }
              
              this.cuartaData = {
                labels: this.cuarta,
                datasets: [
                  {label: 'Órdenes por Estatus', data: this.etiqueta4, backgroundColor: '#f87979',}
                ]
              }
            }).catch(error => {
              console.log(error);
            });
        
          

        },
        async tablaCuatro(){
          const url = 'http://localhost:3000/api/grafico/columnaCuatro';
          const data = {
            mes_i: this.mes_i,
            mes_f: this.mes_f,
          }
              await this.axios.post(url, data).then(response => {
              const resultado = response.data;
              console.log(resultado)
              this.ordenesR = resultado[0].contarordenesconfechafinalnull
              const item={
                Total_de_Compras: this.cantidad,
                Puntos_Canjeados:this.puntosC,
                Puntos_Otorgados: this.puntosA,
                Ordenes_Retrasadas: this.ordenesR
              }
              this.items1.push(item)
              console.log(this.items1)
            }).catch(error => {
              console.log(error);
            });
            this.loaded = true
        },
      }
    }
  </script>