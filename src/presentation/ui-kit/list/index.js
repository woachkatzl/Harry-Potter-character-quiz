class List {

  constructor(categories, results) {
    this.categories = categories;
    this.results = results;
  }

  render() {
    const listElement = document.createElement("ul");

    for (let i = 0; i < this.categories.length; i++) {
      const listItem = document.createElement("li");

      listItem.textContent = this.categories[i] + ": " + this.results[i];

      listElement.appendChild(listItem);
    }

    return listElement;
  }
}

export { List };

