<template>
  <modal name="task-create" :width="500" :height="462">
    <div class="card-header">
      <div class="card-title">
        <h3>Adicionar nova dúvida</h3>
      </div>
      <div class="form-group">
        <label for="title" class="col-form-label">Title</label>
        <input type="text" class="form-control" />
        <div class="invalid-feedback"></div>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <div class="col-5">
        <label class="mr-sm-2" for="inlineFormCustomSelect">By:</label>
        <select class="custom-select" id="inlineFormCustomSelect">
          <option></option>
        </select>
      </div>
    </div>
    <div class="card-header" id="headingTen">
      <button class="btn btn-outline-primary btn-rounded">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Adicionar
      </button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "TaskCreate"
};
</script>

<style>
</style>