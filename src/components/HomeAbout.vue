<script setup>
import { ref } from 'vue'

const description = ref(`
    <p class="about-us-description">
        <strong>
            AWS Cloud Community (AWSCC) is a global community dedicated to AWS users. We focus on
            learning,
            developing,
            and collaborating through a variety of events, training, and in-depth discussions.
        </strong>
    </p>

    <p class="about-us-description">
        AWSCC has grown into a dynamic and inclusive community since its inception, with members from
        diverse
        backgrounds and skill levels. We believe the power of cloud computing lies in collaboration and
        shared
        learning.
    </p>

    <p class="about-us-description">
        Whether you're a beginner or an expert in AWS, AWSCC provides a space for you to learn and share
        knowledge
        in a supportive and collaborative environment.
    </p>
`)
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

                <div class="col-12 col-md-6 mt-5 mt-md-0 mt-lg-0" v-html="description"></div>
            </div>
        </div>
    </section>
</template>
