import {Header} from '../templates/header';
import {Home} from '../pages/home';
import {Character} from '../pages/character';
import {Error404} from '../pages/error404';
import {getHash} from "../utils/getHash";
import {resolveRoutes} from "../utils/resolveRoutes";

//interface example {

  // '/': ()=>Promise<string>;
  //'/:id': ()=>Promise<string>;
  //'/contact': string;
// }

// const routes: example = {
  //'/': Home,
  //'/:id': Character,
  //'/contact': 'Contact',
//};


const routes: { [key: string]: any }   = {
'/': Home,
'/:id': Character,
 '/contact': 'Contact',
};

export const router = async () => {
  
const content = document.getElementById('content')  as HTMLElement;
const header: HTMLElement|null = document.getElementById('header');


function solution(el: HTMLElement) {
  return el;
}

if (header != null) {
 
  solution(header);

  header.innerHTML = await Header();
};

let hash = getHash();

const route = await resolveRoutes(hash);


let render = routes[route] ? routes[route] : Error404;
content.innerHTML = await render();

};

