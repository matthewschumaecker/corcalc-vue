<template>
  <!-- //ORIGINAL FLASK CODE - NEEDS REVISION -->

  <h2>Echo Estimate PA Pressure</h2>
  <br /><br />

  <form id="paPressureForm">
    <div class="form-group">
      <label class="form-label" for="trMax">TR Max (m/s):</label>
      <input
        type="number"
        class="form-control form-control-lg"
        id="trMax"
        step="any"
        required
      />
    </div>
    <br />
    <div class="form-group">
      <label class="form-label" for="cvc">Estimated CVP (mmHg):</label>
      <input
        type="number"
        class="form-control form-control-lg"
        id="cvc"
        step="any"
      />
    </div>
    <br />
    <div class="form-group">
      <label class="form-label" for="ivcDilation">IVC Dilation:</label>
      <select id="ivcDilation" class="form-control form-control-lg">
        <option value="normal">Normal</option>
        <option value="dilated">Dilated</option>
      </select>
    </div>
    <br />
    <div class="form-group">
      <label class="form-label" for="ivcCollapse">IVC Collapse:</label>
      <select id="ivcCollapse" class="form-control form-control-lg">
        <option value="complete">Complete</option>
        <option value="partial">Partial</option>
        <option value="none">None</option>
      </select>
    </div>
    <br />
  </form>

  <div>
    <h3>Results:</h3>
    <p>Estimated PA Pressure: <span id="paPressure">--</span> mmHg</p>
  </div>
</template>

<script></script>

<style>
.form-control-lg {
  width: 150px;
}
</style>
