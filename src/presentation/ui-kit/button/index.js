import './styles.scss';

class Button {
    constructor(onClick, text) {
        this.onClick = onClick;
        this.text = text;
    }

    onClickHandler = () => {
        this.onClick();
    }

    render() {
        const button = document.createElement("button");

        addEventListener("click", this.onClickHandler);
        button.textContent = this.text;
        button.className = "start-button";

        return button;
    }
}

export { Button };