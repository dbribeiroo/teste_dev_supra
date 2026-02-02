<script setup lang="ts">

</script>

<template>
<div class="min-h-screen bg-gray-100 py-10 px-4">
  <div class="max-w-4x1 mx-auto">

<header class="mb-8 text-center">
  <h1 class="text-3xl font-extrabold text-gray-900">QR Code Studio</h1>
  <p class="text-gray-600 mt-2"> Gerador profissional utilizando API goQR.me </p>
</header>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <QrForm />
  <Qrdisplay />

     <QrHistory />
     </div>
   </div>
  </div>
</template>

