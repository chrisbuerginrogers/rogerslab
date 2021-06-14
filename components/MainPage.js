import Navbar from './Navbar.js';
import About from './About.js';
import Website from './Websites.js';
import Footer from './Footer.js';
import People, {handlePeopleFilter} from './People.js';
import Projects, {ProjectItems, stringToArray, handleProjectFilter} from './Projects.js';


export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar('main', Object.keys(data))}
        ${About(data.about)}
        ${Website(data.websites)}
        ${Projects(data.projects)}
        ${People(data.people)}
        ${Footer(data.about)}
    `
    stringToArray(data.projects);
    stringToArray(data.people);
    handleProjectFilter(data);
    handlePeopleFilter(data);
}

