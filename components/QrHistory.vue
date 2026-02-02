<script setup lang="ts">
import { useQrcode } from '@/composables/useQrcode';

const { history, loadFromHistory } = useQrcode();
</script>

<template>
  <div v-if="history.length > 0" class="mt-8">
    <h3 class="text-lg font-semibold text-gray-800 mb-3">Histórico Recente</h3>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div 
        v-for="item in history" 
        :key="item.id"
        @click="loadFromHistory(item)"
        class="cursor-pointer group relative bg-white border rounded-lg p-3 hover:shadow-lg transition text-center hover:border-indigo-300"
      >
        <img :src="item.url" class="mx-auto w-12 h-12 object-contain mb-2 opacity-70 group-hover:opacity-100" />
        <p class="text-xs text-gray-500 truncate font-mono">{{ item.data }}</p>
      </div>
    </div>
  </div>
</template>