<template>
  <div id="recipeDelModal" ref="recipeDelModal" class="modal fade" tabindex="-1" aria-labelledby="recipeDelModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="recipeDelModalLabel" class="modal-title">
            <span>刪除{{infoDetail.category_name}}食譜</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">{{infoDetail.name}}</strong> 食譜(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="confirmDel">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { customizeSuccessMsg, customizeErrorMsg } from '../views/toastMessage';

export default {
  data() {
    return {
      fixApi: 'https://140.123.173.4',
    };
  },
  methods: {
    confirmDel() {
      this.$store.dispatch('startLoading');
      const api = `${this.fixApi}/recipe/${this.infoDetail.category_id}/${this.infoDetail.recipe_id}`;
      this.$http.delete(api).then((res) => {
        this.$emit('deleteRecipe');
        console.log(res.data);
        this.$store.dispatch('stopLoading');
        customizeSuccessMsg(res.data.msg);
      }).catch((err) => {
        console.log(err);
        customizeErrorMsg(err.response.data.msg);
      });
    },
  },
  props: {
    infoDetail: {
      default: {},
    },
  },
  emits: ['deleteRecipe'], // 聲明繼承的自定義事件
};
</script>

<style lang="scss">
  .btn-close {
    background-color: white;
  }
</style>
