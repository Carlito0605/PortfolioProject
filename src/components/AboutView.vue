<script setup lang="ts">
import { ref } from "vue";
import TheHeader from "./TheHeader.vue";

const pageIsOpen = ref(false);
</script>

<template>
  <div
    class="h-fit min-h-full text-primary w-full sm:w-full md:w-11/12 lg:w-11/12 m-auto rounded-xl shadow-2xl p-10 flex flex-col justify-between items-center"
  >
    <TheHeader type="about" />
    <img
      src="../assets/logos/svg/logo-no-background.svg"
      alt="logo"
      class="w-full mb-20 h-fit sm:w-full md:w-2/3 lg:w-1/2"
    />
    <div class="font-bold text-2xl">By Charles CRETOIS</div>
    <svg
      @click="pageIsOpen = !pageIsOpen"
      class="w-12 h-12 cursor-pointer"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m19 9-7 7-7-7"
      />
    </svg>

    <div v-if="pageIsOpen" class="w-full text-2xl">
      <div
        class="w-full flex justify-between p-16 items-center border-b-4 border-primary mb-4 mt-4 shadow-lg rounded"
      >
        <div class="font-bold text-6xl">Charles CRETOIS</div>
        <div class="w-2/3 flex justify-end">
          <img src="../assets/logos/png/logo-black.png" class="w-1/5" />
          <img src="../assets/logos/png/logo-white.png" class="w-1/5 ml-4" />
          <img src="../assets/logos/png/logo-black.png" class="w-1/5 ml-4" />
        </div>
      </div>
      <div
        class="w-full flex justify-between p-16 border-b-4 border-primary mb-4 mt-4 shadow-lg rounded"
      >
        <div class="w-1/3 text-4xl font-bold">About.</div>
        <div>
          Hey ! I'm a progammer student. I'm currently finishing my Master
          degree at ESGI Paris. My dream is to create my own video game and for
          that I'm doing a career change soon. I've never taken drawing classe
          but I've always tried to draw/write/code things from my futur games.
        </div>
      </div>
      <div class="w-full flex justify-between mt-8 mb-4">
        <div class="w-1/2 flex flex-col mr-4">
          <div
            class="p-4 border-b-4 border-primary mb-2 mt-2 shadow-lg rounded"
          >
            <div class="font-bold mb-4">Education.</div>
            <div class="text-xl">
              <div class="flex">
                <div class="mr-2">Master of Software Architecture</div>
                <div class="italic text-lg">- in progress</div>
              </div>
              <div>Bachelor of Software Architecture</div>
            </div>
          </div>
          <div
            class="p-4 border-b-4 border-primary mb-2 mt-2 shadow-lg rounded w-full"
          >
            <div class="mb-4 font-bold">Language.</div>
            <div class="w-1/2">
              <div class="flex items-center justify-between w-full">
                <div class="mr-2 text-xl">French</div>
                <div class="border-2 border-primary w-1/2 rounded h-4">
                  <div class="bg-secondary w-[100%] h-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-between w-full">
                <div class="mr-2 text-xl">English</div>
                <div class="border-2 border-primary w-1/2 rounded h-4">
                  <div class="bg-secondary w-[80%] h-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-between w-full">
                <div class="mr-2 text-xl">German</div>
                <div class="border-2 border-primary w-1/2 rounded h-4">
                  <div class="bg-secondary w-[20%] h-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-between w-full">
                <div class="mr-2 text-xl">Arabic</div>
                <div class="border-2 border-primary w-1/2 rounded h-4">
                  <div class="bg-secondary w-[5%] h-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="p-4 border-b-4 border-primary mb-2 mt-2 shadow-lg rounded"
          >
            <div class="font-bold mb-4">Personal skills.</div>
            <div class="text-xl">
              <div>serious</div>
              <div>creative</div>
              <div>team spirit</div>
              <div>curious</div>
              <div>filled with determination</div>
            </div>
          </div>
        </div>
        <div class="w-1/2 flex flex-col border-primary">
          <div
            class="p-4 border-b-4 border-primary mb-2 mt-2 shadow-lg rounded text-lg"
          >
            <div class="font-bold mb-4 text-2xl">Working Experience.</div>
            <div>"The Walking Nerds" (Intership) Fullstack Developper</div>
            <div>"iDNA" (Intership) Software and network project manager</div>
            <div>Smash Bros tournament organizer</div>
          </div>
          <div
            class="p-4 border-b-4 border-primary mb-2 mt-2 shadow-lg rounded"
          >
            <div class="font-bold mb-4">Technical skills.</div>
            <div>//TODO</div>
          </div>
          <div
            class="p-4 border-b-4 border-primary mb-2 mt-2 shadow-lg rounded"
          >
            <div class="w-full flex">
              <div class="mr-2">linkedin :</div>
              <a
                class="hover:underline"
                href="https://www.linkedin.com/in/charles-cretois-43882a17b/"
                target="_blank"
                >in/charles-cretois</a
              >
            </div>
            <div class="w-full flex">
              <div class="mr-2">github :</div>
              <a
                class="hover:underline"
                href="https://github.com/Carlito0605"
                target="_blank"
                >github.com/Carlito0605</a
              >
            </div>
            <div class="w-full flex">
              <div class="mr-2">mail :</div>
              <div>charlescretois@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
