<!--eslint-disable -->
<template>
  <div class="container-page">
    <div class="title">
      <h3>熱量計算</h3>
    </div>
    <div class="trialCalculation">
      <div class="trialCalculationInput">
        <div class="block-gender block">
          <label for="age">性別：</label>
          <input type="radio" name="gender" value="male" v-model="selectedGender">男
          <input type="radio" name="gender" value="female" v-model="selectedGender">女
        </div>
        <div class="block-age block">
          <label for="age">年龄（歲）：</label>
          <input type="number" id="age" class="input-width-auto" v-model="age">
        </div>
        <div class="block-height block">
          <label for="height">身高（cm）：</label>
          <input type="text" id="height" class="input-width-auto" v-model="height">
        </div>
        <div class="block-weight block">
          <label for="weight">目前體重（kg）：</label>
          <input type="text" id="weight" class="input-width-auto" v-model="weight" />
        </div>
        <div class="block-activityLevel block">
          <label for="activityLevel">個人活動量：</label>
          <select id="activityLevel" class="select-width-auto" v-model="selectedActivityLevel">
            <option value="low">輕度工作</option>
            <option value="medium">中度工作</option>
            <option value="high">重度工作</option>
          </select>
          <select id="activityLevelDetails" v-if="selectedActivityLevel" class="select-width-auto" v-model="selectedActivityLevelDetails">
            <option value="1.2" v-if="selectedActivityLevel === 'low'">久坐不動，幾乎不運動(1.2)</option>
            <option value="1.3" v-if="selectedActivityLevel === 'low'">輕度運動，每週1至3天(1.3)</option>
            <option value="1.55" v-if="selectedActivityLevel === 'medium'">每週3至5天適度運動(1.55)</option>
            <option value="1.725" v-if="selectedActivityLevel === 'high'">每週6至7天劇烈、高強度運動(1.725)</option>
            <option value="1.9" v-if="selectedActivityLevel === 'high'">從事高體力工作或劇烈運動每週6至7天(1.9)</option>
          </select>
        </div>
        <div class="block-trialCalculateBtn">
          <button class="btn btn-warning" @click="trialCalculate">試算</button>
          <button class="btn btn-outline-danger" @click="clearInput">清除</button>
        </div>
      </div>
      <div class="trialCalculationResult">
        <div class="result-title">
          <h4>試算結果</h4>
        </div>
        <div class="block">
          <label for="standardWeight">標準體重（kg）：</label>
          <input type="number" id="standardWeight" class="input-width-auto" v-model="standardWeight" disabled>
        </div>
        <div class="block">
          <label for="standardWeightRange">體重合理範圍（kg）：</label>
          <input type="text" id="standardWeightRange" class="input-width-auto" v-model="standardWeightRange" disabled>
        </div>
        <div class="block">
          <label for="standardWeightDistance">距離標準體重 [每日所需熱量]：</label>
          <input type="text" id="standardWeightDistance" class="input-width-auto" v-model="standardWeightDistance" disabled>
        </div>
        <p>基礎代謝率（BMR）是：<span>{{ BMR }}</span>（Cal）</p>
        <p>每日消耗熱量（TDEE）是：<span>{{ TDEE }}</span>（Cal）</p>
      </div>
    </div>
    <hr>
    <div class="nutritionCalculation">
      <div class="calculateInput">
        <div class="block">
          <label for="carbohydrates">碳水化合物：</label>
          <input type="number" id="carbohydrates" class="input-width-auto" v-model="carbohydrates"> / g
        </div>
        <div class="block">
          <label for="fat">脂肪：</label>
          <input type="number" id="fat" class="input-width-auto" v-model="fat"> / g
        </div>
        <div class="block">
          <label for="protein">蛋白質：</label>
          <input type="number" id="protein" class="input-width-auto" v-model="protein"> / g
        </div>
        <div class="block-calculateBtn">
          <button class="btn btn-warning" @click="calculateCalories">計算</button>
          <button class="btn btn-outline-danger" @click="clearInput2">重新輸入</button>
        </div>
      </div>
      <div class="calculateResult">
        <p>攝取的卡路里：<span>{{ calorie }}</span>｛Cal｝</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedGender: 'male',
      age: 0,
      height: 0,
      weight: 0,
      selectedActivityLevel: 'low',
      selectedActivityLevelDetails: '1.2',
      standardWeight: '',
      standardWeightRange: '',
      standardWeightDistance: '',
      BMR: '',
      TDEE: '',
      carbohydrates: 0,
      fat: 0,
      protein: 0,
      calorie: 0,
    };
  },
  methods: {
    trialCalculate() {
      let mixWeight;
      let maxWeight;
      if (this.selectedGender === 'male') {
        this.standardWeight = ((this.height - 80) * 0.7).toFixed(1); // 計算標準體重
        mixWeight = (this.standardWeight * 0.9).toFixed(1); // 計算體重合理範圍最小值
        maxWeight = (this.standardWeight * 1.1).toFixed(1); // 計算體重合理範圍最大值
        this.standardWeightRange = `${mixWeight} ~ ${maxWeight}`;
        this.decideWeight(mixWeight, maxWeight, this.standardWeight);
        this.BMR = ((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5).toFixed(0);
        this.TDEE = (this.BMR * this.selectedActivityLevelDetails).toFixed(0);
      } else {
        this.standardWeight = ((this.height - 70) * 0.6).toFixed(1);
        mixWeight = (this.standardWeight * 0.9).toFixed(1); // 計算體重合理範圍最小值
        maxWeight = (this.standardWeight * 1.1).toFixed(1); // 計算體重合理範圍最大值
        this.standardWeightRange = `${mixWeight} ~ ${maxWeight}`;
        this.decideWeight(mixWeight, maxWeight, this.standardWeight);
        this.BMR = ((10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161).toFixed(0);
        this.TDEE = (this.BMR * this.selectedActivityLevelDetails).toFixed(0);
      }
    },
    decideWeight(min, max, standard) {
      switch (this.selectedActivityLevel) {
        case 'low':
          if (standard < min) {
            this.standardWeightDistance = standard * 35;
          } else if (standard > max) {
            this.standardWeightDistance = standard * 25;
          } else {
            this.standardWeightDistance = standard * 30;
          }
          break;
        case 'medium':
          if (standard < min) {
            this.standardWeightDistance = standard * 40;
          } else if (standard > max) {
            this.standardWeightDistance = standard * 30;
          } else {
            this.standardWeightDistance = standard * 35;
          }
          break;
        case 'high':
          if (standard < min) {
            this.standardWeightDistance = standard * 35;
          } else if (standard > max) {
            this.standardWeightDistance = standard * 35;
          } else {
            this.standardWeightDistance = standard * 40;
          }
          break;
        default:
          this.standardWeightDistance = 0;
      }
    },
    clearInput() {
      this.selectedGender = 'male';
      this.age = 0;
      this.height = 0;
      this.weight = 0;
      this.selectedActivityLevel = 'low';
      this.selectedActivityLevelDetails = '1.2';
      this.standardWeight = '';
      this.standardWeightRange = '';
      this.BMR = '';
      this.TDEE = '';
    },
    calculateCalories() {
      this.calorie = (this.carbohydrates * 4 + this.protein * 4 + this.fat * 9).toFixed(0);
    },
    clearInput2() {
      this.carbohydrates = 0;
      this.protein = 0;
      this.fat = 0;
      this.calorie = 0;
    },
  },
  watch: {
    selectedActivityLevel(newValue) {
      if (newValue === 'medium') {
        this.selectedActivityLevelDetails = '1.55'; // 選擇中度工作，預設 selectedActivityLevelDetails = '1.55'
      } else if (newValue === 'high') {
        this.selectedActivityLevelDetails = '1.725'; // 選擇重度工作，預設 selectedActivityLevelDetails = '1.725'
      } else {
        this.selectedActivityLevelDetails = '1.2'; // 否則預設值都為 '1.2'
      }
    },
  },
};
</script>

<style lang="scss">
  .container-page {
    width: 86%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 50px;
    }
    .title {
      padding: 5px;
      margin-bottom: 16px;
      background-color: rgb(235, 157, 89);
      h3 {
        color: whitesmoke;
        font-size: 30px;
      }
    }
    .trialCalculation {
      display: flex;
      justify-content: space-around;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }
      input{
          outline-style: none;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 18px;
          padding: 6px 6px;
        }
      .block {
        margin-bottom: 20px;
      }
      .input-width-auto {
        width: 100%;
        padding: 10px 0;
      }
      .select-width-auto {
        padding: 10px 0;
        @media screen and (max-width: 1024px) {
          width: 100%;
        }
      }
      .trialCalculationInput {
        text-align: left;
        .block-trialCalculateBtn {
          @media screen and (max-width: 1024px) {
            margin-bottom: 36px;
          }
          button {
            margin-right: 8px;
          }
        }
      }
      .trialCalculationResult {
        text-align: left;
        background-color: rgba(133, 134, 74, 0.2);
        padding: 15px;
        .result-title {
          color: rgb(0, 0, 0);
          margin-bottom: 24px;
          h4 {
            padding: 0 0 6px 0;
            border-bottom: 2px solid rgb(26, 26, 92);
          }
        }
        p {
          font-size: 20px;
          font-weight: bold;
          @media screen and (max-width: 1024px) {
            font-size: 18px;
          }
          @media screen and (max-width: 768px) {
            font-size: 16px;
          }
          span {
            font-size: 22px;
            font-weight: bolder;
            color: orangered;
            @media screen and (max-width: 1024px) {
            font-size: 18px;
            }
            @media screen and (max-width: 768px) {
              font-size: 16px;
            }
          }
        }
      }
    }
    .nutritionCalculation {
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin-bottom: 25px;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 20px;
      }
      input{
        outline-style: none;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 18px;
        padding: 6px 6px;
      }
      .calculateInput {
        text-align: left;
        .block {
          margin-bottom: 20px;
        }
        .input-width-auto {
          width: 100%;
          padding: 10px 0;
        }
        .block-calculateBtn {
          @media screen and (max-width: 1024px) {
            margin-bottom: 36px;
          }
          button {
            margin-right: 8px;
          }
        }
      }
      .calculateResult {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 12%;
        border: 0.5px solid rgb(250, 135, 135);
        @media screen and (max-width: 1024px) {
          padding: 20px 20px;
          border: 1px solid rgb(250, 135, 135);
        }
        p {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
          @media screen and (max-width: 1024px) {
            font-size: 18px;
          }
          @media screen and (max-width: 768px) {
            font-size: 16px;
          }
          span {
            font-size: 22px;
            font-weight: bolder;
            color: rgb(123, 56, 186);
            @media screen and (max-width: 1024px) {
            font-size: 18px;
            }
            @media screen and (max-width: 768px) {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
