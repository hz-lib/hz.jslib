"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 使用baidu语音播放文字
 * @param token 授权码，需要后台提供
 * @param text 播报的文字
 * @param cuid 表示
 * @param vol 音量
 * @param spd 速度
 */
exports.speechText = function (token, text, cuid, vol, spd) {
    if (cuid === void 0) { cuid = 'cuid'; }
    if (vol === void 0) { vol = 10; }
    if (spd === void 0) { spd = 3; }
    var url = "https://tts.baidu.com/text2audio?lan=zh&ctp=1&cuid=" + cuid + "&vol=" + vol + "&spd=" + spd + "&tok=" + token + "&tex=" + text;
    var n = new Audio(url);
    n.src = url;
    n.play();
};
