import {getHash} from '../utils/getHash';
import {getData} from '../utils/getData';

interface sourceCharacter {
    info:    Info;
    results: Result[];
}

interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

interface Result {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:    string;
    url:    string;
    created:    string;

}

interface Location {
    name: string;
    url:  string;
}

export const Character = async (): Promise<string>  => {

   const id = getHash();
  const character = await getData(id) as Result;

    const view = `
    
    <div class="Character-inner">
        <article class="Characters-card">
            <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last Location: ${character.location.name}</h3>
      </article>
    </div>
    
    `
    return view;
}

