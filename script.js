
var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
container.append(row);


var res=fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=223");
res.then((data)=>data.json()).then((data1)=>foo(data1));
    function foo(data1){
          for(i=0;i<data1.length;i++){
              row.innerHTML+= `<div class="col-md-4">
                               <div class="card mb-3" style="max-width: 18rem;">
                                <img src=${data1[i].image} class="card-img-top">
                                 <div class="card-body text-danger">
                                  <h2 class="card-title"><strong>Name : ${data1[i].name}</strong></h2>
                               <p class="card-text">Gender:${data1[i].gender}</p>
                               <p class="card-text">First Episode : ${data1[i].firstEpisode}</p>
                               <p class="p-text">Voiced By: ${data1[i].voicedBy}</p>
                               <a href="${data1[i].url}" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>`;
      document.body.append(container);
          }
}
