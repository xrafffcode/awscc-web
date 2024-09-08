<script setup>
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/effect-cards';

import { Pagination, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Pagination, EffectCards]

const activity = ref([
    {
        title: 'Webinar & Workshop',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.',
        image: new URL('@/assets/images/activity/workshop.jpeg', import.meta.url).href
    },
    {
        title: 'Hackathons & Challenges',
        description: 'Coding competitions challenging members to develop creative solutions using AWS, with exciting prizes.',
        image: new URL('@/assets/images/activity/workshop.jpeg', import.meta.url).href
    },
    {
        title: 'Networking Events',
        description: 'Networking events with industry experts, industry leaders, and other community members.',
        image: new URL('@/assets/images/activity/networking.jpeg', import.meta.url).href
    }
])
</script>

<template>
    <section class="activity py-5" id="activity">
        <div class="container">
            <h3 class="activity-title text-center">OUR ACTIVITY</h3>
            <h1 class="activity-heading text-center">What We Do at AWSCC</h1>
            <p class="activity-description text-center">AWSCC hosts a wide range of exciting activities designed to <br>
                empower
                and engage our community</p>

            <div class="row justify-content-center px-5 d-none d-md-flex d-lg-flex">
                <div class="col-12 col-md-6 col-lg-4" v-for="item in activity">
                    <div class="activity-card">
                        <div class="activity-card-image">
                            <img :src="item.image" alt="activity-image" class="img-fluid">
                        </div>

                        <div class="activity-card-body">
                            <h3 class="activity-card-title">{{ item.title }}</h3>
                            <p class="activity-card-description">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center px-5 d-flex d-md-none d-lg-none d-xl-none">
                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper" :centeredSlides="true"
                    :initialSlide="1">
                    <swiper-slide v-for="item in activity">
                        <div class="activity-card">
                            <div class="activity-card-image">
                                <img :src="item.image" alt="activity-image" class="img-fluid">
                            </div>

                            <div class="activity-card-body">
                                <h3 class="activity-card-title">{{ item.title }}</h3>
                                <p class="activity-card-description">{{ item.description }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

            </div>
        </div>
    </section>
</template>