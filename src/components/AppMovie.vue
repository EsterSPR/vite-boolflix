<script>
import {store} from '../store';

export default {
    data(){
        return {
        store,
        coverImage: 'https://image.tmdb.org/t/p/w342'
        }
    },
    methods: {
        langOther(e) {
            e.target.src = "../../public/lang-ico/other.png"
        }
    }
}
</script>

<template lang="">
    <div class="cards-container">
        <div v-for="film in store.moviesList" class="movie-card" :class="film.media_type == 'person' ? 'd-none' : ''">
            <img :src="(film.poster_path === null) ? '../../public/img/netflix-nocover.jpeg' : (coverImage + film.poster_path)" alt="" class="movie-cover">
            <div class="movie-info">
                <h4>{{ film.title || film.name }}</h4>
                <p>Type: {{ film.media_type }}</p>
                <p>Language: <img :src="'../../public/lang-ico/' + film.original_language + '.png'" :alt="film.original_language" class="lang" @error="langOther"></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.movie-card {
  width: 250px;
  height: 350px;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 10px 5px;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5); 
}
    .movie-card:hover:before {
      opacity: 1; 
    }
    .movie-card:hover .movie-info {
      opacity: 1;
      transform: translateY(0px); 
    }
  .movie-card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0; 
}
  .movie-card .movie-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px; 
}
  .movie-card .movie-info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s; 
}

.lang{
    width: 25px;
}
    
</style>