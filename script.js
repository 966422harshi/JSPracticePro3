 // Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((details) => {
    //lesser repetition code
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = details.clientX + 'px';
    div.style.top= details.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src","scene.jpg");
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img,{
        y:"0",
        ease:Power2,
        duration:0.6
    })
    gsap.to(img,{
        y:"100%",
        delay:0.6,
        ease:Power1,
    })
    setTimeout(function(){
        div.remove();
    },2000);
  }, 500)
);

// throttling- kisi particular code k Node. of executions ko kam kar dena