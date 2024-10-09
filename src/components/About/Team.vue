<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useTeamStore } from '@/stores/team';

const teamStore = useTeamStore();
const { teams, total, loading, error, success } = storeToRefs(teamStore);
const { fetchTeams } = teamStore;

const section1 = ref([]);
const section2 = ref([]);
const section3 = ref([]);

const fetchAndSplitTeams = async () => {
    try {
        await fetchTeams();

        const membersPerSection = Math.ceil(total.value / 3);

        section1.value = teams.value.slice(0, membersPerSection);
        section2.value = teams.value.slice(membersPerSection, membersPerSection * 2);
        section3.value = teams.value.slice(membersPerSection * 2);
    } catch (err) {
        console.error('Error fetching teams:', err);
    }
};

onMounted(() => {
    fetchAndSplitTeams();
});
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
                                    <a :href="member.instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                    </a>
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
                                    <a :href="member.instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                    </a>
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
                                    <a :href="member.instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                    </a>
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
                                    <a :href="member.instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                    </a>
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
                                    <a :href="member.instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                    </a>
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
                                    <a :href="member.instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_instagram.svg" alt="instagram">
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/images/logo/ic_linkedin.svg" alt="linkedin">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>