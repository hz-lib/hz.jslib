const speechText = (token: String, text: String): void => {
    let url = `https://tts.baidu.com/text2audio?lan=zh&ctp=1&vol=9&spd=3&tok=${token}&tex=${text}`
    let n = new Audio(url);
    n.src = url;
    n.play();
}

export { speechText }
