<script setup>
import { ref } from 'vue'

const introduceBadge = ref(`Introducing AWS Cloud Community (AWSCC) 🙌`)
const title = ref(`Your Gateway to AWS <br> <span class="gradient-primary">Knowledge</span> and <span class="gradient-primary">Networking</span>`)
const description = ref(`AWSCC is your hub for exploring the world of AWS through events, <br> knowledge sharing, and collaboration with industry professionals.`)
</script>

<template>
    <section class="hero py-5" id="hero">
        <img src="@/assets/images/bg-hero.png" alt="bg-hero" class="bg-hero">

        <div class="container position-relative ">
            <div class="d-flex flex-column align-items-center ">

                <div class="introduce-badge mb-4">
                    {{ introduceBadge }}
                </div>

                <h1 class="hero-title" v-html="title"></h1>

                <p class="hero-description" v-html="description"></p>

                <div class="d-flex mt-3">
                    <a class="btn btn-primary py-2 rounded" href="#">
                        View Upcoming Events
                    </a>

                    <a class="btn btn-outline-secondary ms-3 py-2 rounded" href="#">
                        Learn More
                    </a>
                </div>
            </div>


            <!-- <row
                class="d-flex justify-content-center gap-4 position-relative mt-5 d-none d-md-none d-lg-none d-xl-flex">

                <img src="@/assets/images/hero/image-1.jpeg" alt="hero-images" class="img-fluid hero-image-left">

                <div class="col-12 col-md-2 col-lg-2">
                    <img src="https://placehold.co/600x400" alt="hero-images" class="img-fluid hero-image">
                </div>

                <div class="col-12 col-md-2 col-lg-2">
                    <img src="https://placehold.co/600x400" alt="hero-images" class="img-fluid hero-image">
                </div>

                <img src="https://placehold.co/600x400" alt="hero-images" class="img-fluid hero-image-right">

            </row> -->
        </div>
    </section>
</template>