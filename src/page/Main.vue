<template>
  <span>
    <div class="dashboard-wrapper">
      <div class="dashboard-ecommerce">
        <div class="container-fluid dashboard-content">
          <btn-create></btn-create>
          <task-create></task-create>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import BtnCreate from '@/components/BtnCreate'
import TaskCreate from '@/components/TaskCreate'
export default {
    name:'Main',
    components: {
        BtnCreate,
        TaskCreate
    }
};
</script>

<style>
</style>