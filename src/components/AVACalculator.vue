<template>
  <div class="calculator">
    <h2 class="calculator-title"><u>AVA/DI Calculator</u></h2>
    <br /><br />
    <div class="form-group">
      <label class="form-label" for="lvotVTI">LVOT VTI (cm):</label>
      <input
        class="form-control form-control-lg"
        type="number"
        id="lvotVTI"
        v-model="lvotVTI"
        step="0.01"
      />
    </div>
    <div class="form-group">
      <label for="lvotDiameter">LVOT Diameter (cm):</label>
      <input
        class="form-control form-control-lg"
        type="number"
        id="lvotDiameter"
        v-model="lvotDiameter"
        step="0.01"
      />
    </div>
    <div class="form-group">
      <label for="avVTI">AV VTI (cm):</label>
      <input
        class="form-control form-control-lg"
        type="number"
        id="avVTI"
        v-model="avVTI"
        step="0.01"
      />

      <div class="result">
        <h4>Results:</h4>
        <p>AVA: {{ result.ava }} L/min</p>
        <p>DI: {{ result.di }}L/min/m²</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'AVACalculator',
  setup() {
    const lvotVTI = ref('');
    const lvotDiameter = ref('');
    const avVTI = ref('');

    const result = computed(() => {
      const lvotVTINum = parseFloat(lvotVTI.value);
      const lvotDiameterNum = parseFloat(lvotDiameter.value);
      const avVTINum = parseFloat(avVTI.value);

      if (lvotVTINum && lvotDiameterNum && avVTINum && avVTINum !== 0) {
        const lvotArea = Math.PI * Math.pow(lvotDiameterNum / 2, 2);
        const ava = (lvotVTINum * lvotArea) / avVTINum;
        const di = lvotVTINum / avVTINum;
        return {
          ava: ava.toFixed(2),
          di: di.toFixed(2)
        };
      } else if (lvotVTINum && avVTINum && !lvotDiameterNum) {
        const di = lvotVTINum / avVTINum;
        return {
          ava: '----',
          di: di.toFixed(2)
        };
      } else {
        return {
          ava: '----',
          di: '----'
        };
      }
    });

    return {
      lvotVTI,
      lvotDiameter,
      avVTI,
      result
    };
  }
};
</script>

<style scoped></style>
