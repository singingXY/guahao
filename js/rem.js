!(function (doc, win) {
  var docEle = doc.documentElement,
    event = 'onorientationchange' in window ? 'orientationchange' : 'resize',
    fn = function () {
      var width = docEle.clientWidth
      if (width <= 750) {
        width && (docEle.style.fontSize = 10 * (width / 320) + 'px')
      } else {
        docEle.style.fontSize = 22 + 'px'
      }
    }
  win.addEventListener(event, fn, false)
  doc.addEventListener('DOMContentLoaded', fn, false)
})(document, window)
