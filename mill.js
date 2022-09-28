const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    const makerandom = newColor()
    document.body.style.backgroundColor = makerandom;
    h1.innerText = makerandom;
})
const newColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
