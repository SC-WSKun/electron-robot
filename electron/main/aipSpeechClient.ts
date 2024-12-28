// 使用百度语音识别套件
// 参考文档：https://ai.baidu.com/ai-doc/SPEECH/dlbxg1cvw
const fs = require("fs");
const AipSpeechClient = require("baidu-aip-sdk").speech;

// 设置APPID/AK/SK
var APP_ID = "116879283";
var API_KEY = "mMHCTC1eJ4CqhPbRpF0SwFCY";
var SECRET_KEY = "TscxxuehGofZJgY8nfX5fgBSOdiD5E4P";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
let voice = fs.readFileSync('assets/voice/16k_test.pcm');

let voiceBuffer = Buffer.from(voice);

// 识别本地文件
client.recognize(voiceBuffer, 'pcm', 16000).then(function (result) {
    console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
    console.log(err);
});

// 识别本地文件，附带参数
client.recognize(voiceBuffer, 'pcm', 16000， {dev_pid: 1537, cuid: Math.random()}).then(function (result) {
    console.log('<recognize>: ' + JSON.stringify(result));
}, function(err) {
    console.log(err);
});