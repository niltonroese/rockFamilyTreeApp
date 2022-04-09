/*Official Website Functions*/

function artistLink(url){
    window.open(url);
}

/*Genre Buttons*/

  function Jazz(){
    const x = document.getElementById("JazzOverview");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Blues(){
    const x = document.getElementById("BluesOverview");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function RandB(){
    const x = document.getElementById("RandBOverview");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Folk(){
    const x = document.getElementById("FolkOverview");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

/*API Fetch*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': '500ea0140bmshf6f2c9a6da4a206p1519d9jsn9fc495bd022b'
	}
};

  async function fetchBobDAsync() {
    return fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/808', options)
}

async function BobD(){
    // async await modern js
    try{
        const resp = await fetchBobDAsync();
        const json = await resp.json();
        console.log(json);
        //window.alert(json.link);

        let container = document.getElementById('bobDylanContainer');

        if(document.querySelectorAll("#artist-link").length === 0){
            let url = document.createElement('a');
            url.id = 'artist-link'
            url.href = json.link;
            url.target = '_blank'
            url.innerHTML = json.link;
            container.append(url);
        }
    } catch(error) {
        window.alert('error');  
    }
}

// async function fetchKingstonTrioAsync() {
//     return fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/123291', options)
// }

// async function KingstonTrio(){
// //     // async await modern js
//     try{
//         const resp = await fetchKingstonTrioAsync();
//         const json = await resp.json();
//         console.log(json);
//         window.alert(json.picture_medium);
//     } catch(error) {
//         window.alert('error');  
//     }
// }

/*Search Button*/

document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const band = document.getElementById('band-input').value
    // console.log(band);

    window.open('https://google.com', '_blank');
})