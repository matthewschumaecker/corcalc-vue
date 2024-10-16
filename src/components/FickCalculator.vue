<template>
  <div>
    <h2><u>Cardiac Output by Fick Equation</u></h2>

    <form id="fick-form" onsubmit="return false;">
      <div class="form-group">
        <label for="hemoglobin">Hemoglobin (g/dL):</label>
        <input
          type="number"
          class="form-control form-control-lg"
          v-model="hemoglobin"
          step="0.1"
          size="8"
        />
      </div>

      <div class="form-group">
        <label for="arterial-saturation">Arterial O2 Saturation (%):</label>
        <input
          type="number"
          class="form-control form-control-lg"
          v-model="arterialOxygenContent"
          step="1"
          min="0"
          max="100"
          placeholder="100"
        />
      </div>

      <div class="form-group">
        <label for="venous-saturation">Venous O2 Saturation (%):</label>
        <input
          type="number"
          class="form-control form-control-lg"
          v-model="venousOxygenContent"
          step="1"
          min="0"
          max="default: 100"
          required
        />
      </div>

      <div class="form-group">
        <label for="vo2">VO2 (mL/min):</label>
        <input
          type="number"
          v-model="vo2"
          class="form-control form-control-lg"
          placeholder="Default: 125 * BSA"
        />
        <button id="vo2Button" @click="computeVO2">125 x BSA</button>
      </div>

      <div class="form-group">
        <label for="bsa">Body Surface Area (m²):</label>
        <input
          type="number"
          v-model="bsa"
          class="form-control form-control-lg"
          step="0.1"
          placeholder="Default: 2"
        />
      </div>
    </form>
    <br />
    <div class="result">
      <h4>Result:</h4>
      <br />
      <p>Cardiac Output: {{ cardiacOutput }} L/min</p>
      <p>Cardiac Index: {{ cardiacIndex }}L/min/m²</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  name: 'FickCalculator',
  setup() {
    const hemoglobin = ref(15);
    const arterialOxygenContent = ref(100);
    const venousOxygenContent = ref(75);
    const vo2 = ref(250);
    const bsa = ref(2);

    //watcher to make VO2 dependent on BSA

    const cardiacOutput = computed(() =>
      (
        vo2.value /
        (hemoglobin.value *
          13.4 *
          (arterialOxygenContent.value / 100 - venousOxygenContent.value / 100))
      ).toFixed(1)
    );

    const cardiacIndex = computed(() =>
      bsa.value ? (cardiacOutput.value / bsa.value).toFixed(1) : '----'
    );

    const computeVO2 = () => {
      vo2.value = 125 * bsa.value;
    };

    return {
      hemoglobin,
      arterialOxygenContent,
      venousOxygenContent,
      vo2,
      bsa,
      cardiacOutput,
      cardiacIndex,
      computeVO2
    };
  }
};
</script>

<style scoped>
#vo2Button {
  margin-top: 8px;
  margin-left: 5px;
  border-radius: 8px;
  color: rgb(89, 86, 86);
}
</style>
