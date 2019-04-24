/**
 * 使用baidu语音播放文字
 * @param token 授权码，需要后台提供
 * @param text 播报的文字
 * @param cuid 表示
 * @param vol 音量
 * @param spd 速度
 */
export declare const speechText: (token: String, text: String, cuid?: string, vol?: number, spd?: number) => void;
