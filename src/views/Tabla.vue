<template>
<v-container>
    <!-- <div class="Tabla"> -->
        <h1>Contaminación del aire</h1>
        <v-data-table :headers="headers" :items="ciudades" sort-by="cantidad" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Principales indicadores</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                Nueva entrada
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.nombre" label="nombre"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.tipo" label="tipo"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.cantidad" label="cantidad"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                        </v-col>                                      
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancelar
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="editarCiudad(editedItem)">
                                    Modificar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Está seguro que quiere eliminar esta entrada?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{item}">
                <v-icon small class="mr-2" @click="editItem(item._id)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="eliminarCiudad(item._id)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
    <!-- /*</div> -->
</v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            { text: 'ID de ciudad', value: '_id'},
            { text: 'Nombre de la ciudad',value: 'nombre'},
            { text: 'Tipo de contaminante',value: 'tipo'},
            { text: 'Cantidad de contaminante',value: 'cantidad'},
            { text: 'Actions', value: 'actions'},
        ],
        ciudades: [],
        editedIndex: -1,
        editedItem:[], 
        defaultItem: {

        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
        this.listarCiudades();
    },

    methods: {
        initialize() {

        },

        editItem(item) {
            this.dialog = true
            console.log(item);
            this.axios.get(`buscarParametro/${item}`)
                .then(res => {
                    this.editedItem = res.data
                })
        },

        deleteItem(item) {
            this.editedIndex = this.ciudades.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.ciudades.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.ciudades[this.editedIndex], this.editedItem)
            } else {
                this.ciudades.push(this.editedItem)
            }
            this.close()
        },

        listarCiudades(){
            this.axios.get('/buscarTodo')
            .then((response)=>{
            this.ciudades=response.data;   
            })
            .catch((e)=>{
                console.log('error'+ e)

            })
        },
        editarCiudad(item) {

            this.axios.put(`/actualizar/${item._id}`, item)
                .then(res => {
                    this.$swal('success!',
                    'Ciudad modificada exitosamente!',
                    'success');
                    this.close();
                    this.listarCiudades();
                    const index = this.ciudades.findindex(n => n._id === res.data._id)
                    this.ciudades[index].nombre = res.data.nombre;
                    this.ciudades[index].tipo = res.data.tipo;
                    this.ciudades[index].cantidad = res.data.cantidad;

                }).catch(e => {
                    console.log(e.response)
                })

        },

        eliminarCiudad(id) {
            console.log(id);
            this.axios.delete(`/eliminarParametro/${id}`)
                .then(res => {
                    this.$swal('OK!',
                    'Ciudad eliminada exitosamente!',
                    'error');

                    const index = this.ciudades.findIndex(item => item._id === res.data._id)
                    this.ciudades.splice(index, 1);
                    this.editedIndex = this.ciudades.indexOf(item);
                    this.editedItem = Object.assign({}, item)

                }).catch(e => {
                    console.log(e.response)
                })

        }

    },
}
</script>
