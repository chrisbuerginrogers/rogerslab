import Navbar from './Navbar.js';
import About from './About.js';
import Website from './Websites.js';
import Footer from './Footer.js';
import Projects, {handleProjectFilter} from './Projects.js';
import People, {handlePeopleFilter} from './People.js';

// create mainpage (home)
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

// convert comma-separated string to node-set
export function stringToArray(data){
    data.map(d => {
        d.tags = d.tags.split(', ').map(s=>s.trim());
    })
}