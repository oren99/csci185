const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    let trackEndpoint = baseURL + "?";
    trackEndpoint += "q=" + term + "&type=track";
    console.log(trackEndpoint);
}

async function getAlbums (term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {
    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" + term + "&type=artist";

    const artistData = await fetch(artistEndpoint).then(response => response.json());
    console.log(artistData[0].name);
    console.log(artistData[0].image_url);

    document.querySelector('#artist-section h1').innerHTML = artistData[0].name;
    const html = `<img src=${artistData[0].image_url} />`;
    const artistCard = `
    <section class="artist-card" id="${artistData[0].id}">
        <div>
            <img src="${artistData[0].image_url}">
            <h2>${artistData[0].name}</h2>
            <div class="footer">
                <a href="${artistData[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`
;
    document.querySelector('#artist').innerHTML = artistCard;
    
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}