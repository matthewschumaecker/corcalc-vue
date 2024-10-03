<template>
  <div class="container mt-4" id="PISASection">
    <h2>MITRAL EROA by PISA</h2>
    <br />

    <form id="PISAForm" class="form">
      <div>
        <label>MR Radius (mm):</label>
        <input
          type="number"
          class="form-control form-control-lg w-25"
          v-model="MRradius"
          step="1"
        />
      </div>
      <br />
      <div>
        <label>Aliasing Velocity (cm/s):</label>
        <input
          type="number"
          class="form-control form-control-lg w-25"
          v-model="aliasingVelocity"
          step="any"
        />
      </div>
      <br />
      <div class="form-group">
        <label>MR VTI (cm):</label>
        <input
          type="number"
          class="form-control form-control-lg w-25"
          v-model="mrVti"
          step="any"
        />
      </div>
      <br />
      <div>
        <h3>Results:</h3>
        <p>
          EROA: <span id="eroaResult">{{ EROA }}</span> mm<sup>2</sup>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'PISACalculator',
  setup() {
    // Reactive inputs
    const MRradius = ref(null); // MR radius in mm
    const aliasingVelocity = ref(null); // Aliasing velocity in cm/s
    const mrVti = ref(null); // MR VTI in cm

    // Computed EROA
    const EROA = computed(() => {
      if (MRradius.value && aliasingVelocity.value && mrVti.value) {
        // Use the PISA formula: EROA = (2 * π * radius^2 * aliasingVelocity) / mrVti
        const radiusInCm = MRradius.value / 10; // Convert radius from mm to cm
        const pisaFlow =
          2 * Math.PI * Math.pow(radiusInCm, 2) * aliasingVelocity.value; // Flow in mL/s
        const eroa = pisaFlow / mrVti.value; // EROA in cm²
        return (eroa * 100).toFixed(2); // Convert to mm²
      }
      return '--';
    });

    return {
      MRradius,
      aliasingVelocity,
      mrVti,
      EROA
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
.form-control-lg {
  font-size: 1.25rem;
}
</style>
