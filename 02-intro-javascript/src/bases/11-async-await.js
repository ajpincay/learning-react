const getImage = async () => {

    try {
        const apiKey = 'gxH0iYdK1keIPXL7EmlgYO5ie5e3mOLj';
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

        const { data } = await response.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.log(error);
    }

}

getImage();
