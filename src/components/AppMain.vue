<script>
import {store} from '../store';
import AppMovie from './AppMovie.vue';
import AppSeries from './AppSeries.vue';

export default {
    data(){
        return{
            store,
        }
    },
    components: {
        AppMovie,
        AppSeries
    },
}
</script>

<template lang="">
    <div>
        <h3>Movies</h3>       
    </div>
    <div>
        <AppMovie />        
    </div>
    <div>
        <h3>TV Series</h3>       
    </div>
    <div>
        <AppSeries />        
    </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

    h3{
        color: $bf-white !important;
        margin-left: 25px;
    }
</style>