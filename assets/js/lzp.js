const moreLess = () => {
  let dots = document.getElementById("dots");
  let dots2 = document.getElementById("dots2");
  let invi = document.getElementById("invisible-text");
  let invi2 = document.getElementById("invisible-text2");
  let btn = document.getElementById("button");

  if (dots.style.display != "none") {
    dots.style.display = "none";
    dots2.style.display = "none";
    invi.style.display = "inline";
    invi2.style.display = "inline";
    btn.innerHTML = `See less <i class="bi bi-chevron-up"></i>`;
  } else {
    dots.style.display = "inline";
    dots2.style.display = "inline";
    invi.style.display = "none";
    invi2.style.display = "none";
    btn.innerHTML = `See more <i class="bi bi-chevron-down"></i>`;
  }
};
const seeLess = () => {
  let dots3 = document.getElementById("dots3");
  let invi3 = document.getElementById("invisible-text3");
  let btn3 = document.getElementById("button3");
  let opacii = document.getElementById("content-text");
  if (dots3.style.display != "none") {
    dots3.style.display = "none";
    invi3.style.display = "inline";
    opacii.style.opacity = "1";
    btn3.innerHTML = `See less <i class="bi bi-chevron-up"></i>`;
  } else {
    dots3.style.display = "inline";
    invi3.style.display = "none";
    opacii.style.opacity = "0.2";
    btn3.innerHTML = `See more <i class="bi bi-chevron-down"></i>`;
  }
};
const see = () => {
  let dots4 = document.getElementById("dots4");
  let invi4 = document.getElementById("invisible-text4");
  let btn4 = document.getElementById("button4");
  let opaci = document.getElementById("instructor-text");
  console.log(opaci);
  if (dots4.style.display != "none") {
    dots4.style.display = "none";
    invi4.style.display = "inline";
    opaci.style.opacity = "1";
    btn4.innerHTML = `See less <i class="bi bi-chevron-up"></i>`;
  } else {
    dots4.style.display = "inline";
    invi4.style.display = "none";
    opaci.style.opacity = "0.2";
    btn4.innerHTML = `See more <i class="bi bi-chevron-down"></i>`;
  }
};

window.onscroll = () => {
  let card = document.getElementById("cards");
  if (pageYOffset > 423) {
    card.style.cssText = `position: fixed; top: 2rem; right: 4.7rem;`;
  } else {
    card.style.cssText = `position: absolute; top: 22.5rem; right: 4.7rem;`;
  }

  


  
};
