const Koa = require('koa');
const app = new Koa();
const users =require('./router/users')
const index = require('./router/index')

app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods())
app.listen(80);