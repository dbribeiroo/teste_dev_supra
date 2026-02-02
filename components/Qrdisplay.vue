<script setup lang="ts">
import { useQrcode } from '@/composables/useQrcode';

const { currentQrUrl, error, config } = useQrcode();

const downloadImage = async () => {
  if (!currentQrUrl.value) return;
  
  try {
    const response = await fetch(currentQrUrl.value);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qrcode-${Date.now()}.${config.value.format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (e) {
    alert('Erro ao fazer download.');
  }
};
</script>

<template>
  <div class="h-full p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center min-h-[300px]">
    
    <div v-if="error" class="text-red-600 mb-4 p-3 bg-red-100 rounded w-full">
      {{ error }}
    </div>

    <div v-if="currentQrUrl" class="space-y-4">
      <div class="border-4 border-gray-100 p-2 inline-block rounded-lg">
        <img :src="currentQrUrl" alt="QR Code Gerado" class="max-w-[200px] h-auto" />
      </div>
      
      <div>
        <button 
          @click="downloadImage" 
          class="text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center gap-2 mx-auto border border-indigo-200 px-4 py-2 rounded-full hover:bg-indigo-50 transition"
        >
          ⬇ Baixar Imagem
        </button>
      </div>
    </div>

    <div v-else-if="!error" class="text-gray-400 flex flex-col items-center">
      <span class="text-4xl mb-2">⬅️</span>
      <p>Configure e clique em "Gerar" para ver o resultado aqui.</p>
    </div>
  </div>
</template>