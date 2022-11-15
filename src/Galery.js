
const listDessin =[
    {
        id : 1,
        imgUrl : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e61d682-d4bc-40ec-af01-3481eebc7164/dfgbf57-ef1b1fd6-f90f-44ac-a381-8e6248196936.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNlNjFkNjgyLWQ0YmMtNDBlYy1hZjAxLTM0ODFlZWJjNzE2NFwvZGZnYmY1Ny1lZjFiMWZkNi1mOTBmLTQ0YWMtYTM4MS04ZTYyNDgxOTY5MzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0j4nbOs_pKMEKIoh22bNBm0atDu_D-1sfFB5KdeFuAQ",
        name : "Yin Yang Carps",
        description : "carp en cercle",
        deviant : "https://www.deviantart.com/xfgreentea/art/Yin-Yang-Carps-934399339"
        

}
]

function loadCard(){
    let cardContainer = document.querySelector('#containerCard');
    console.log(cardContainer)
    let htmlCode = '';
    listDessin.forEach(function(Dessin) {
        htmlCode =
          htmlCode +
          `
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${Dessin.imgUrl}" alt="${Dessin.description}">
  <div class="card-body">
    <h5 class="card-title">${Dessin.name}</h5>
    <a href="${Dessin.deviant}" class="btn btn-primary">Source de l'image</a>
  </div>
</div>
        `;
      });

    cardContainer.innerHTML = htmlCode;
};


