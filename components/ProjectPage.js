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
                ${d.tags.map(tag=>`
                    <span class="tag ${tag.toLowerCase()}">
                        ${tag}
                    </span>
                `).join('')}
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
                ${d.publications.map(p=>`
                    <p>
                        <a href="${p.link}" target="_blank">
                        ${p.title}
                        </a>
                    </p>
                `).join('')}
            </div>
        </div>
    </section>

    <section id="related">
        <h2 class="title">RELATED PROJECTS</h2>

        <div class="project-list">
            ${d.related.map(r=>`
            <div class="project-box">
                <img div class="teaser" src="${r.teaser}">
                <div class="info">
                    <div class="project-overview">
                        <div class="project-title">
                            <a href="?project=${r.link}"><strong>${r.title}</strong></a>
                        </div>
                        <div class="project-subtitle">
                            ${r.desc}<br>
                        </div>
                        <div class="project-authors">
                        ${r.authors}
                        </div>
                    </div>
                </div>
            </div>
                `).join('')}
        </div>
    </section>
    `
}
