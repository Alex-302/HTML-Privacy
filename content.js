var a = document.getElementsByTagName('a');
for (var i = 0, l = a.length; i < l; i++) {
	a[i].removeAttribute("ping")
}

var hide = document.getElementsByTagName('body');
for (var i = 0, l = hide.length; i < l; i++) {
	hide[i].removeAttribute("onpagehide")
}

var show = document.getElementsByTagName('body');
for (var i = 0, l = show.length; i < l; i++) {
	show[i].removeAttribute("onpageshow")
}

var hide = document.getElementsByTagName('body');
for (var i = 0, l = hide.length; i < l; i++) {
	hide[i].removeAttribute("pagehide")
}

var show = document.getElementsByTagName('body');
for (var i = 0, l = show.length; i < l; i++) {
	show[i].removeAttribute("pageshow")
}