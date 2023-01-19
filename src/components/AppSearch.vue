<script>
import {store} from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    data(){
        return{
            store,
            searchText: '',
        }
    },
    methods:{
        resetFilmList(){
            this.searchText = '';
        }
    },
}
</script>

<template lang="">
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for title" id="searchBar" v-model.trim="searchText" @keyup.enter="$emit('searchedText', searchText)">
        <button class="btn btn-outline-secondary" type="button" @click="resetFilmList(), $emit('activateFunction', 0)"><fa icon="fa-solid fa-magnifying-glass" /></button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>