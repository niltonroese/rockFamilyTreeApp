/*Official Website Functions*/
function artistLink(url){
    window.open(url);
}

/*Genre Buttons*/
function musicGenre(overview){
  const x = document.getElementById(overview);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*Search Button and API Fetch*/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': '500ea0140bmshf6f2c9a6da4a206p1519d9jsn9fc495bd022b'
	}
};

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const bandValue = document.getElementById('band-input').value
  fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q='+bandValue, options)
  // console.log(bandValue);
  .then(resp => resp.json())
  // .then(json => console.log(json))
  .then(json => {
    const bandLink = json.data[0]['artist']['link'];
    // console.log(bandLink);
    window.open(bandLink, '_self');
  })
  .catch(error => window.alert('There is no such band with this name!'));  
})

/*Pop-up / Favorite band Json server storing*/
const artistForm = document.getElementById('artist-form');

let name = document.getElementById('name')
let favoriteBand = document.getElementById('favoriteBand')

function favoriteArtist(event) {
  event.preventDefault();

  function hide() {  
    document.getElementById('popup').style.display = "none";
  };
  hide()

  return fetch('http://localhost:3000/favoriteArtist',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        favoriteBand: favoriteBand.value
      })
    })
    .catch(error => console.error(error));
}

artistForm.addEventListener('submit', favoriteArtist);

// onclick="hide()"
// function hide() {  
//   document.getElementById('popup').style.display = "none";
// };








/*Fetch Neil Young link try catch await async function*/
// async function fetchneilYoungAsync() {
// return fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/1379', options)
// }

// async function neilYoung(){
//   // async await modern js
//   try {
//       const resp = await fetchneilYoungAsync();
//       const json = await resp.json();
//       console.log(json);
//       window.alert(json.link);
//     } catch(error) {
//       window.alert('error');  
//   }
// }