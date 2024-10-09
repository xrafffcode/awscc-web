<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGalleryStore } from '@/stores/gallery';

const galleryStore = useGalleryStore();
const { galleries } = storeToRefs(galleryStore);
const { fetchGalleries } = galleryStore;

fetchGalleries()

const title = ref('Events Successfully <br> Completed, Driving Impact <br> and Growth')
const description = ref('We’re proud to showcase our past events, each one successfully executed <br> with valuable insights and impactful outcomes.')
</script>

<template>
    <section class="hero py-5" id="hero">
        <img src="@/assets/images/bg-hero.png" alt="bg-hero" class="bg-hero">

        <div class="container position-relative">
            <div class="d-flex flex-column align-items-center">
                <h1 class="hero-title" v-html="title"></h1>
                <p class="hero-description" v-html="description"></p>
            </div>
        </div>
    </section>

    <section class="container">
        <div class="row">
            <template v-for="(gallery, index) in galleries">
                <div class="col-12 col-md-6 col-lg-4 mb-3" v-if="(Math.floor(index / 5) % 2 === 0 && index % 5 < 3)">
                    <div class="image-wrapper">
                        <img :src="gallery.image" alt="gallery-image" class="gallery-image">
                        <div class="image-title">
                            <h3>{{ gallery.title }}</h3>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6 mb-3" v-if="(Math.floor(index / 5) % 2 === 1 && index % 5 < 2)">
                    <div class="image-wrapper">
                        <img :src="gallery.image" alt="gallery-image" class="gallery-image">
                        <div class="image-title">
                            <h3>{{ gallery.title }}</h3>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>
