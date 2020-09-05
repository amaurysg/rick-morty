class Characters {
  constructor({ name }) {
    this.name = name;
    this.$characterNameContainer = document.querySelector(
      "#character-name-container"
    );
    this.render();
  }

  buildName() {
    return `
          <div class="character-name">
          <h2>${this.name}</h2>
        </div>
    `;
  }
  buildType() {
    return `
        <div class="character-type">
          <h2>${this.type}</h2>
        </div>
    `;
  }

  render() {
    this.$characterNameContainer.innerHTML = this.buildName();
  }
}

export default characters;
