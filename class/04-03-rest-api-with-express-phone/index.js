import expressD from 'express'; // export default: 디폴트설정값 불러오므로 변수이름 자유
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
// import * as aaa from './phone.js'; export 모두 불러오기 사용 => aaa.getToken()
const app = expressD();
app.use(expressD.json()); // json 요청 연결시켜줌.

app.get('/boards', function (req, res) {
  // 데이터를 조회하는 로직 => DB에서 꺼내옴
  // res.send('조회에 성공하였습니다.');
  res.send([
    { number: 1, writer: '철수', title: '철수입니다.', contents: '철수의 내용입니다~' },
    { number: 2, writer: '영희', title: '영희입니다.', contents: '영희의 내용입니다~' },
    { number: 3, writer: '훈이', title: '훈이입니다.', contents: '훈이의 내용입니다~' },
  ]);
});

// 요청방식만 바꾸고 이름(엔드포인트)은 같게 : restful하다.
app.post('/boards', function (req, res) {
  // 데이터를 등록하는 로직 => DB에다 저장함
  // console.log(req);
  console.log(req.body);
  res.send('등록에 성공하였습니다.');
});

app.post('/tokens/phone', function (req, res) {
  if (checkValidationPhone(req.body.phone)) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken(4);

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(req.body.phone, mytoken, res);
  } else {
    return;
  }
});

app.listen(3001);
