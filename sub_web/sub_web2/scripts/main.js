let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/五彩斑斓色_黑色背景.png') {
      myImage.setAttribute('src', 'images/五彩斑斓色.jpg');
    } else {
      myImage.setAttribute('src', 'images/五彩斑斓色_黑色背景.png');
    }
}

// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector('html').addEventListener('click', () => 
// {
//     alert('别戳我，我怕疼。');
// });  // 逻辑都是获取HTML的元素,然后调用方法,
// document.querySelector("html").addEventListener("click", function () 
// {
//     alert("别戳我，我怕疼。");
// });
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() 
{
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '用户名:' + myName;
}

if(!localStorage.getItem('name')) 
{
setUserName();
}
else 
{
let storedName = localStorage.getItem('name');
myHeading.textContent = '用户名:' + storedName;
}
myButton.onclick = function() 
{
    setUserName();
}
function setUserName() 
{
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '用户名:' + myName;
    }
}