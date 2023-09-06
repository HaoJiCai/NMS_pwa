import Swal from 'sweetalert2';

const messages = {
  loginText: '登入成功！！',
  loginErrorText: '登入失敗！！',
  checkSuccessText: '身分驗證成功',
  checkErrorText: '身分驗證失敗，無法讀取資料',
  addText: '新增成功！！',
  editText: '編輯成功！！',
  deleteText: '刪除成功！！',
};
// 建立 Toast 訊息物件
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

// 登入成功 success message
export function loginMsg() {
  Toast.fire({
    icon: 'success',
    title: `${messages.loginText}`,
  });
}
// 登入失敗 error message
export function loginErrorMsg() {
  Toast.fire({
    icon: 'error',
    title: `${messages.loginErrorText}`,
  });
}

// 身分驗證成功 success message
export function checkSuccessMsg() {
  Toast.fire({
    icon: 'success',
    title: `${messages.checkSuccessText}`,
  });
}

// 身分驗證失敗 success message
export function checkErrorMsg() {
  Toast.fire({
    icon: 'error',
    title: `${messages.checkErrorText}`,
  });
}

// 新增產品 success message
export function addMsg() {
  Toast.fire({
    icon: 'success',
    title: `${messages.addText}`,
  });
}
// 編輯產品 success message
export function editMsg() {
  Toast.fire({
    icon: 'success',
    title: `${messages.editText}`,
  });
}
// 刪除產品 success message
export function deleteMsg() {
  Toast.fire({
    icon: 'success',
    title: `${messages.deleteText}`,
  });
}

// 建立 Toast2 訊息物件
const Toast2 = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export function searchNoKeyword() {
  Toast2.fire({
    icon: 'warning',
    title: '搜尋輸入欄，請輸入關鍵字',
  });
}

export function searchDataNum(num) {
  Toast2.fire({
    icon: 'success',
    title: `已搜尋到 ${num} 筆相關資料`,
  });
}
