/**
 * 使用baidu语音播放文字
 * @param token 授权码，需要后台提供
 * @param text 播报的文字
 * @param cuid 表示
 * @param vol 音量
 * @param spd 速度
 */
export const speechText = (token: String, text: String, cuid = 'cuid', vol = 10, spd = 3): void => {
    let url = `https://tts.baidu.com/text2audio?lan=zh&ctp=1&cuid=${cuid}&vol=${vol}&spd=${spd}&tok=${token}&tex=${text}`
    let n = new Audio(url);
    n.src = url;
    n.play();
}
