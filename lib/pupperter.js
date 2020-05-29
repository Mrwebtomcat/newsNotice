const puppeteer = require('puppeteer');
const url = require('../config/puppeter')
const pool = require('../db/pg')
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto(url);
  const inputElement = await page.$$eval('a[rel="nofollow"]', eles => eles.map(ele => {
    return { text: ele.href, link: ele.innerText }
  }));

  (async function () {
    const client = await pool.connect()
    let tag = false
    //查询 SHARE 为1的字段 'SELECT $1::int AS SHARE ', [1],(err, result)
    await client.query('SELECT $1::int AS SHAR',[0], (err, result) => {
      if (err) {
        return console.log('Error executing query', err.stack)
      }
      if(result.rows.lenght===0){
        tag  = true
      }
      
    })
    client.release()
  })()
console.log(1)

  // 其他操作...
  await browser.close();
});