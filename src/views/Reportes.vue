<template>


<div class="Reportes">
  <h1>Realizar un reporte de tu ciudad</h1>
  <V-container>
    <v-form @submit.prevent="agregarCiudad()"> 
      <v-text-field
        v-model="atributos.nombre"
        :counter="30"
        label="Nombre de ciudad"
      ></v-text-field>

      <v-select
        v-model="atributos.tipo"
        :items ="tipoO"
        label="tipo"
      ></v-select>


      <v-text-field
        v-model="atributos.cantidad"
        label="cantidad"
        required
      ></v-text-field>

      <v-btn 
      color="success" 
      class="mr-4" 
      type= 'submit'
      >
      Enviar reporte
      </v-btn>

      <v-btn color="error" class="mr-4" @click="Limpiar()"> Limpiar </v-btn>


    </v-form>
  </V-container>
  </div>
</template>

<script>

export default {

data(){

  return {
    Atributos:[],

    atributos: {

      nombre:"",
      tipo:"",
      cantidad:"",

    },

    tipoO:[ 'CO', 'NO2','PM2','PM10']


  }


},


methods:{


  agregarCiudad(){
  console.log(this.atributos);
    if(!this.atributos.nombre){

      this.$swal('Error!',
                    'Falta Nombre de ciudad!',
                    'error');


    }

    else if(!this.atributos.tipo){

      this.$swal('Error!',
                    'Falta tipo de contaminante!',
                    'error');

    }

    else if(!this.atributos.cantidad){

      this.$swal('Error!',
                    'Falta cantidad de contaminante!',
                    'error');


    }



    else{

    this.axios
    .post("/nuevo-reporte",this.atributos)
    .then((res)=>{
    this.Atributos.push(res.data);


    this.$swal('success!',
                    'Ciudad agregada exitosamente!',
                    'success');
      
      
    this.atributos.nombre="";
    this.atributos.tipo="";
    this.atributos.cantidad="";

    })

    .catch((e)=>{

      console.log(e.response);

      alert("Error en guardar reporte");


    })

    }


    
    

  },


}

}

</script>