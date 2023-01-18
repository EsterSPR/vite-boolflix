<script>
import {store} from '../store';
import AppMovie from './AppMovie.vue';

export default {
    data(){
        return{
            store,
        }
    },
    components: {
        AppMovie,
    },
}
</script>

<template lang="">
    <div>
        <p>
            {{store.searchTitle}}
        </p>
        <AppMovie />        
    </div>
</template>

<style lang="scss" scoped>
    
</style>