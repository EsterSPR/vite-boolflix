<script>
import {store} from '../store';

export default {
    data(){
        return {
        store,
        coverImage: 'https://image.tmdb.org/t/p/w342'
        }
    },
}
</script>

<template lang="">
    <div class="cards-container">
        <div v-for="film in store.moviesList" class="movie-card" :class="film.media_type == 'person' ? 'd-none' : ''">
            <img :src="(film.poster_path === null) ? '../../public/img/netflix-nocover.jpeg' : (coverImage + film.poster_path)" alt="">
            <div class="movie-info">
                <h4>{{ film.title || film.name }}</h4>
                <p>{{ film.media_type }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.cards-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    .movie-card {
        background-color: #fff;
        margin: 10px;
        position: relative;

        img{
            width: 250px;
            transition: 0.3s;
        }

        img:hover{
            opacity: 0;
        }

        .movie-info{
            position: absolute;
            top: 30px;
            left: 20px;
            right: 20px;
        }
    }

}
    
</style>