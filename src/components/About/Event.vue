<script setup>
import { ref } from 'vue'

import 'swiper/css'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Pagination]

const event = ref([
    {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: 'AUGUST 4, 2024',
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/2.jpeg', import.meta.url).href,
        date: 'AUGUST 4, 2024',
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: 'AUGUST 4, 2024',
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
])


</script>

<template>
    <section class="event py-5" id="event">
        <div class="container">
            <h3 class="title text-center">LATEST EVENT</h3>
            <h1 class="heading text-center">Take a Look Back at <br> AWSCC Moments</h1>
            <p class="description text-center">See the various events we've organized to benefit our community</p>

            <div class="row justify-content-center p-5 d-none d-md-flex d-lg-flex">
                <div class="col-12 col-md-4" v-for="(item, index) in event" :key="index">
                    <div class="event-card">
                        <div class="event-card-image">
                            <img :src="item.image" alt="event-image" class="img-fluid">
                        </div>

                        <div class="event-card-body">
                            <h3 class="event-card-date">{{ item.date }}</h3>
                            <h3 class="event-card-title">{{ item.title }}</h3>
                            <p class="event-card-description">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex d-md-none d-lg-none">
            <swiper :grabCursor="true" :modules="modules" class="mySwiper" :spaceBetween="10" :slidesPerView="1.2">
                <swiper-slide v-for="(item, index) in event" :key="index">
                    <div class="event-card">
                        <div class="event-card-image">
                            <img :src="item.image" alt="event-image" class="img-fluid">
                        </div>

                        <div class="event-card-body">
                            <h3 class="event-card-date">{{ item.date }}</h3>
                            <h3 class="event-card-title">{{ item.title }}</h3>
                            <p class="event-card-description">{{ item.description }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="d-flex justify-content-center">
            <a href="#" class="btn btn-outline-secondary py-2 rounded">See More Events</a>
        </div>
    </section>
</template>
