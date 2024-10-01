<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { DateTime } from 'luxon';

const currentTab = ref('upcoming')
const introduceBadge = ref('34 Event have been completed')
const title = ref('Explore, Learn, and <br> Connect at AWSCC Events')
const description = ref('Stay informed about upcoming workshops, summits, and networking <br> opportunities that drive the future of technology.')

const events = ref([
    {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: new Date('October 4, 2024 00:00:00'),
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/2.jpeg', import.meta.url).href,
        date: new Date('December 4, 2024 00:00:00'),
        title: 'December 2024 Meetup',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: new Date('October 4, 2024 00:00:00'),
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/2.jpeg', import.meta.url).href,
        date: new Date('December 4, 2024 00:00:00'),
        title: 'December 2024 Meetup',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    }, {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: new Date('October 4, 2024 00:00:00'),
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/2.jpeg', import.meta.url).href,
        date: new Date('December 4, 2024 00:00:00'),
        title: 'December 2024 Meetup',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    }, {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: new Date('October 4, 2024 00:00:00'),
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/2.jpeg', import.meta.url).href,
        date: new Date('December 4, 2024 00:00:00'),
        title: 'December 2024 Meetup',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    }, {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: new Date('October 4, 2024 00:00:00'),
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/2.jpeg', import.meta.url).href,
        date: new Date('December 4, 2024 00:00:00'),
        title: 'December 2024 Meetup',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/1.jpeg', import.meta.url).href,
        date: new Date('October 4, 2024 00:00:00'),
        title: 'AWSCC Summit 2024',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
    {
        image: new URL('@/assets/images/event/2.jpeg', import.meta.url).href,
        date: new Date('December 4, 2024 00:00:00'),
        title: 'December 2024 Meetup',
        description: 'Online training sessions covering various AWS topics, from basics to advanced levels, delivered by industry experts.'
    },
])

const switchTab = (tab) => {
    currentTab.value = tab;
}


const calculateCountdown = (eventDate) => {
    const now = new Date().getTime();
    const distance = eventDate - now;

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
                <div class="introduce-badge mb-4">{{ introduceBadge }}</div>
                <h1 class="hero-title" v-html="title"></h1>
                <p class="hero-description" v-html="description"></p>

                <nav class="mt-5">
                    <div class="nav shadow-sm">
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
                            <img :src="item.image" alt="event-image" class="img-fluid">
                        </div>

                        <div class="event-card-body">
                            <h3 class="event-card-date mb-2">
                                {{ DateTime.fromJSDate(item.date).toFormat('dd LLL yyyy') }}
                            </h3>
                            <h3 class="event-card-title">{{ item.title }}</h3>
                            <p class="event-card-description">{{ item.description }}</p>

                            <hr>

                            <div class="d-flex justify-content-between align-items-center">
                                <h1 class="event-card-countdown">{{ item.countdown }}</h1>
                                <a href="#" class="btn btn-outline-secondary">Register</a>
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
                            <img :src="item.image" alt="event-image" class="img-fluid">
                        </div>

                        <div class="event-card-body">
                            <h3 class="event-card-date mb-2">
                                {{ DateTime.fromJSDate(item.date).toFormat('dd LLL yyyy') }}
                            </h3>
                            <h3 class="event-card-title">{{ item.title }}</h3>
                            <p class="event-card-description">{{ item.description }}</p>

                            <hr>

                            <div class="d-flex justify-content-between align-items-center">
                                <h1 class="event-card-countdown">{{ item.countdown }}</h1>
                                <a href="#" class="btn btn-outline-secondary">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.nav {
    display: flex;
    margin-bottom: 1rem;
    gap: .5rem;
    border: 1px solid #0000000b;
    padding: 4px;
    border-radius: 14px !important;
}

.nav-link {
    background: transparent;
    border: none;
    color: #64616B;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 12px;
}

.nav-link:hover {
    color: #101010;
}

.nav-link.active {
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
