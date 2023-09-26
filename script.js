const form=document.getElementById("form");
const input=document.getElementById("in");
const result=document.querySelector(".result");
const more=document.getElementById("more");

let ky="";
let page=1;

async function search(){
    ky=input.value;
    const url="https://api.unsplash.com/search/collections?page="+page+"&query="+ky+"&client_id=0ZpZ_jxLB90v7N4L_CMGx3CfzweSBPWrY1baUoDtiHk&per_page=12";
    const r=await fetch(url);
    const data=await r.json();
    if(page==1)
    {
        result.innerHTML=" ";
    }
    const resu=data.results;
    resu.map((re)=>{
        const image=document.createElement("img");
        image.src=re.cover_photo.urls.small;
        const lnk=document.createElement("a");
        lnk.href=re.links.html;
        lnk.target="_blank";
        lnk.appendChild(image);
        result.appendChild(lnk);
    })

    more.style.display="block";
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    search();

});
more.addEventListener("click",()=>{
    page++;
    search();
})