import Navbar from './Navbar.js';
import Footer from './Footer.js';
import fileIdFrom, {getImageURL} from './Images.js';
import MaterialIcon from './MaterialIcon.js';

// create project detail page
export default function ProjectPage(project, about){
    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project)}
        ${Footer(about)}
    `
}

// return HTML for project content section
export function ProjectDetail(d){
    return `
    <section id="content" class="project-intro">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-5">
                    <div class="project-content">
                        <h1 class="title" style="margin-top: 40px; margin-bottom: 30px; text-align: left;">${d.title}</h1>
                        <div class="project-subtitle" style="color: #000000;">
                            ${d.subtitle}
                        </div>
                        ${ProjectLinks(d)}
                        <div class="project-authors" style="color: #a7a6a6;">
                            By ${d.authors}
                        </div>
                        <p class="project-desc">
                            ${d.desc}
                        </p>
                        ${CodeSnippet(d.code)}
                    </div>
                </div>
                <div class="col-7">
                    <br>
                    ${EmbedVideo(d.video)}
                    <img src="${getImageURL(d.teaser)}" div class="project-teaser">
                    ${ProjectImages(d)}
                </div>
            </div>
                
        </div>
    </section>
    `
}

// return HTML to display video
export function EmbedVideo(video){
    console.log(video);
    if (video===""){ // in case of no video
        return '';
    }else if (video.startsWith("http") && video.includes("drive.google.com")){ // in case of google link
        const url = new URL(video); 
        const urlParams = new URLSearchParams(url.search);
        if (urlParams.get("id")){ // google form auto-generated link
            return `
                <div class="videoWrapper">
                    <iframe id="current" src="https://drive.google.com/file/d/${urlParams.get("id")}/preview" width="640" height="480"></iframe>
                </div>
            `
        }else{
            const id = fileIdFrom(video); // other google links
            return `
                <div class="videoWrapper">
                    <iframe id="current" src="https://drive.google.com/file/d/${id}/preview" width="640" height="480"></iframe>
                </div>
            `
        }
    }else{ // in case of embed code
        return `
            <div class="videoWrapper">
                ${video}
            </div>
        `
    }
}

// return HTML to display images
// @improve shorten the code
export function ProjectImages(d) {
    if (d.image1==="") {
        return '';
    }else if (d.image2==="") {
        return `
            <img src="${getImageURL(d.image1)}" div class="project-teaser">
            <p class="caption">${d.image1caption}</p>
        `
    }else if (d.image3==="") {
        return `
            <img src="${getImageURL(d.image1)}" div class="project-teaser">
            <p class="caption">${d.image1caption}</p>
            <img src="${getImageURL(d.image2)}" div class="project-teaser">
            <p class="caption">${d.image2caption}</p>
        `
    }else if (d.image4==="") {
        return `
            <img src="${getImageURL(d.image1)}" div class="project-teaser">
            <p class="caption">${d.image1caption}</p>
            <img src="${getImageURL(d.image2)}" div class="project-teaser">
            <p class="caption">${d.image2caption}</p>
            <img src="${getImageURL(d.image3)}" div class="project-teaser">
            <p class="caption">${d.image3caption}</p>
        `
    }else if (d.image5==="") {
        return `
            <img src="${getImageURL(d.image1)}" div class="project-teaser">
            <p class="caption">${d.image1caption}</p>
            <img src="${getImageURL(d.image2)}" div class="project-teaser">
            <p class="caption">${d.image2caption}</p>
            <img src="${getImageURL(d.image3)}" div class="project-teaser">
            <p class="caption">${d.image3caption}</p>
            <img src="${getImageURL(d.image4)}" div class="project-teaser">
            <p class="caption">${d.image4caption}</p>
        `
    }else if (d.image6==="") {
        return `
            <img src="${getImageURL(d.image1)}" div class="project-teaser">
            <p class="caption">${d.image1caption}</p>
            <img src="${getImageURL(d.image2)}" div class="project-teaser">
            <p class="caption">${d.image2caption}</p>
            <img src="${getImageURL(d.image3)}" div class="project-teaser">
            <p class="caption">${d.image3caption}</p>
            <img src="${getImageURL(d.image4)}" div class="project-teaser">
            <p class="caption">${d.image4caption}</p>
            <img src="${getImageURL(d.image5)}" div class="project-teaser">
            <p class="caption">${d.image5caption}</p>
        `
    }else if (d.image6!=="") {
        return `
            <img src="${getImageURL(d.image1)}" div class="project-teaser">
            <p class="caption">${d.image1caption}</p>
            <img src="${getImageURL(d.image2)}" div class="project-teaser">
            <p class="caption">${d.image2caption}</p>
            <img src="${getImageURL(d.image3)}" div class="project-teaser">
            <p class="caption">${d.image3caption}</p>
            <img src="${getImageURL(d.image4)}" div class="project-teaser">
            <p class="caption">${d.image4caption}</p>
            <img src="${getImageURL(d.image5)}" div class="project-teaser">
            <p class="caption">${d.image5caption}</p>
            <img src="${getImageURL(d.image6)}" div class="project-teaser">
            <p class="caption">${d.image6caption}</p>
        `
    }
}

// return HTML to add buttons
export function ProjectLinks(d) {
    if (d.link1==="") {
        return '';
    }else {
        return `
            <div class="project-link">
                ${LinkButton(d.link1, d.link1label)}
                ${LinkButton(d.link2, d.link2label)}
                ${LinkButton(d.link3, d.link3label)}
                ${LinkButton(d.link4, d.link4label)}
                ${LinkButton(d.link5, d.link5label)}
                ${LinkButton(d.link5, d.link6label)}
            </div>
        `
    }
}

// add a button only if there is a link
export function LinkButton(label, link) {
    if (label===""){
        return '';
    }else {
        return `
            <a class="link-button" href="${label}" target="_blank">${link}</a>
        `
    }
}

// return HTML to print python code with syntax highlighting
export function CodeSnippet(code){
    if (code==="") {
        return '';
    }else {
        return `
        <h4>Code</h4>
            <pre><code class="python">${code}</code></pre>
        `;
    }
}