<!--eslint-disable -->
<template>
  <div class="container-page-healthEducation">
    <div class="detail-title">
      <div class="title">
        <h5>標題：</h5>
      </div>
      <div class="content">
        <p>{{ data.title }}</p>
      </div>
    </div>
    <div class="detail-updateDate">
      <div class="title">
        <h5>張貼日期：</h5>
      </div>
      <div class="content">
        <p>{{ data.update_date }}</p>
      </div>
    </div>
    <div class="detail-content">
      <div class="title">
        <h5>內容：</h5>
      </div>
      <div class="content">
        <p>{{ data.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
      data: {},
    };
  },
  methods: {
    getHealthEducationDetail() {
      const api = `${this.fixApi}/healthEducation/${this.eduType}/${this.eduId}`;
      this.$http.get(api).then((res) => {
        [this.data] = res.data;
        console.log(this.data);
      }).catch((err) => {
        console.error(err);
      });
    },
  },
  props: {
    eduType: String, // 從路由的 :eduType 參數傳遞過來
    eduId: String, // 從路由的 :eduType 參數傳遞過來
  },
  created() {
    this.getHealthEducationDetail();
  },
};
</script>

<style lang="scss">
.container-page-healthEducation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 0.1px solid black;
  padding: 20px 30px;
  .detail-title {
    display: flex;
    align-items: flex-start;
  }
  .detail-updateDate {
    display: flex;
    align-items: flex-start;
  }
  .detail-content {
    display: flex;
    align-items: flex-start;
    .content {
      width: 90%;
      text-align: left;
    }
  }
  h5 {
    color: white;
    font-size: 16px;
    margin: 0;
  }
  p {
    font-size: 16px;
    margin: 0;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 8px;
    background-color: rgb(224, 91, 91);
    border-radius: 0.5rem;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 8px 20px;
  }
}
</style>
