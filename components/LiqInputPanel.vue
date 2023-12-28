import type { Style } from 'nuxt/dist/head/runtime/components';
<script setup>

const selectedLiq = ref();
const liquidaciones = ref([
  { name: "Mensual", value: "1" },
  { name: "Adicional", value: "5" },
  { name: "1er SAC", value: "2" },
  { name: "2do SAC", value: "3" },
]);
const date = ref();
const nroadi = ref(0);

const handleButton = ()=>{
  console.log(selectedLiq.value);
  console.log(date.value.toLocaleDateString() );
  console.log(nroadi.value);
}

</script>

<template>
  <div class="input-panel">
    <div class="input-label">
      <label for="tipoLiq" class=""> Tipo de liquidación </label>
      <Dropdown
        id="tipoLiq"
        v-model="selectedLiq"
        :options="liquidaciones"
        optionLabel="name"
        placeholder="Tipo de liquidación"
      />
    </div>
    <div class="input-label">
      <label for="nroAdi" class=""> Nro. Adicional </label>
      <InputNumber
        id="nroAdi"
        v-model="nroadi"
        inputId="minmax"
        showButtons
        :min="0"
        :max="3"
      />
    </div>
    <div class="input-label">
      <label for="periodo" class=""> Periodo </label>
      <Calendar
        id="periodo"
        v-model="date"
        view="month"
        dateFormat="mm/yy"
        :manualInput="false"
      />
    </div>
    <Button label="enviar" @click="handleButton" />
  </div>
</template>

<style scoped>
.input-panel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  padding: 0.5rem;
}

.input-label {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

Button {
  margin: 0.5rem;
}
</style>
