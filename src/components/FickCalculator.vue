<template>
  <div>
    <h2>Cardiac Output</h2>
    <h4>Fick Equation</h4>
    <br />
    <form id="fick-form" onsubmit="return false;">
      <div class>
        <label for="hemoglobin">Hemoglobin (g/dL):</label>
        <input
          type="number"
          class="form-control form-control-lg w-50"
          v-model="hemoglobin"
          step="0.1"
          size="8"
        />
        <br />
      </div>
      <div>
        <label for="arterial-saturation">Arterial O2 Saturation (%):</label>
        <input
          type="number"
          class="form-control form-control-lg w-50"
          v-model="arterialOxygenContent"
          step="1"
          min="0"
          max="100"
          placeholder="100"
        />
      </div>
      <br />
      <div>
        <label for="venous-saturation"
          ><strong>Venous O2 Saturation (%):</strong></label
        >
        <input
          type="number"
          class="form-control form-control-lg w-50"
          v-model="venousOxygenContent"
          step="1"
          min="0"
          max="default: 100"
          required
        />
      </div>
      <br />
      <div>
        <label for="vo2">VO2 (mL/min):</label>
        <input
          type="number"
          v-model="vo2"
          class="form-control form-control-lg w-75"
          placeholder="Default: 125 * BSA"
        />
        <button @click="computeVO2">125 x BSA</button>
      </div>
      <br />
      <div class="form-group">
        <label for="bsa">Body Surface Area (m²):</label>
        <input
          type="number"
          v-model="bsa"
          class="form-control form-control-lg w-75"
          step="0.01"
          placeholder="Default: 2"
        />
        <br />
      </div>
    </form>
    <br /><br />
    <div id="result">
      <h3>Results:</h3>
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
.calculator {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.calculator h2 {
  text-align: center;
}
.calculator form {
  display: flex;
  flex-direction: column;
}
.calculator form div {
  margin-bottom: 1em;
}
.calculator form label {
  margin-bottom: 0.5em;
  font-weight: bold;
}
.calculator form input {
  padding: 0.5em;
  font-size: 1em;
}
.calculator button {
  padding: 0.5em;
  font-size: 1em;
  cursor: pointer;
}
.calculator h3 {
  text-align: center;
  margin-top: 1em;
}
.form-control-lg::placeholder {
  font-size: 0.8rem;
}
button {
  margin-top: 10px;
}
</style>
