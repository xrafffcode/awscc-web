<script setup>
import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';

import 'swiper/css'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Pagination]

const eventStore = useEventStore()
const { events } = storeToRefs(eventStore)
const { fetchEvents } = eventStore

fetchEvents({ limit: 5 })
</script>

<template>
    <section class="event py-5" id="event">
        <div class="container">
            <h3 class="title text-center">LATEST EVENT</h3>
            <h1 class="heading text-center">Take a Look Back at <br> AWSCC Moments</h1>
            <p class="description text-center">See the various events we've organized to benefit our community</p>

            <div class="row justify-content-center p-5 d-none d-md-flex d-lg-flex">
                <div class="col-12 col-md-6 mb-5" :class="index >= 2 ? 'col-lg-4' : 'col-lg-6'"
                    v-for="(item, index) in events" :key="index">
                    <a :href="item.url" target="_blank" class="text-decoration-none text-dark">
                        <div class="event-card">
                            <div class="event-card-image">
                                <img :src="item.thumbnail" alt="event-image" class="img-fluid">
                            </div>

                            <div class="event-card-body">
                                <h3 class="event-card-date">{{ new Intl.DateTimeFormat('en-US', {
                                    day: '2-digit', month:
                                        'long', year: 'numeric'
                                }).format(new Date(item.date)) }}</h3>
                                <h3 class="event-card-title">{{ item.title }}</h3>
                                <p class="event-card-description" v-html="item.excerpt"></p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="d-flex d-md-none d-lg-none">
            <swiper :grabCursor="true" :modules="modules" class="mySwiper" :spaceBetween="10" :slidesPerView="1.2">
                <swiper-slide v-for="(item, index) in events" :key="index">
                    <a :href="item.url" target="_blank" class="text-decoration-none text-dark">
                        <div class="event-card p-3">
                            <div class="event-card-image">
                                <img :src="item.thumbnail" alt="event-image" class="img-fluid">
                            </div>

                            <div class="event-card-body">
                                <h3 class="event-card-date">{{ item.date }}</h3>
                                <h3 class="event-card-title">{{ item.title }}</h3>
                                <p class="event-card-description">{{ item.excerpt }}</p>
                            </div>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
        </div>

        <div class="d-flex justify-content-center">
            <RouterLink to="/events" class="btn btn-outline-secondary py-2 rounded">See More Events</RouterLink>
        </div>
    </section>
</template>