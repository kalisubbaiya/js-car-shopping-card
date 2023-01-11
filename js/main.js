let cars=[{
    title:"CAR",
    name:"Rolls-Royce Phantom VIII",
    image1:"images/RRoyce-gr.webp",
    image2:"images/RRoyce-br.webp",
    image3:"images/RRoyce-vio.webp"
}];
let cont=document.querySelector(".container");

let row=document.createElement("div");
row.classList.add("row");
cont.appendChild(row);

cars.forEach(e=>{
    let col=document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);

    let card=document.createElement("div");
    card.classList.add("card");
    col.appendChild(card);

    let img_card=document.createElement("div");
    img_card.classList.add("img-card");
    card.appendChild(img_card);

    let img=document.createElement("img");
    img.src=e.image1;
    img.style.width="100%";
    img_card.appendChild(img);

    let detail=document.createElement("div");
    detail.classList.add("detail");
    card.appendChild(detail);

    let title=document.createElement("span");
    title.innerHTML=e.title;
    title.style.backgroundColor="#002c00eb";
    title.style.padding="4px 12px";
    title.style.fontSize="12px";
    title.style.fontWeight="bolder";
    title.style.color="#fff";
    title.style.borderRadius="4px";




    detail.appendChild(title);

    let cName=document.createElement("h3");
    cName.innerHTML=e.name;
    detail.appendChild(cName);

    let para=document.createElement("p");
    para.innerHTML=`<i class="bi bi-car-front-fill"></i>`+"Mileage: 4000 miles";
    detail.appendChild(para);

    let para1=document.createElement("p");
    para1.innerHTML=`<i class="bi bi-fuel-pump-fill"></i>`+"Fuel: 25mpg";
    detail.appendChild(para1);

    let para2=document.createElement("p");
    para2.innerHTML=`<i class="bi bi-shield-fill"></i>`+"Safety:"+
    `<i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>`;
    detail.appendChild(para2);

    let para3=document.createElement("p");
    para3.innerHTML="Pick a color:";
    para3.style.margin="12px 0 6px"
    detail.appendChild(para3);

    let button1=document.createElement("button");
    let button2=document.createElement("button");
    let button3=document.createElement("button");

    detail.appendChild(button1);
    detail.appendChild(button2);
    detail.appendChild(button3);

    button1.style.background="#002c00eb";
    button2.style.background="#520000eb";
    button3.style.background="#3e003eeb";

    button1.addEventListener("click",function(){
        img.src=e.image1;
        title.style.backgroundColor="#002c00eb";
    });

    button2.addEventListener("click",function(){
        img.src=e.image2;
        title.style.backgroundColor="#520000eb";
    });

    button3.addEventListener("click",function(){
        img.src=e.image3;
        title.style.backgroundColor="#3e003eeb";
    });

    let span1=document.createElement("span");
    detail.appendChild(span1);
    span1.classList.add("span1");
    span1.innerHTML="$134,450";

    let span2=document.createElement("span");
    detail.appendChild(span2);
    span2.classList.add("span2");
    span2.innerHTML="$140,500";

    let addCart=document.createElement("div");
    detail.appendChild(addCart);

    let button4=document.createElement("button");
    button4.innerHTML=`<i class="bi bi-cart-fill"></i>`+"Add to Cart";
    addCart.appendChild(button4);
    button4.classList.add("addCart");
    
});
