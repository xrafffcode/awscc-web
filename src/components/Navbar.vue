<template>
    <nav class="navbar navbar-expand-lg py-3" id="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/images/logo.png" alt="logo" class="img-fluid">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Home</RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">About us</RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/events">Events</RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/gallery">Gallery</RouterLink>
                    </li>
                </ul>

                <a class="btn btn-primary py-2 rounded" href="#">Join our event</a>
            </div>
        </div>
    </nav>
</template>
