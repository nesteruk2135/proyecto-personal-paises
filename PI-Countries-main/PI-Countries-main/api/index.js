//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getApiInfo,chargeActivitiesData}=require("./src/controllers/apiInfo")
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001,async () => {
    const countries= await getApiInfo()
    console.log(countries)
    const activity=await chargeActivitiesData()
    console.log(activity)
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
