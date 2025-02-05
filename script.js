const textbox = document.querySelector(".txt");
const button = document.querySelector(".btn");


button.addEventListener("click",()=>{
    getData(textbox.value);
})






async function getData(user){
    console.log("initialized");
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    console.log(data.name,data.followers,data.following);
}