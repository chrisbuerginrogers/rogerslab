import MaterialIcon from './MaterialIcon.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';



export default function ProjectPage(project, about){
    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project)}
        ${Footer(about)}
    `
}


export function ProjectDetail(d){
    return `
    <section id="about" class="project-intro">
        <div class="text-wrapper">
            <br>
            <h1 class="title" style="font-size: 3rem; margin-bottom: 10px; text-align: left;">${d.title}</h1>
            <div class="project-subtitle" style="color: #000000;">
                ${d.subtitle}
            </div>
            
            <div class="project-tags" style="color: #a7a6a6;">
                By ${d.authors}
            </div>
            <img src="${d.teaser}" div class="project-teaser">
        </div>
    </section>


    <section id="overview">
        <div class="text-wrapper">
            <h2 class="title" style="text-align: left;">OVERVIEW</h2>
            <p>
                ${d.desc}
            </p>
        </div>
    </section>

    <section id="publications">
        <div class="text-wrapper">
            <div class="publication-list">
                ${d.publications}
            </div>
        </div>
    </section>

    `
}
