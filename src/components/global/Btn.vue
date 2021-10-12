<template>
    <button>
        <router-link :to="Btn.path" rel="noopener noreferrer"> {{Btn.text}} </router-link>
    </button>
</template>
<script lang="ts">
export default {
    data(){
        return{

        }
    },
    props:{
        Btn:Object,
    }
}
</script>