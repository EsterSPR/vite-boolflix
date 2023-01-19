import {reactive} from 'vue'

export const store = reactive({
    moviesLink: 'https://api.themoviedb.org/3/search/multi?api_key=6d4ee97c5cad311b875b30d7675f55e0',
    moviesList: [],
    seriesList: [],
});