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
    <section id="content" class="project-intro">
        <div class="content-wrapper">
            <br>
            <h1 class="title" style="font-size: 3rem; margin-bottom: 10px; text-align: left;">${d.title}</h1>
            <div class="project-subtitle" style="color: #000000;">
                ${d.subtitle}
        </div>
            
        <div class="project-tags" style="color: #a7a6a6;">
            By ${d.authors}
        </div>
        
        <div class="videoWrapper">
        ${d.video}
        </div>
        
        <img src="${d.teaser}" div class="project-teaser">
        <div class="project-img">
            <img src="${d.image1}" div class="project-img-holder">
            <img src="${d.image2}" div class="project-img-holder">
        </div>
        <img src="${d.image3}" div class="project-teaser">

        <div class="row">
            <div class="col-9">
                <p class="project-desc">
                    ${d.desc}
                </p>
                <br>
            </div>
            <div class="col-3">
                <p>
                    <strong>Links</strong> <br>
                    <a href="${d.link1}" target="_blank">${d.link1label}</a><br>
                    <a href="${d.link2}" target="_blank">${d.link2label}</a><br>
                    <a href="${d.link3}" target="_blank">${d.link3label}</a><br>
                    <a href="${d.link4}" target="_blank">${d.link4label}</a>
                </p>
            </div>
        </div>
    
    </section>
    `
}
