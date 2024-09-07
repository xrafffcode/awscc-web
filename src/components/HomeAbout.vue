<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const paragraphs = ref([
    `AWS Cloud Community (AWSCC) is a global community dedicated to AWS users. We focus on learning, developing, and collaborating through a variety of events, training, and in-depth discussions.`,
    `AWSCC has grown into a dynamic and inclusive community since its inception, with members from diverse backgrounds and skill levels. We believe the power of cloud computing lies in collaboration and shared learning.`,
    `Whether you're a beginner or an expert in AWS, AWSCC provides a space for you to learn and share knowledge in a supportive and collaborative environment.`
])

const paragraphStyles = ref([])
const observer = ref(null)

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            paragraphs.value.forEach((_, index) => {
                const animationDelay = `${index * 1.5}s`
                paragraphStyles.value.push({
                    animationDelay: animationDelay,
                    animationDuration: '1.5s',
                    animationFillMode: 'forwards',
                    animationTimingFunction: 'ease-in-out'
                })
            })
        } else {
            paragraphStyles.value = []
        }
    }, { root: null, rootMargin: '0px', threshold: 1.0 })

    observer.value.observe(document.getElementById('about'))
})

onUnmounted(() => {
    observer.value.disconnect()
})
</script>

<template>
    <section class="about-us py-5" id="about">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h6 class="about-us-title">ABOUT US</h6>
                    <h1 class="about-us-heading">What is AWS Cloud <br> Community (AWSCC)?</h1>
                    <img src="@/assets/images/logo.png" alt="about-us" class="img-fluid about-us-logo">
                </div>

                <div class="col-12 col-md-6 mt-5 mt-md-0 mt-lg-0">
                    <div v-for="(paragraph, index) in paragraphs" :key="index">
                        <p class="about-us-description" :style="paragraphStyles[index]">
                            {{ paragraph }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@keyframes color-change {
    0% {
        color: rgba(124, 122, 133, 1);
    }

    100% {
        color: black;
    }
}

.about-us-description {
    color: rgba(124, 122, 133, 1);
    animation-name: color-change;
}
</style>
