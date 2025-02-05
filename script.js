const textbox = document.querySelector(".txt");
const button = document.querySelector(".btn");
const content = document.querySelector(".content")


button.addEventListener("click",async ()=>{
    const data = await getData(textbox.value);
    displayInfo(data)
})



async function getData(user){
    // console.log("initialized");
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    return data;
}

function displayInfo(data){
    content.innerHTML=`
        Name: ${data.name}<br>
        followers: ${data.followers}<br>
        following: ${data.following}<br>
    `
}