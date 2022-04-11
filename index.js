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

/*Search Button and Fetch*/

// document.getElementById('search-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const band = document.getElementById('band-input').value
//   console.log(band);
//   window.open('https://google.com', '_blank');
// })

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

/*Fetch Neil Young link*/
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

/*API Fetch*/

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
// 		'X-RapidAPI-Key': '500ea0140bmshf6f2c9a6da4a206p1519d9jsn9fc495bd022b'
// 	}
// };

// async function fetchBobDAsync() {
//   return fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/808', options)
// }

// async function BobD(){
//   // async await modern js
//   try{
//       const resp = await fetchBobDAsync();
//       const json = await resp.json();
//       console.log(json);
//       window.alert(json.link);

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