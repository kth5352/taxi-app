import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://172.30.122.186:3000', // 서버 주소
  timeout: 10000, // 요청 시간 초과 설정
});

export default {
  test() {
    return instance.get('/taxi/test');
  },

  login(id: string, pw: string) {
    return instance.post('/taxi/login', {userId: id, userPw: pw});
  },

  register(id: string, pw: string) {
    console.log('회원가입 API 호출:', id, pw); // 로그 추가
    return instance.post('/taxi/register', {userId: id, userPw: pw});
  },

  list(id: string) {
    return instance.post('/taxi/list', {userId: id});
  },
};
