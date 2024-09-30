<script setup>
import { ref, computed } from 'vue'
import { faker } from '@faker-js/faker'

const totalMembers = 52
const positions = ['Pembina', 'Curriculum and Development', 'Research and Development', 'Events and Operations', 'Partnerships and Relations', 'Creatives and Graphics']

const teamMembers = ref([])

positions.forEach(position => {
    for (let i = 0; i < 5; i++) {
        teamMembers.value.push({
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            position: position,
        })
    }
});

while (teamMembers.value.length < totalMembers) {
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    teamMembers.value.push({
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        position: randomPosition,
    });
}

const groupedMembers = computed(() => {
    return positions.reduce((acc, position) => {
        acc[position] = teamMembers.value.filter(member => member.position === position);
        return acc;
    }, {});
});

const limitedMembers = computed(() => {
    return positions.reduce((acc, position) => {
        acc[position] = groupedMembers.value[position].slice(0, 5);
        return acc;
    }, {});
});

</script>

<template>
    <section class="team py-5">
        <div class="container">
            <h3 class="title text-center">OUR TEAM</h3>
            <h1 class="heading text-center">Our team unites diverse divisions, working <br> collaboratively towards
                shared goals</h1>
            <p class="description text-center">
                We believe that our strength lies in the diverse and talented individuals who drive our vision forward.
            </p>

            <div class="row px-0 px-md-5 px-lg-5 mt-5">
                <div class="col-12 col-md-3 mb-3 mb-md-0 mb-lg-0">
                    <div class="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link text-start active" id="v-pills-pembina-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-pembina" type="button" role="tab" aria-controls="v-pills-pembina"
                            aria-selected="true">
                            Pembina
                        </button>
                        <button class="nav-link text-start" id="v-pills-curriculum-and-development-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-curriculum-and-development" type="button"
                            role="tab" aria-controls="v-pills-curriculum-and-development" aria-selected="false">
                            Curriculum and Development
                        </button>
                        <button class="nav-link text-start" id="v-pills-research-and-development-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-research-and-development" type="button"
                            role="tab" aria-controls="v-pills-research-and-development" aria-selected="false">
                            Research and Development
                        </button>
                        <button class="nav-link text-start" id="v-pills-events-and-operations-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-events-and-operations" type="button" role="tab"
                            aria-controls="v-pills-events-and-operations" aria-selected="false">
                            Events and Operations
                        </button>
                        <button class="nav-link text-start" id="v-pills-partnerships-and-relations-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-partnerships-and-relations" type="button"
                            role="tab" aria-controls="v-pills-partnerships-and-relations" aria-selected="false">
                            Partnerships and Relations
                        </button>
                        <button class="nav-link text-start" id="v-pills-creatives-and-graphics-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-creatives-and-graphics" type="button"
                            role="tab" aria-controls="v-pills-creatives-and-graphics" aria-selected="false">
                            Creatives and Graphics
                        </button>
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-pembina" role="tabpanel"
                            aria-labelledby="v-pills-pembina-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <h4 class="team-subtitle mb-2">Pembina</h4>
                                    <p class="text-muted">20 People</p>
                                </div>
                                <div class="col-12 col-md-4 col-lg-4 mb-4"
                                    v-for="(member, index) in limitedMembers['Pembina']" :key="index">
                                    <div class="cardSlim h-100">

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
                        <div class="tab-pane fade" id="v-pills-curriculum-and-development" role="tabpanel"
                            aria-labelledby="v-pills-curriculum-and-development-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <h4 class="team-subtitle mb-2">Curriculum and Development</h4>
                                    <p class="text-muted">20 People</p>
                                </div>
                                <div class="col-12 col-md-4 col-lg-4 mb-4"
                                    v-for="(member, index) in limitedMembers['Curriculum and Development']"
                                    :key="index">
                                    <div class="cardSlim h-100">
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
                        <div class="tab-pane fade" id="v-pills-research-and-development" role="tabpanel"
                            aria-labelledby="v-pills-research-and-development-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 col-md-4 col-lg-4 mb-4"
                                    v-for="(member, index) in limitedMembers['Research and Development']" :key="index">
                                    <div class="cardSlim h-100">

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
                        <div class="tab-pane fade" id="v-pills-events-and-operations" role="tabpanel"
                            aria-labelledby="v-pills-events-and-operations-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 col-md-4 col-lg-4 mb-4"
                                    v-for="(member, index) in limitedMembers['Events and Operations']" :key="index">
                                    <div class="cardSlim h-100">

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
                        <div class="tab-pane fade" id="v-pills-partnerships-and-relations" role="tabpanel"
                            aria-labelledby="v-pills-partnerships-and-relations-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 col-md-4 col-lg-4 mb-4"
                                    v-for="(member, index) in limitedMembers['Partnerships and Relations']"
                                    :key="index">
                                    <div class="cardSlim h-100">

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
                        <div class="tab-pane fade" id="v-pills-creatives-and-graphics" role="tabpanel"
                            aria-labelledby="v-pills-creatives-and-graphics-tab" tabindex="0">
                            <div class="row">
                                <div class="col-12 col-md-4 col-lg-4 mb-4"
                                    v-for="(member, index) in limitedMembers['Creatives and Graphics']" :key="index">
                                    <div class="cardSlim h-100">

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
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.team {
    background-color: #fff;
}

.cardSlim {
    border: 1px solid #01010112;
    justify-content: space-between;
}

.cardSlim:hover {
    cursor: pointer;
}

.cardSlim .profile .team-name {
    font-size: 14px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cardSlim:hover .profile .team-name {
    display: block;
    -webkit-line-clamp: unset;
}

.cardSlim .profile .team-position {
    font-size: 12px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cardSlim:hover .profile .team-position {
    display: block;
    -webkit-line-clamp: unset;
}


@media screen and (max-width: 600px) {
    .nav.nav-pills {
        display: flex;
        flex-direction: row !important;
        flex-wrap: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 0;
        gap: 10px;
    }

    .nav.nav-pills .nav-link {
        flex: 0 0 auto;
    }
}
</style>