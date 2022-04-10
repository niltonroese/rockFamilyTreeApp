/*Official Website Functions*/

function artistLink(url){
    window.open(url);
}

/*Search Button*/

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const band = document.getElementById('band-input').value
  // console.log(band);
  window.open('https://google.com', '_blank');
})

/*API Fetch*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': '500ea0140bmshf6f2c9a6da4a206p1519d9jsn9fc495bd022b'
	}
};

async function fetchKingstonTrioAsync() {
    return fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/17228', options)
}

async function KingstonTrio(){
//     // async await modern js
    try{
        const resp = await fetchKingstonTrioAsync();
        const json = await resp.json();
        console.log(json);
        window.alert(json.link);
    } catch(error) {
        window.alert('error');  
    }
}

// async function fetchBobDAsync() {
//   return fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/808', options)
// }

// async function BobD(){
//   // async await modern js
//   try{
//       const resp = await fetchBobDAsync();
//       const json = await resp.json();
//       console.log(json);
//       //window.alert(json.link);

//       let container = document.getElementById('bobDylanContainer');

//       if(document.querySelectorAll("#artist-link").length === 0){
//           let url = document.createElement('a');
//           url.id = 'artist-link'
//           url.href = json.link;
//           url.target = '_blank'
//           url.innerHTML = json.link;
//           container.append(url);
//       }
//   } catch(error) {
//       window.alert('error');  
//   }
// }

/*Genre Buttons*/

  // function jazz(); blues(); randB(); {
  //   const x = document.querySelectorAll("#jazzOverview", "#bluesOverview", "#randBOverview");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }

  function blues(){
    const x = document.getElementById("bluesOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function randB(){
    const x = document.getElementById("randBOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function folk(){
    const x = document.getElementById("folkOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function folkRock(){
    const x = document.getElementById("folkRockOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function rockabilly(){
    const x = document.getElementById("rockabillyOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function britInvasion(){
    const x = document.getElementById("britInvasionOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function soul(){
    const x = document.getElementById("soulOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function psychedelicRock(){
    const x = document.getElementById("psychedelicOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function progRock(){
    const x = document.getElementById("progRockOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function experimentalRock(){
    const x = document.getElementById("experimentalOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function southernRock(){
    const x = document.getElementById("southernOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function glitterRock(){
    const x = document.getElementById("glitterOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function hardRock(){
    const x = document.getElementById("hardRockOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function punk(){
    const x = document.getElementById("punkOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function grunge(){
    const x = document.getElementById("grungeOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function heavyMetal(){
    const x = document.getElementById("heavyMetalOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function popRock(){
    const x = document.getElementById("popRockOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function newWave(){
    const x = document.getElementById("newWaveOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function dooWop(){
    const x = document.getElementById("dooWopOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function funk(){
    const x = document.getElementById("funkOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function disco(){
    const x = document.getElementById("discoOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function rap(){
    const x = document.getElementById("rapOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function hiphop(){
    const x = document.getElementById("hiphopOverview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }