<template>
<v-container>
    <div class="section-3">
            <p class="section-text">Equipo</p>
            <div class="col-5">
                    <p>
    
                        <img src="Alex.jpg" alt="Estudiante 5" style="width:100px;height:150px;">
                    </p>
                    <div class="service-content">
    
                        <h2>
                            Alex Jamith Cano
                        </h2>
                        <p class="service-text memebers">
                            Abogado con maestría en Cloud Computing con énfasis en el uso de energías renovables para la implementación de proyectos 
                            que reduzcan el consumo de electricidad de los servidores de Cloud Computing.
                        </p>
                    </div>
                </div>
            <div class="col-5">
                    <p>
    
                        <img src="Oscar.png" alt="Estudiante 5" style="width:100px;height:150px;">
                    </p>
                    <div class="service-content">
    
                        <h2>
                            Oscar Yesit Caicedo
                        </h2>
                        <p class="service-text memebers">
                            Ingeniero Ambiental con enfoque en ciencia de datos. Dominio de herramientas como Python, R, SQL y GCP. 
                            Implementador de soluciones en la nube, desarrollo de modelos de machine learning 
                            y análisis de big data.

                        </p>
                    </div>
                </div>
            <div class="col-5">
                    <p>
    
                        <img src="Efrain.jpg" alt="Estudiante 5" style="width:100px;height:150px;">
                    </p>
                    <div class="service-content">
    
                        <h2>
                            Efrain Escobar
                        </h2>
                        <p class="service-text memebers">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis odio reiciendis molestias commodi cumque earum, voluptates
                            autem, velit quidem enim. Distinctio soluta culpa esse ad illo deleniti id dignissimos!
                        </p>
                    </div>
                </div>
            <div class="col-5">
                    <p>
    
                        <img src="Stiven.jpg" alt="Estudiante 5" style="width:100px;height:150px;">
                    </p>
                    <div class="service-content">
    
                        <h2>
                            Ales S. Cardona
                        </h2>
                        <p class="service-text memebers">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis odio reiciendis molestias commodi cumque earum, voluptates
                            autem, velit quidem enim. Distinctio soluta culpa esse ad illo deleniti id dignissimos!
                        </p>
                    </div>
                </div>
            <div class="col-5">
                    <p>

                        <img src="Eduar LR-1.jpg" alt="Estudiante 5" style="width:100px;height:150px;">
                    </p>
                    <div class="service-content">
    
                        <h2>
                            José E. Guerrero
                        </h2>
                        <p class="service-text memebers">
                            Experto en investigación del cambio climático mediante la ciencia de datos. Trabajo enfocado en gestión ambiental, 
                            la salud y las comunidades vulnerables. Con amplia experiencia en el análisis de datos.
                        </p>
                    </div>
                </div>


        </div>
</v-container> 
</template>

<script>
export default {

}
</script>

<style>

.section-3{
    height: 500px;
    background-color: coral;
}

.section-text{
    margin: 0;
    color: #3e3e3e;
    background: white;
    font-weight: bold;
    text-align: center;
}

.col-5{
    width: 19%;
    height: 470px;
    display: inline-block;
    margin: 5px 4px 0;
    text-align: center;
    background-color: rgb(255, 177, 148);
}

.col-5{
    align-items: stretch
}

.service-content{
    padding: 0.5em 0;
}
.service-text{
    padding: 10px;
    text-align: justify;
    bottom: 0;
}

.service-text.memebers{
    font-style: italic; 
}


</style>