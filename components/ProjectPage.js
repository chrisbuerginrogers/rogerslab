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
        
        
        
        <div class="project-intro">
            <div class="text-wrapper">
                <h1 class="title" style="margin-bottom: 5px; text-align: left">${d.title}</h1>
                <div class="project-subtitle">
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
        </div>


        <div class="text-wrapper">
            <div class="project-desc">
                <p>
                    ${d.desc}
                </p>
            </div>
        </div>
    </section>
    <section>
            
           
        <div class="text-wrapper">
            <h2 class="subtitle">Related Projects</h2>
        
            <div class="project-list">
                ${d.related.map(r=>`
                <div class="project-box">
                    <img src="${r.teaser}" div class="teaser">
                    <div class="info">
                        <div class="project-overview">
                            <div class="project-title">
                                <a href="?project=${r.link}"><strong>${r.title}</strong></a>
                            </div>
                            <div class="project-subtitle">
                                ${r.desc}<br>
                            </div>
                            <buttom>Learn More</buttom>
                        </div>
                    </div>
                </div>
                    `).join('')}
            </div>

            <div class="text-wrapper">
                <h2 class="subtitle">Publications</h2>
                <div class="publication-list">
                    ${d.publications.map(p=>`
                        <span>
                            <a href="${p.link}" target="_blank"> 
                            ${p.title}
                            </a>
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
        
    </section>
    `
}
