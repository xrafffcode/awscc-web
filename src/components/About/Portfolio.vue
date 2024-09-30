<script setup>
import { ref } from 'vue'
import { faker } from '@faker-js/faker'

const totalGalleries = 16
const galleriesPerSection = Math.ceil(totalGalleries / 2)

const galleries = ref(
    Array.from({ length: totalGalleries }, () => ({
        image: faker.image.urlPicsumPhotos()
    }))
)

const section1 = ref(galleries.value.slice(0, galleriesPerSection))
const section2 = ref(galleries.value.slice(galleriesPerSection))
</script>

<template>
    <section class="portfolio py-5">
        <div class="container">
            <h3 class="title text-center">PORTFOLIO</h3>
            <h1 class="heading text-center">Capturing the moment in the <br> following documentation</h1>
            <p class="description text-center">
                Various kinds of activities that we have carried out and we immortalized in this documentation.
            </p>
        </div>

        <div class="mastering-tools mt-5">
            <div class="tools-slideshow toRight">
                <div id="toolsRow1">
                    <div v-for="(gallery, index) in section1" :key="'section1-' + index" class="cardSlim h-100">
                        <img :src="gallery.image">
                    </div>
                </div>

                <div id="toolsRow1">
                    <div v-for="(gallery, index) in section1" :key="'section1-' + index" class="cardSlim h-100">
                        <img :src="gallery.image">
                    </div>
                </div>
            </div>

            <div class="tools-slideshow">
                <div id="toolsRow2">
                    <div v-for="(gallery, index) in section2" :key="'section2-' + index" class="cardSlim h-100">
                        <img :src="gallery.image">
                    </div>
                </div>

                <div id="toolsRow2">
                    <div v-for="(gallery, index) in section2" :key="'section2-' + index" class="cardSlim h-100">
                        <img :src="gallery.image">
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center mt-3">
            <a href="#" class="btn btn-outline-secondary py-2 rounded">See More Portfolio</a>
        </div>
    </section>
</template>

<style>
.portfolio .cardSlim {
    padding: 0px;
    border-radius: 12px;
}

.portfolio .cardSlim img {
    width: 400px;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
}


.mastering-tools::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 100%;
    background: none;
    z-index: 99;
}

.mastering-tools::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background: none;
    z-index: 99;
}
</style>