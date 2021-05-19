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
    <section>
        <h1 class="title" style="margin-bottom: 5px;">${d.title}</h1>
        <div class="project-subtitle" style="text-align: center;">
            ${d.subtitle}
        </div>
        <div class="project-authors" style="text-align: center;">
            ${d.authors}
        </div>
        <div class="project-tags" style="text-align: center;">
            ${d.tags.map(tag=>`
                <span class="tag ${tag.toLowerCase()}">
                    ${tag}
                </span>
            `).join('')}
        </div>
        <img class="project-teaser" src="${d.teaser}">
        
        <div class="project-desc">
            <p>
                ${d.desc}
            </p>
        </div>
        <div class="project-materials">
            ${d.materials.map(m=>`
                <span>
                    <a href="${m.path}" target="_blank">${renderMaterialIcon(m.label)} 
                    ${m.label}
                    </a>
                </span>
            `).join('')}
        </div>
    </section>
    `
}

