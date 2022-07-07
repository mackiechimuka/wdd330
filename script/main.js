const links=[
    {
        label:"Week 1 Notes",
        url:"week1/index.html",
    },
    {
        label:"Week2 Notes",
        url:"week2/index.html",

    },
    {
        label:"Week3 Notes",
        url:"week3/index.html",
    },
    {
        label:"Week 4 Notes",
        url:"week4/index.html"
    },
    {
        label:"Week 5 Notes",
        url:"week5/index.html"
    },
    {
        label:'Todo',
        url:'todoChallenge/index.html', 
    },
    {
        label:'Week7 Notes',
        url:'week7/index.html',
    },
    {
        label:'Week8 Notes',
        url:'week8/index.html',
    },
    {
        label:'Week9 Notes',
        url:'week9/index.html',
    },
    {
        label:'Week10 Notes',
        url:'week10/index.html',
    }
]
function loadIndex(){
   const ol= document.querySelector("#linkList")
   links.forEach(link =>{
       const li = document.createElement("li");
       const href = document.createElement("a");
       href.setAttribute("href",link.url);
       href.innerText = link.label;
       li.appendChild(href);
       ol.appendChild(li);
   })
}