const d = document;
const sectionFotos = d.getElementById('muestra-fotos')
const foto = d.getElementById('foto-p')


// si detecta que esta en mobile
if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)) {
    sectionFotos.classList.add('oculto')
} else {
    sectionFotos.classList.remove('oculto');
}