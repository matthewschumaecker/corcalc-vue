<template>
  <div class="main-content">
    <h2><u>Mitral EROA by PISA</u></h2>
    <br /><br />

    <form id="PISAForm" class="calculator">
      <div class="form-group">
        <label for="mrRadius">MR Radius (cm):</label>
        <input
          id="mrRadius"
          class="form-control form-control-lg"
          type="number"
          v-model="MRradius"
          step="0.1"
        />
      </div>

      <div class="form-group">
        <label for="aliasingVelocity">Aliasing Velocity (cm/sec):</label>
        <input
          id="aliasingVelocity"
          class="form-control form-control-lg"
          type="number"
          v-model="aliasingVelocity"
          step="0.1"
        />
      </div>

      <div class="form-group">
        <label for="mrVmax">MR Vmax (m/sec):</label>
        <input
          id="mrVmax"
          class="form-control form-control-lg"
          type="number"
          v-model="mrVmax"
          step="0.1"
        />
      </div>

      <div class="form-group">
        <label for="mrVti">MR VTI (cm):</label>
        <input
          id="mrVti"
          class="form-control form-control-lg"
          type="number"
          v-model="mrVti"
          step="0.1"
        />
      </div>

      <div class="result">
        <h4>Results:</h4>
        <p>EROA: {{ result.EROA }} mm<sup>2</sup></p>
        <p>VFR: {{ result.VFR }} mL/sec</p>
        <p>RVol: {{ result.RVOL }} mL/beat</p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'PISACalculator',
  setup() {
    const MRradius = ref(null);
    const aliasingVelocity = ref(null);
    const mrVti = ref(null);
    const mrVmax = ref(null);

    const result = computed(() => {
      const r = Number(MRradius.value);
      const Va = Number(aliasingVelocity.value);
      const VTI = Number(mrVti.value);
      const Vmax = Number(mrVmax.value);

      if (r > 0 && Va > 0 && Vmax > 0) {
        const VFR = 2 * Math.PI * Math.pow(r, 2) * Va;
        const EROA = VFR / Vmax;

        if (VTI > 0) {
          const RVOL = EROA * VTI;
          return {
            VFR: VFR.toFixed(1),
            RVOL: RVOL.toFixed(1),
            EROA: EROA.toFixed(1)
          };
        } else {
          return {
            VFR: VFR.toFixed(1),
            RVOL: '--',
            EROA: EROA.toFixed(1)
          };
        }
      } else {
        return {
          VFR: '--',
          RVOL: '--',
          EROA: '--'
        };
      }
    });

    return {
      MRradius,
      aliasingVelocity,
      mrVti,
      mrVmax,
      result
    };
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
.result {
  margin-top: 2rem;
}
</style>
