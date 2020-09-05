// DEFINIMOS API //
class API {
  async getCharacter(id) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    return data;
  }
}

//CONSTRUIMOS CLASES PERSONAJES//
class Characters {
  constructor({ image, name, status, species, origin, episode }) {
    this.image = image;
    this.name = name;
    this.status = status;
    this.species = species;
    this.origin = origin;
    this.episode = episode;
    this.$characterImageContainer = document.querySelector(
      "#character-image-container"
    );
    this.$characterNameContainer = document.querySelector(
      "#character-name-container"
    );
    this.$characterStatusContainer = document.querySelector(
      "#character-status-container"
    );
    this.$characterSpeciesContainer = document.querySelector(
      "#character-species-container"
    );
    this.$characterOriginContainer = document.querySelector(
      "#character-origin-container"
    );
    this.$characterEpisodesContainer = document.querySelector(
      "#character-episodes-container"
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
  buildImage() {
    return `
        <div ="character-image">
        <img src="${this.image}
        " alt=""/>
        </div>
    `;
  }
  buildStatus() {
    return `
    <div>
    <h2>${this.status}</h2>
    </div>
    `;
  }
  buildSpecies() {
    return `
        <div class="character-species">
          <h2>${this.species}</h2>
        </div>
    `;
  }
  buildOrigin() {
    return `
        <div class="character-origin">
          <h2>${this.origin.name}</h2>
        </div>
    `;
  }
  buildEpisodes() {
    return `
        <div class="character-episodes">
          <h2>${this.episode.length}</h2>
        </div>
    `;
  }

  render() {
    this.$characterNameContainer.innerHTML = this.buildName();
    this.$characterImageContainer.innerHTML = this.buildImage();
    this.$characterStatusContainer.innerHTML = this.buildStatus();
    this.$characterSpeciesContainer.innerHTML = this.buildSpecies();
    this.$characterOriginContainer.innerHTML = this.buildOrigin();
    this.$characterEpisodesContainer.innerHTML = this.buildEpisodes();
  }
}

// METODOS //

const apiPrincipal = new API();
let contador = 3;
const $botonNext = document.querySelector("#load-next");
$botonNext.addEventListener("click", async () => {
  const nuevoCharacter = await apiPrincipal.getCharacter(++contador);
  new Characters(nuevoCharacter);
});
const $botonPrev = document.querySelector("#load-prev");
$botonPrev.addEventListener("click", async () => {
  const nuevoCharacter = await apiPrincipal.getCharacter(--contador);
  new Characters(nuevoCharacter);
});

async function initApp(initCharacterId) {
  const nuevoCharacter = await apiPrincipal.getCharacter(initCharacterId);
  console.log(nuevoCharacter);
  new Characters(nuevoCharacter);
}
initApp(contador);
