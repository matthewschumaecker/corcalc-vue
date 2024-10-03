<template>
  <!-- //ORIGINAL FLASK CODE - NEEDS REVISION -->

  <div class="container mt-4" id="paPressureSection">
    <h2>Echo Estimate PA Pressure</h2>
    <br />
    <div class="row mx-n2">
      <div class="col-md-4">
        <form id="paPressureForm">
          <div class="form-group">
            <label for="trMax">TR Max (m/s):</label>
            <input
              type="number"
              class="form-control form-control-lg"
              id="trMax"
              step="any"
              required
            />
          </div>
          <div class="form-group">
            <label for="cvc">Estimated CVP (mmHg):</label>
            <input
              type="number"
              class="form-control form-control-lg"
              id="cvc"
              step="any"
            />
          </div>
          <div class="form-group">
            <label for="ivcDilation">IVC Dilation:</label>
            <select id="ivcDilation" class="form-control form-control-lg">
              <option value="normal">Normal</option>
              <option value="dilated">Dilated</option>
            </select>
          </div>
          <div class="form-group">
            <label for="ivcCollapse">IVC Collapse:</label>
            <select id="ivcCollapse" class="form-control form-control-lg">
              <option value="complete">Complete</option>
              <option value="partial">Partial</option>
              <option value="none">None</option>
            </select>
          </div>
        </form>

        <div>
          <h3>Results:</h3>
          <p>Estimated PA Pressure: <span id="paPressure">--</span> mmHg</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
