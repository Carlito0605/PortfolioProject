<script setup lang="ts">
import { ref } from "vue";
import TheHeader from "./TheHeader.vue";

const pageIsOpen = ref(false);
const pageIsOpen2 = ref(false);
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
        <div class="w-2/3 flex justify-end items-center">
          <img
            src="../assets/images/1726527217224.jpg"
            class="w-1/4 shadow-xl h-fit object-contain"
          />
          <img
            src="../assets/images/1726527217193.jpg"
            class="w-1/4 shadow-xl h-fit object-contain ml-4"
          />
          <img
            src="../assets/images/1726527217202.jpg"
            class="w-1/4 shadow-xl h-fit object-contain ml-4"
          />
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
            <div class="flex flex-wrap">
              <svg
                class="w-12 h-12 mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z"
                />
              </svg>
              <svg
                class="w-12 h-12 mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z"
                />
              </svg>
              <svg
                class="w-12 h-12 mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z"
                />
              </svg>
              <svg
                class="w-12 h-12 mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="w-12 h-12 mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z"
                />
              </svg>
              <svg
                class="w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
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
      <svg
        @click="pageIsOpen2 = !pageIsOpen2"
        class="w-12 h-12 cursor-pointer m-auto scroll-mt-10"
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

      <div v-if="pageIsOpen2" class="mt-10 p-10">
        <RouterLink
          to="/drawings"
          class="w-full shadow-xl hover:bg-[#ffb871] cursor-pointer p-10 flex flex-col items-center rounded"
        >
          <div>Wan't to see my drawings ?</div>
          <div class="w-full flex justify-center items-center mt-8">
            <img
              src="../assets/images/1726527217179.jpg"
              class="w-40 h-40 object-cover rounded"
            />
            <img
              src="../assets/images/1726527217179.jpg"
              class="w-40 h-40 mr-8 ml-8 object-cover rounded"
            />
            <img
              src="../assets/images/1726527217179.jpg"
              class="w-40 h-40 object-cover rounded"
            />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style></style>
