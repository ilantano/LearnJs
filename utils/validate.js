export const removeAscent = str => {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
};

export const validateName = (rule, value, callback) => {
  const re = /^[a-zA-Z ]{4,255}$/g;
  if (!re.test(removeAscent(value))) {
    callback(new Error('Vui lòng nhập đúng họ và tên và có dấu'));
  } else {
    callback();
  }
};

export function formatNumberToMoney(values) {
  return values?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function convertNumberToCurrency(data) {
  return data ? `${data?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ` : '0đ';
}

export function validateEmail(email) {
  // eslint-disable-next-line max-len
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

export const validatePassword = password => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (password) {
    return regex.test(password);
  }
  return true;
};

export const validateUserAccount = acc => {
  const regex = /^[a-z0-9._]+$/;
  if (acc) {
    return regex.test(acc);
  }
  return true;
};
