import { createRouter, createWebHashHistory } from 'vue-router';
import FrontEnd from '../views/FrontEnd.vue';

const routes = [
  {
    path: '/',
    redirect: '/userLogin',
  },
  {
    path: '/frontEnd',
    name: 'FrontEnd',
    component: FrontEnd,
    children: [
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
        path: 'healthEducationPage',
        name: 'HealthEducationPage',
        component: () => import('../views/client/HealthEducationPage.vue'),
      },
      {
        path: 'inpatientMealPage',
        name: 'InpatientMealPage',
        component: () => import('../views/client/InpatientMealPage.vue'),
      },
    ],
  },
  {
    path: '/userLogin',
    name: 'login',
    component: () => import('../views/UserLogin.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
