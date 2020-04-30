<template>
    <v-card color="black" dark v-show="active" class="red--text">
        x:{{x}} y:{{y}} i:{{i}}
    </v-card>
</template>
<script>
export default {
    name:'Console',
    props:['x','y','i','active']
}
</script>