import './styles.scss';

class imageInit {

    constructor(url) {
        this.url = url;
    }

    render = () => {
        const image = document.createElement("img");

        image.src = this.url;
        image.className = "cartoon-init";

        return image;
    }
}

export { imageInit };