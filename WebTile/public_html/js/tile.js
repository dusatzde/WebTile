function getParam(paramName) {
    var QS = window.location.toString();
    var indSta = QS.indexOf(paramName + "=");
    if (indSta == -1 || paramName == "")
        return null;
    var indEnd = QS.indexOf('&', indSta);
    if (indEnd == -1)
        indEnd = QS.length;
    var valore = unescape(QS.substring(indSta + paramName.length + 1, indEnd));
    return valore;
}

function redirect() {
    if (document.referrer.indexOf('webtile.org/') < 1) {
        var url = getParam('url');
        window.location.replace(url);
        return true;
    }
    return false;
}

function render() {
    var ico = getParam('ico');
    document.getElementById('tile-img').src = 'img/tile/' + ico + '.png';
    var theme = getParam('theme');
    document.body.style.backgroundColor = theme;
    if (theme === 'white') {
        document.getElementById('tile-inst').src = 'img/inst_black.png';
    } else {
        document.getElementById('tile-inst').src = 'img/inst.png';
    }
}





