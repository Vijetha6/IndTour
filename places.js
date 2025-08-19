let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let curMode="light";
modeBtn.addEventListener("click",()=>
    {
        if(curMode=="light")
        {
            curMode='dark';
            body.classList.add("dark");
            body.classList.remove("light");
        }
        else
            {
                curMode='light';
                body.classList.add("light");
                body.classList.remove("dark");
            }
            console.log(curMode);
        
    });