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




export const Home = async (): Promise<string> => {
  
 const characters = await getData(null) as sourceCharacter;


  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};