<script setup>
import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentTab = ref('upcoming')
const title = ref('Explore, Learn, and <br> Connect at AWSCC Events')
const description = ref('Stay informed about upcoming workshops, summits, and networking <br> opportunities that drive the future of technology.')

const eventStore = useEventStore();
const { events } = storeToRefs(eventStore);
const { fetchEvents } = eventStore;

fetchEvents({ status: 'published' })

const switchTab = (tab) => {
    currentTab.value = tab;

    if (currentTab.value === 'upcoming') {
        fetchEvents({ status: 'published' });
    } else if (currentTab.value === 'past') {
        fetchEvents({ status: 'archived' });
    }
}

const calculateCountdown = (eventDate) => {
    const eventDateObj = new Date(eventDate);
    const now = new Date().getTime();
    const distance = eventDateObj.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
};

onMounted(() => {
    const interval = setInterval(() => {
        events.value.forEach((event) => {
            event.countdown = calculateCountdown(event.date);
        });
    }, 1000);

    onBeforeUnmount(() => {
        clearInterval(interval);
    });
});
</script>

<template>
    <section class="hero py-5" id="hero">
        <img src="@/assets/images/bg-hero.png" alt="bg-hero" class="bg-hero">

        <div class="container position-relative">
            <div class="d-flex flex-column align-items-center">
                <div class="introduce-badge mb-4">{{ events.filter(event => event.status === 'archived').length }} Event
                    have been completed</div>
                <h1 class="hero-title" v-html="title"></h1>
                <p class="hero-description" v-html="description"></p>

                <nav class="mt-5">
                    <div class="nav nav-event shadow-sm">
                        <button class="nav-link" :class="{ active: currentTab === 'upcoming' }"
                            @click="switchTab('upcoming')">Upcoming Event</button>
                        <button class="nav-link" :class="{ active: currentTab === 'past' }"
                            @click="switchTab('past')">Past Event</button>
                    </div>
                </nav>
            </div>
        </div>
    </section>

    <section class="event container">
        <div v-if="currentTab === 'upcoming'" class="tab-content">
            <div class="row">
                <div class="col-12 mb-3">
                    <p>{{ events.length }} Upcoming Events</p>
                </div>

                <div class="col-12 col-md-4 mb-5" v-for="(item, index) in events" :key="index">
                    <div class="event-card">
                        <div class="event-card-image position-relative">
                            <div class="badge-upcoming">🔥 Upcoming</div>
                            <img :src="item.thumbnail" alt="event-image" class="img-fluid">
                        </div>

                        <div class="event-card-body">
                            <h3 class="event-card-date mb-2">
                                {{ new Intl.DateTimeFormat('en-US', {
                                    day: '2-digit', month:
                                        'long', year: 'numeric'
                                }).format(new Date(item.date)) }}
                            </h3>
                            <h3 class="event-card-title">{{ item.title }}</h3>
                            <p class="event-card-description" v-html="item.excerpt"></p>

                            <hr>

                            <div class="d-flex justify-content-between align-items-center">
                                <h1 class="event-card-countdown">{{ item.countdown }}</h1>
                                <a :href="item.url" class="btn btn-outline-secondary" target="_blank">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="currentTab === 'past'" class="tab-content">
            <div class="row">
                <div class="col-12 mb-3">
                    <p>{{ events.length }} Past Events</p>
                </div>

                <div class="col-12 col-md-4 mb-5" v-for="(item, index) in events" :key="index">
                    <div class="event-card">
                        <div class="event-card-image position-relative">
                            <div class="badge-past">✅ Done</div>
                            <img :src="item.thumbnail" alt="event-image" class="img-fluid">
                        </div>

                        <div class="event-card-body">
                            <h3 class="event-card-date mb-2">
                                {{ new Intl.DateTimeFormat('en-US', {
                                    day: '2-digit', month:
                                        'long', year: 'numeric'
                                }).format(new Date(item.date)) }}
                            </h3>
                            <h3 class="event-card-title">{{ item.title }}</h3>
                            <p class="event-card-description" v-html="item.excerpt"></p>

                            <hr>

                            <div class="d-flex justify-content-between align-items-center">
                                <h1 class="event-card-countdown">{{ item.countdown }}</h1>
                                <a :href="item.url" class="btn btn-outline-secondary" target="_blank">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.nav.nav-event {
    display: flex;
    margin-bottom: 1rem;
    gap: .5rem;
    border: 1px solid #0000000b;
    padding: 4px;
    border-radius: 14px !important;
}

.nav-event .nav-link {
    background: transparent;
    border: none;
    color: #64616B;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 12px;
}

.nav-event .nav-link:hover {
    color: #101010;
}

.nav-event .nav-link.active {
    background-color: #101010;
    color: #fff;
}

.event-card {
    padding: 0px;
}

.event-card-image {
    height: 240px;
}

.event-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.event-card .event-card-body hr {
    color: #00000044;
}

.event-card .event-card-body .event-card-countdown {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #101010;
}
</style>
