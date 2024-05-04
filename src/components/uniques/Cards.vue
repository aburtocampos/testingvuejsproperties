<script setup>

</script>

<template>
  <div class="container py-4">
    <div class="d-grid parent">
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-1.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">desarrollo de e-commerce y websites informativos</h5>
            <p class="card-text">Construye tu negocio y comienza a facturar con una integración 360.</p>
            <button type="button" class="btn btn-outline-light btn-vermas">Ver más</button>
            </div>
        </div>
   
   
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-2.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">desarrollo de e-commerce y websites informativos</h5>
            <p class="card-text">Construye tu negocio y comienza a facturar con una integración 360.</p>
            <button type="button" class="btn btn-outline-light btn-vermas">Ver más</button>
            </div>
        </div>
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-3.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">desarrollo de e-commerce y websites informativos</h5>
            <p class="card-text">Construye tu negocio y comienza a facturar con una integración 360.</p>
            <button type="button" class="btn btn-outline-light btn-vermas">Ver más</button>
            </div>
        </div>
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-4.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">desarrollo de e-commerce y websites informativos</h5>
            <p class="card-text">Construye tu negocio y comienza a facturar con una integración 360.</p>
            <button type="button" class="btn btn-outline-light btn-vermas">Ver más</button>
            </div>
        </div>
   
  
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-5.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">desarrollo de e-commerce y websites informativos</h5>
            <p class="card-text">Construye tu negocio y comienza a facturar con una integración 360.</p>
            <button type="button" class="btn btn-outline-light btn-vermas">Ver más</button>
            </div>
        </div>
  </div>
</div>
</template>

<style scoped>

.parent{
/* grid-template-columns: repeat(5, 1fr); */
grid-template-columns: repeat(5, minmax(260px, 1fr)) !important;
grid-template-rows: 1fr;
grid-column-gap: 16px;
grid-row-gap: 0px;
overflow: auto;
}

.card{
    border: 0px !important;
}

.card-body{
    overflow: hidden;
    
}

.card-title{
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    padding: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
}

.card-text{
    position: absolute;
    top: 30%;
    color: white;
    padding: 1rem;
    font-size: 1rem;
    left: 100%;
    transition: left 0.3s ease;
}

.card-body:hover .card-text{
left: 1%;
color: white;

}

.parent .card:last-child .card-body .card-text{
    color: transparent;
}

.parent .card:last-child:hover .card-body .card-text{
    color: white;
}

.btn-vermas{
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1rem;
}

img{
    transition: transform 0.3s ease;
}

.card:hover img{
  transform: scale(1.3); 
  filter: blur(5px);
}


@media (min-width: 1200px){
    .parent{
        overflow: visible;
        grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)) !important;
       
    }   
}

</style>
