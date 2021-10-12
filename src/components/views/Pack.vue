<template>
    <div>
        <div>
            <img :src="Pack.icon" alt="image icon">
        </div>
        <h3>{{Pack.name}}</h3>
        <strong v-if="Pack.strong !== null">{{Pack.strong}}</strong>
        <div>
            <img :src="Pack.image" v-if="Pack.image !== null" alt="image icon">
            <p>{{Pack.p}}</p>
            <img :src="Pack.image" v-if="Pack.image !== null" alt="image icon">
        </div>
    </div>
</template>
<script>
export default {
    name:"Pack",
    props:{
        Pack:Object,
    },
}
</script>