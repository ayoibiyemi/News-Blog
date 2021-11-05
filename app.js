const finalData = document.querySelector(".contents");
let totalData = ""

let consoleData;

function handleSuccess () { 
    const data = JSON.parse( this.responseText ); 
    consoleData = data;
    // console.log( data.results[0].title );
    // console.log( data.results[0].multimedia[0].url );
    // console.log( data.results[0].abstract );
    // console.log( data.results[0].url );
    for (let i = 0; i < data.results.length; i++) { 
        console.log(data.results[i].multimedia[0].url);
        let imgsrc = data.results[i].multimedia[0].url;
        let singleData = `
                <div class="col-3">
                  <div class="card" style="width: 100%">
                        <img src= ${imgsrc} alt="${data.results[i].title}">
                        <div class="card-body">
                            <h5 class="card-title">${data.results[i].title}</h5>
                            <p class="card-text">${data.results[i].abstract}</p>
                            <a href="${data.results[i].url}" target="_blank">Read more</a>
                        </div>
                  </div>
                </div>
        ` 
        totalData = totalData + singleData;  
    }

    finalData.innerHTML = totalData;
}
  
function handleError () { 
    console.log( 'An error occurred \uD83D\uDE1E' );
}
  
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=mVJrvWKVvPm1NiAEWSLVN3Pp9m29MCjN');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
  

// <img src="${data.results[i].multimedia[0].url}" alt="${data.results[i].title}"></img>
  