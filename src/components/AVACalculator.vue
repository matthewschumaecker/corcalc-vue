<template>
  <div class="calculator">
    <h3 class="calculator-title">AVA/DI Calculator</h3>
    <br /><br />
    <div class="form-group">
      <label for="lvotVTI">LVOT VTI (cm):</label>
      <input type="number" id="lvotVTI" v-model="lvotVTI" step="0.01" />
    </div>
    <div class="form-group">
      <label for="lvotDiameter">LVOT Diameter (cm):</label>
      <input
        type="number"
        id="lvotDiameter"
        v-model="lvotDiameter"
        step="0.01"
      />
    </div>
    <div class="form-group">
      <label for="avVTI">AV VTI (cm):</label>
      <input type="number" id="avVTI" v-model="avVTI" step="0.01" />
    </div>
    <p class="result">AVA: {{ result.ava }} cm sq</p>
    <p class="result">DI: {{ result.di }}</p>
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

<style scoped>
.calculator {
  max-width: 300px;
  margin-top: 100px;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  flex: 1;
  margin-right: 10px;
  color: #666;
}

input {
  width: 80px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  text-align: right;
}

.result {
  margin-top: 20px;
  font-weight: bold;
  text-align: left;
  color: #4a4a4a;
}
</style>
