window.onscroll = function() {scrollFunction()};
let svgGift = document.getElementsByClassName('gift')

 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#fff";
    document.getElementById("title").classList.add('text-black')
    document.getElementById("title").classList.remove('text-white')

    for(let i = 0; i < svgGift.length; i++) {
      svgGift[i].classList.add('stroke-soft-black')
      svgGift[i].classList.remove('stroke-white')
    }
    document.getElementById('gift').classList.add('text-soft-black')
    document.getElementById('gift').classList.remove('text-white')
    document.getElementById('login').classList.add('text-soft-black')
    document.getElementById('login').classList.remove('text-white')
    document.getElementById('lang').classList.add('text-soft-black')
    document.getElementById('lang').classList.remove('text-white')
    document.getElementById('langDrop').classList.add('stroke-soft-black')
    document.getElementById('langDrop').classList.remove('stroke-white')
    document.getElementById('hamburger').classList.add('fill-soft-black')
    document.getElementById('hamburger').classList.remove('fill-white')
    document.getElementById('lup').classList.add('text-gray-900')
    document.getElementById('lup').classList.remove('text-white')
    document.getElementById('lup2').classList.add('text-gray-900')
    document.getElementById('lup2').classList.remove('text-white')
    document.getElementById('inpnav').classList.add('placeholder-gray-900')
    document.getElementById('inpnav').classList.add('text-gray-900')
    document.getElementById('inpnav').classList.remove('placeholder-white')
    document.getElementById('inpnav').classList.remove('text-white')
  } else {
    document.getElementById("title").classList.remove('text-black')
    document.getElementById("title").classList.add('text-white')
    // document.getElementById("title").style.color = "#fff";
    document.getElementById("navbar").style.background = "none";
    for(let i = 0; i < svgGift.length; i++) {
      svgGift[i].classList.remove('stroke-soft-black')
      svgGift[i].classList.add('stroke-white')
    }
    document.getElementById('gift').classList.remove('text-soft-black')
    document.getElementById('gift').classList.add('text-white')
    document.getElementById('login').classList.remove('text-soft-black')
    document.getElementById('login').classList.add('text-white')
    document.getElementById('lang').classList.remove('text-soft-black')
    document.getElementById('lang').classList.add('text-white')
    document.getElementById('langDrop').classList.remove('stroke-soft-black')
    document.getElementById('langDrop').classList.add('stroke-white')
    document.getElementById('hamburger').classList.remove('fill-soft-black')
    document.getElementById('hamburger').classList.add('fill-white')
    document.getElementById('lup').classList.remove('text-gray-900')
    document.getElementById('lup').classList.add('text-white')
    document.getElementById('lup2').classList.remove('text-gray-900')
    document.getElementById('lup2').classList.add('text-white')
    document.getElementById('inpnav').classList.remove('placeholder-gray-900')
    document.getElementById('inpnav').classList.remove('text-gray-900')
    document.getElementById('inpnav').classList.add('placeholder-white')
    document.getElementById('inpnav').classList.add('text-white')
  }
}