<script setup>
import { ref } from 'vue'

const show = ref(false)

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

window.onscroll = () => {
    if (window.pageYOffset > 300) {
        show.value = true
    } else {
        show.value = false
    }
}
</script>

<template>
    <div class="go-to-top" v-show="show" @click="scrollToTop">
        <i class="fa-solid fa-arrow-up"></i>
    </div>
</template>

<style lang="scss">
.go-to-top {
    width: 50px;
    height: 50px;

    position: fixed;
    bottom: 20px;
    right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: white;
    color: #6E34BB;
    border: 1px solid #6E34BB;

    transition: 0.3s all ease;

    cursor: pointer;

    i {
        font-size: 20px;
        color: #6E34BB;
    }

    &:hover {
        background-color: #6E34BB;

        i {
            color: white;
        }
    }
}
</style>