import MaterialIcon from './MaterialIcon.js';
import Navbar from './Navbar.js';




export default function ProjectPage(project){
    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project)}
    `
}


export function ProjectDetail(d){
    return `
    <section id="about" class="project-intro">
        <div class="text-wrapper">
            <h1 class="title" style="font-size: 3rem; margin-bottom: 10px; text-align: left; color: #FEFA91;">${d.title}</h1>
            <div class="project-subtitle" style="color: #fff;">
                ${d.subtitle}
            </div>
            
            <div class="project-tags"">
                ${d.tags}
            </div>
        
        </div>
    </section>


    <section id="overview">
        <div class="text-wrapper">
            <h2 class="title">OVERVIEW</h2>
            <p>
                ${d.desc}
            </p>
        </div>
    </section>

    <section id="publications">
        <div class="text-wrapper">
            <h2 class="title">PUBLICATIONS</h2>
            <div class="publication-list">
                ${d.publications}
            </div>
        </div>
    </section>

    <section id="related">
        <h2 class="title">RELATED PROJECTS</h2>

        <div class="project-list">
            
        </div>
    </section>
    `
}
