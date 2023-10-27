<template>
  <div class="container">
    <div class="recipe">
      <ul class="recipe-list">
        <li class="recipe-type">
          <router-link class="recipe-link" to="/frontEnd/inpatientMealPage/1">
            <span><p>早餐</p><i class="bi bi-plus"></i></span>
          </router-link>
        </li>
        <li class="recipe-type">
          <router-link class="recipe-link" to="/frontEnd/inpatientMealPage/2">
            <span><p>午餐</p><i class="bi bi-plus"></i></span>
          </router-link>
        </li>
        <li class="recipe-type">
          <router-link class="recipe-link" to="/frontEnd/inpatientMealPage/3">
            <span><p>晚餐</p><i class="bi bi-plus"></i></span>
          </router-link>
        </li>
        <li class="recipe-type">
          <router-link class="recipe-link" to="/frontEnd/inpatientMealPage/4">
            <span><p>其他</p><i class="bi bi-plus"></i></span>
          </router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.container {
  padding: 0;
  .recipe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .recipe-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      padding: 0;
      margin-bottom: 60px;
      @media screen and (max-width: 1024px) {
        margin-bottom: 40px;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 20px;
      }
      .recipe-type {
        width: 20%;
        border: 1px solid #695f5f;
        border-radius: 5px;
        @media screen and (max-width: 1024px) {
          width: 50%;
          border: 0;
          border-radius: 0;
          padding: 8px 12px;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 12px 10px;
        }
        .recipe-link {
          color: #ffffff;
          background-color: rgb(41, 10, 104);;
          display: block;
          text-decoration: none;
          padding: 8px 10px;
          &:hover {
            color: #ffffff; /* 鼠標懸停時的文字顏色 */
            background-color: rgba(48, 14, 118, 0.8); /* 鼠標懸停時的背景色 */
            transition: all 0.25s ease;
          }
          span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
              font-weight: 700;
              font-size: 30px;
              margin: 0;
            }
            i {
              font-weight: bold;
              font-size: 30px;
            }
          }
        }
      }
      li+li {
        margin-left: 24px;
        @media screen and (max-width: 1024px) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
