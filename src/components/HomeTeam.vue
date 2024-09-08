<script setup>
import { ref } from 'vue'
import { faker } from '@faker-js/faker'

const totalMembers = 52
const membersPerSection = Math.ceil(totalMembers / 3)

const teamMembers = ref(
    Array.from({ length: totalMembers }, (_, i) => ({
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        position: faker.name.jobTitle()
    }))
)

const section1 = ref(teamMembers.value.slice(0, membersPerSection))
const section2 = ref(teamMembers.value.slice(membersPerSection, membersPerSection * 2))
const section3 = ref(teamMembers.value.slice(membersPerSection * 2))
</script>

<template>
    <section class="team py-5">
        <div class="container">
            <h3 class="title text-center">OUR TEAM</h3>
            <h1 class="heading text-center">Meet the People Behind AWSCC</h1>
            <p class="description text-center">
                We believe that our strength lies in the diverse and talented <br>
                individuals who drive our vision forward.
            </p>

            <div class="mastering-tools mt-5">
                <div class="tools-slideshow toRight">
                    <div id="toolsRow1">
                        <div v-for="(member, index) in section1" :key="'section1-' + index" class="cardSlim h-100">
                            <div class="profile">
                                <h3 class="team-name">{{ member.name }}</h3>
                                <p class="team-position">{{ member.position }}</p>
                            </div>
                            <div class="d-flex">
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                </div>
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="toolsRow1">
                        <div v-for="(member, index) in section1" :key="'section1-' + index" class="cardSlim h-100">
                            <div class="profile">
                                <h3 class="team-name">{{ member.name }}</h3>
                                <p class="team-position">{{ member.position }}</p>
                            </div>
                            <div class="d-flex">
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                </div>
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tools-slideshow">
                    <div id="toolsRow2">
                        <div v-for="(member, index) in section2" :key="'section2-' + index" class="cardSlim h-100">
                            <div class="profile">
                                <h3 class="team-name">{{ member.name }}</h3>
                                <p class="team-position">{{ member.position }}</p>
                            </div>
                            <div class="d-flex">
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                </div>
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="toolsRow2">
                        <div v-for="(member, index) in section2" :key="'section2-' + index" class="cardSlim h-100">
                            <div class="profile">
                                <h3 class="team-name">{{ member.name }}</h3>
                                <p class="team-position">{{ member.position }}</p>
                            </div>
                            <div class="d-flex">
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                </div>
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tools-slideshow toRight">
                    <div id="toolsRow1">
                        <div v-for="(member, index) in section3" :key="'section3-' + index" class="cardSlim h-100">
                            <div class="profile">
                                <h3 class="team-name">{{ member.name }}</h3>
                                <p class="team-position">{{ member.position }}</p>
                            </div>
                            <div class="d-flex">
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                </div>
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="toolsRow1">
                        <div v-for="(member, index) in section3" :key="'section2-' + index" class="cardSlim h-100">
                            <div class="profile">
                                <h3 class="team-name">{{ member.name }}</h3>
                                <p class="team-position">{{ member.position }}</p>
                            </div>
                            <div class="d-flex">
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                </div>
                                <div class="social-icon">
                                    <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
