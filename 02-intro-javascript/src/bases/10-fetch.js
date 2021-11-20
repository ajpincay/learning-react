const apiKey = 'gxH0iYdK1keIPXL7EmlgYO5ie5e3mOLj';

const request = fetch(`http://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

request
    .then( response => response.json() )
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch(console.warn)