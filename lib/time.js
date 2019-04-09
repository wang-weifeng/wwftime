#!/usr/bin/env node

const program = require("commander");
const appInfo = require('../package.json');
const moment = require('moment');

program
    .allowUnknownOption()
    .version(appInfo.version)
    .option('-s, --simple', '毫秒时间戳转化时间，可接受多个参数，中间用空格')

program.parse(process.argv);

if (program.simple) {
    const simpleTime = process.argv.splice(3);
    const timestampInfo = simpleTime.map(time => {
        return moment(Number(time)).format('YYYY-MM-DD HH:mm:ss');
    })
    console.error('\u001b[31m*************************\x1b[0m');
    console.log(simpleTime);
    console.error('\u001b[31m换算时间为\x1b[0m');
    console.log(timestampInfo);
    console.error('\u001b[31m*************************\x1b[0m');
}
