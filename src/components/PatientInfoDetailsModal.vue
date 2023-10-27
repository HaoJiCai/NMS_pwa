<template>
  <div id="patientInfoDetailsModal" ref="patientInfoDetailsModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ patientinfoDetail.modalTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-html="patientinfoDetail.modalContent"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      api: 'https://140.123.173.4/patient/healthConditions',
    };
  },
  methods: {
  },
  props: {
    patientinfoDetail: {
      default: {},
    },
  },
};
</script>

<style lang="scss">
.modal-content {
  .modal-header {
  }
  .modal-body {
    text-align: left;
  }
}
</style>
