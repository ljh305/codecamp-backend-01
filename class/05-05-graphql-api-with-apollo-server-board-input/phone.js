export function checkValidationPhone(myphone) {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log('에러! 핸드폰 번호를 제대로 입력해주세요.');
    return false;
  } else {
    return true;
  }
}

export function getToken(mycount) {
  if (mycount === undefined) {
    console.log('에러! 갯수를 입력해주세요.');
    return;
  } else if (mycount <= 0) {
    console.log('에러! 갯수가 너무 적습니다.');
    return;
  } else if (mycount > 10) {
    console.log('에러! 갯수가 너무 많습니다.');
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** mycount)).padStart(mycount, '0');
  return result;
}

export function sendTokenToSMS(myphone, result) {
  return `${myphone} 번호로 인증번호 ${result}를 전송합니다.`;
}
