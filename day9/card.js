let data=[
    {
        id:1,
        Name:"Prabas",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGiYjJuq4QbvJ-MdMrNpQGo2bsAz7ZmRsZg&s"
    },
    {
        id:2,
        Name:"Mahesh",
        Image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Mahesh_Babu_in_Spyder_%28cropped%29.jpg"
    },
    {
        id:3,
        Name:"Karthik",
        Image:"https://mum-objectstore.e2enetworks.net/tringcoin/A_List_Star/Karthik-Sivakumar-Net-Worth.jpg"
    }
]


  
  let cardContainer2=document.getElementById("cardContainer")

  cardContainer2.style.display="flex"
  cardContainer2.style.justifyContent="center"
  cardContainer2.style.margin="40px"
  cardContainer2.style.gap="40px"
  
  for(i=0;i<data.length;i++){
    const colors=["lightblue","lightcoral","pink"]
         let card=document.createElement("div")
         
   card.innerHTML=`
                           <img src='${data[i].Image}' width="100%" height="350px"/> 
                           <p>${data[i].id}</p>
                           <p id="p">${data[i].Name}</p>`
   card.style.width="350px";
   card.style.border="2px solid black"
   card.style.backgroundColor=colors[i]
   let a=card.querySelectorAll("p");
      for(j=0;j<a.length;j++){
        
              a[j].style.fontWeight="bold"
      }

  cardContainer2.appendChild(card)
}
