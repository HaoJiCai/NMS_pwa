import { createRouter, createWebHashHistory } from 'vue-router';
import FrontEnd from '../views/FrontEnd.vue';

const routes = [
  {
    path: '/',
    redirect: '/frontEnd/homePage',
  },
  {
    path: '/frontEnd',
    name: 'FrontEnd',
    component: FrontEnd,
    children: [
      {
        path: 'homePage',
        name: 'HomePage',
        component: () => import('../views/client/HomePage.vue'),
      },
      {
        path: 'patientRecordSearchPage',
        name: 'PatientRecordSearchPage',
        component: () => import('../views/client/PatientRecordSearchPage.vue'),
      },
      {
        path: 'nutritionalCarePage',
        name: 'NutritionalCarePage',
        component: () => import('../views/client/NutritionalCarePage.vue'),
        children: [ // 添加子路由配置
          {
            path: 'assessmentDiagnosis', // 子路由1
            name: 'AssessmentDiagnosis',
            component: () => import('../views/client/nutritionalCarePage/AssessmentDiagnosis.vue'),
          },
          {
            path: 'interventionAssistance', // 子路由2
            name: 'InterventionAssistance',
            component: () => import('../views/client/nutritionalCarePage/InterventionAssistance.vue'),
          },
          {
            path: 'surveillanceEvaluation', // 子路由3
            name: 'SurveillanceEvaluation',
            component: () => import('../views/client/nutritionalCarePage/SurveillanceEvaluation.vue'),
          },
        ],
      },
      {
        path: 'healthEducationPage/:eduType',
        name: 'HealthEducationPage',
        component: () => import('../views/client/HealthEducationPage.vue'),
        props: true, // 啟用 props 傳遞路由参数
        default: '1', // 設定預設值為 1
        children: [
          {
            path: ':eduId',
            props: true,
            component: () => import('../components/HealthEducationDetail.vue'),
          },
        ],
      },
      {
        path: 'inpatientMealPage',
        name: 'InpatientMealPage',
        component: () => import('../views/client/InpatientMealPage.vue'),
        children: [
          {
            path: ':category_id',
            props: true,
            component: () => import('../components/RecipeDetail.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/userLogin',
    name: 'login',
    component: () => import('../views/UserLogin.vue'),
  },
  {
    path: '/userRegister',
    name: 'register',
    component: () => import('../views/UserRegister.vue'),
  },
  {
    path: '/userInfo',
    name: 'info',
    component: () => import('../views/UserInfo.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
