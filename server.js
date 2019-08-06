const express = require('express');
const path = require('path');
const morgan = require('morgan'); // 익스프레스 프레임워크가 동작하면서 나오는 메시지들을 콘솔에 표시
const compression = require('compression'); // 이름처럼 페이지를 압축해서 전송
const session = require('session'); // 세션 사용
const bodyParser = require('body-parser'); //폼에서 전송되는 POST 값을 사용
const cookieParser = require('cookie-parser'); //쿠키를 사용
const methodOverride = require('method-override'); // REST API에서 PUT과 DELETE 메소드를 사용
const cors = require('cors'); //크로스오리진(다른 도메인 간의 AJAX 요청)
const route = require('./route.js');
const app = express();

app.use(express.static(path.join(__dirname, 'html')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'main.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});
app.listen(8080, () => {
  console.log('Express App on port 8080!');
});