<template>
  <div class="footer-btn">
    <ul class="footer-list">
      <li class="footer-type">
        <router-link to="/frontEnd/homePage" class="footer-link"><img src="../assets/home_24dp_1x.png" alt="home_24dp_1x.png"><span>主頁</span></router-link>
      </li>
      <li class="footer-type">
        <router-link to="/frontEnd/patientRecordSearchPage" class="footer-link"><img src="../assets/search_24dp_1x.png" alt="search_24dp_1x.png"><span>篩查</span></router-link>
      </li>
      <li class="footer-type">
        <router-link to="/frontEnd/nutritionalCarePage" class="footer-link"><img src="../assets/care_24dp_1x.png" alt="care_24dp_1x.png"><span>照護</span></router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .footer-btn {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: rgba(90, 90, 90, 0.9);
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
    }
    .footer-list {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      list-style: none;
      border: 0.5px solid rgba(116, 116, 116, 0.846);;
      padding: 0;
      margin: 0;
      box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
      .footer-type {
        width: 33.33%;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: rgba(154, 153, 153, 0.834);
        }
        @media screen and (max-width: 1024px) {
          font-size: 20px;
          padding: 15px 15px;
        }
        @media screen and (max-width: 768px) {
          font-size: 16px;
          padding: 12px 10px;
        }
        .footer-link {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: whitesmoke;
          &.router-link-exact-active {
            @media screen and (max-width: 1024px) {
              font-size: 22px;
              color: #75e6b3;
            }
            @media screen and (max-width: 768px) {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
</style>
