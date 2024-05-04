<script >
import { register } from 'swiper/element/bundle';


register();


</script>

<template>
    <header class="fondotexto">
        <h1>Escala el <br class="d-block d-sm-none"> potencial <br class="d-none d-lg-block">de tu <br class="d-block d-sm-none"> empresa</h1>
        <h3>conoce el poder de phantera</h3>
    </header>
    <div class="container p-4">
       <swiper-container slides-per-view="3" spaceBetween="30" pagination="true" speed="500" loop="true" css-mode="false" >
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
        <swiper-slide> <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" /></swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" class="img-fluid" />
        </swiper-slide>
  
      </swiper-container>
    </div>



</template>

<style scoped lang="scss">
video{
  width: 100%;
}
header{
    h1{
        color:red;
    }
}
.fondotexto{
    margin: 6rem 0rem;
}

h1{
    font-size: 5rem;
    font-weight: 700;
}

h1, h3{
    text-align: center;
    text-transform: uppercase;
}

.swiper-custom-pagination {
  margin-top: 5rem;
}
.swiper-pagination-bullet {
  padding: 0.5rem;
  background-color: white;
  opacity: 0.4;
}

.swiper-pagination-bullet-active {
  background-color: white;
  opacity: 1;
}


@media (max-width: 768px){
    .fondotexto{
        margin: 3rem 0rem;
    }
    h1{
        font-size: 2rem;
    }
    h3{
        font-size: 1rem;
    }
}
</style>