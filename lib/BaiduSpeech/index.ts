const speechText = (token: String, text: String, cuid = 'cuid', vol = 10, spd = 3): void => {
    let url = `https://tts.baidu.com/text2audio?lan=zh&ctp=1&cuid=${cuid}&vol=${vol}&spd=${spd}&tok=${token}&tex=${text}`
    let n = new Audio(url);
    n.src = url;
    n.play();
}

export { speechText }
