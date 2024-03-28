<script setup>
import { ref } from 'vue'

const modal = ref(true)
const backdrop = ref(null)

const closeModal = (e) => {
  if (e.target === backdrop.value) { modal.value = false }
}

</script>

<template>
  <div v-if="modal" ref="backdrop" class="modal-backdrop" @click="closeModal">
    <div class="modal-body">
      <p> Have a good day !</p>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #00000096;
}

.modal-backdrop:hover{
    cursor: pointer;
}

.modal-body {
    background-color: white;
    width: 50%;
    height:fit-content;
    max-height: 80%;
    min-height:20%;
    border-radius: 8px;
    z-index: 99999;
    animation: popup 0.3s ease-out;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes popup {
    0% {
    transform: scale(0.7);
    opacity: 0;
    }
    100% {
    transform: scale(1);
    opacity: 1;
    }
}

@media screen and (max-width:710px) {
    .modal-body {
        width: 97%
    }
}
</style>
