<script setup lang="ts">
import { useQrcode } from '@/composables/useQrcode';

const { config, generate, isLoading } = useQrcode();
const sizes = ['150x150', '300x300', '500x500'];
const formats = ['png', 'gif', 'jpeg', 'svg'];
</script>

<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-4">Configurar QR Code</h2>
    
    <div class="space-y-4">
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Conteúdo</label>
        <input 
          v-model="config.data"
          type="text" 
          placeholder="https://supranet.com.br"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Tamanho</label>
          <select v-model="config.size" class="mt-1 block w-full rounded-md border-gray-300 p-2 border">
            <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Formato</label>
          <select v-model="config.format" class="mt-1 block w-full rounded-md border-gray-300 p-2 border">
            <option v-for="fmt in formats" :key="fmt" :value="fmt">{{ fmt.toUpperCase() }}</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Cor (QR)</label>
          <div class="flex items-center mt-1">
            <input type="color" v-model="config.color" class="h-8 w-8 cursor-pointer border-none bg-transparent"/>
            <span class="ml-2 text-sm text-gray-500">{{ config.color }}</span>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Fundo</label>
          <div class="flex items-center mt-1">
            <input type="color" v-model="config.bgcolor" class="h-8 w-8 cursor-pointer border-none bg-transparent"/>
            <span class="ml-2 text-sm text-gray-500">{{ config.bgcolor }}</span>
          </div>
        </div>
      </div>

      <button 
        @click="generate"
        :disabled="isLoading || !config.data"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 transition"
      >
        {{ isLoading ? 'Gerando...' : 'Gerar QR Code' }}
      </button>

    </div>
  </div>
  </template>