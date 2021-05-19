import Navbar from './Navbar.js';
import About from './About.js';
import Footer from './Footer.js';
import Projects, {ProjectItems, handleProjectFilter} from './Projects.js';

export default function MainPage(data){
    
    document.querySelector('.container').innerHTML = `
        
        ${About(data.about)}
        
        ${Projects(data.projects)}

        ${Footer(data.about)}

    `
}

