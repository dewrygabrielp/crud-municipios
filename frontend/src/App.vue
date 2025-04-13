<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Registro de Necesidades por Municipio</h1>

    <div class="mb-4">
      <label class="block mb-1 font-semibold">Provincia:</label>
      <select v-model="provinciaSeleccionada" @change="cargarMunicipios" class="w-full p-2 border rounded">
        <option disabled value="">Selecciona una provincia</option>
        <option v-for="prov in provincias" :key="prov.id" :value="prov.id">{{ prov.nombre }}</option>
      </select>
    </div>

    <div class="mb-4" v-if="municipios.length">
      <label class="block mb-1 font-semibold">Municipio:</label>
      <select v-model="municipioSeleccionado" class="w-full p-2 border rounded">
        <option disabled value="">Selecciona un municipio</option>
        <option v-for="mun in municipios" :key="mun.id" :value="mun.id">{{ mun.nombre }}</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block mb-1 font-semibold">Descripción:</label>
      <textarea v-model="descripcion" class="w-full p-2 border rounded" rows="3" />
    </div>

    <button @click="enviarPeticion" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Registrar</button>

    <hr class="my-6" />

    <h2 class="text-xl font-bold mb-2">Peticiones Registradas</h2>
    <ul v-if="peticiones.length" class="space-y-2">
      <li v-for="p in peticiones" :key="p.id" class="p-3 border rounded bg-gray-50">
        <p class="font-semibold">{{ p.municipio }}</p>
        <p>{{ p.descripcion }}</p>
        <button @click="eliminarPeticion(p.id)" class="text-red-500 text-sm mt-1">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      provincias: [],
      municipios: [],
      peticiones: [],
      provinciaSeleccionada: '',
      municipioSeleccionado: '',
      descripcion: ''
    };
  },
  async mounted() {
    await this.cargarProvincias();
    await this.cargarPeticiones();
  },
  methods: {
    async cargarProvincias() {
      const res = await axios.get('http://localhost:3000/api/provincias');
      this.provincias = res.data;
    },
    async cargarMunicipios() {
      this.municipios = [];
      this.municipioSeleccionado = '';
      if (!this.provinciaSeleccionada) return;
      const res = await axios.get(`http://localhost:3000/api/municipios?provincia_id=${this.provinciaSeleccionada}`);
      this.municipios = res.data;
    },
    async cargarPeticiones() {
      const res = await axios.get('http://localhost:3000/api/peticiones');
      this.peticiones = res.data;
    },
    async enviarPeticion() {
      if (!this.municipioSeleccionado || !this.descripcion) {
        alert("Completa todos los campos.");
        return;
      }
      await axios.post('http://localhost:3000/api/peticiones', {
        descripcion: this.descripcion,
        municipio_id: this.municipioSeleccionado
      });
      this.descripcion = '';
      await this.cargarPeticiones();
    },
    async eliminarPeticion(id) {
      await axios.delete(`http://localhost:3000/api/peticiones/${id}`);
      await this.cargarPeticiones();
    }
  }
};
</script>

<style>
/* Estilos personalizados si querés */
</style>
