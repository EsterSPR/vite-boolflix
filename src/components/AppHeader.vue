<script>
import {store} from '../store';
import AppSearch from './AppSearch.vue';
import axios from 'axios';

export default {
    data(){
        return{
            store,
            apiUrlSearch: 'https://api.themoviedb.org/3/search/multi?',
            apiKey: '6d4ee97c5cad311b875b30d7675f55e0',
            index: '',
        }
    },
    components:{
        AppSearch,
    },
    methods: {
        getResults(searchedText){
        axios.get(this.apiUrlSearch, {
            params: {
                api_key: this.apiKey,
                query: searchedText,
            }
        })
        .then((response) => {
            this.store.moviesList = response.data.results;
            this.store.moviesTitle = 'Results for: ' + searchedText;
        })
    },
    }
}
</script>

<template lang="">
    <header class="w-100">
        <div class="row">
            <div class="col-6">
                <h2>BOOLFLIX</h2>
            </div>
            <div class="col-6">
                <AppSearch @searchedText="getResults" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

    header{
        background-color: $bf-black;
        padding: 30px;

        h2{
            color: $bf-red;
        }
    }
</style>