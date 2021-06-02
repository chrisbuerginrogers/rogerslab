import Navbar from './Navbar.js';
import About from './About.js';
import Footer from './Footer.js';
import People from './People.js';
import Projects, {ProjectItems, handleProjectFilter} from './Projects.js';


export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar('main', Object.keys(data))}
        ${About(data.about)}
        ${Projects(data.projects)}
        ${People(data.people)}
        ${Footer(data.about)}

    `
}

