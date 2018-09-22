/**
 *
 * @param {blob,maxWidth,maxHeight}
 * @callback 回调函数，返回压缩后的图片
 *
 */
let CompressPicture = function (callback, {
  blob,
  fileName,
  maxWidth = 1024,
  maxHeight = 1024
}) {
  // 小于1M或者没写回调函数
  if (!callback || blob.size / 1024 < 1024) {
    callback(null, blob)
    return
  }
  // 开始转化
  let canvas = document.createElement('canvas')
  let context = canvas.getContext('2d')
  let reader = new FileReader()
  let img = new Image()
  let targetWidth = maxWidth
  let targetHeight = maxHeight
  reader.onload = function (e) {
    img.src = e.target.result
    img.onload = function () {
      let originWidth = img.width
      let originHeight = img.height
      // 按比例缩放长宽
      if (originWidth / originHeight > maxWidth / maxHeight) {
        targetWidth = maxWidth
        targetHeight = Math.round(originHeight * (maxWidth / originWidth))
      } else {
        targetHeight = maxHeight
        targetWidth = Math.round(originWidth * (maxHeight / originHeight))
      }
      canvas.width = targetWidth
      canvas.height = targetHeight
      // 清除画布
      context.clearRect(0, 0, targetWidth, targetHeight)
      // 重新画图
      context.drawImage(img, 0, 0, targetWidth, targetHeight)
      let dataUrl = canvas.toDataURL('image/jpg')
      //let newBlob = dataURLtoBlob(data64)
      let file = dataURLtoFile(dataUrl,fileName)
      callback(file)
    }
  }

  reader.readAsDataURL(blob)
}

let dataURLtoBlob = function (dataurl) {
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {type: mime})
}

let dataURLtoFile = function (dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}

export {CompressPicture}
