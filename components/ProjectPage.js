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
    let getImageURL = (image)=>{
        if (image.startsWith("http") && image.includes("drive.google.com")){
            let id = "";
            const url = new URL(image);
            id = fileIdFrom(url);
            // console.log('id: ' + id);
            return `https://drive.google.com/uc?id=${id}`;
        }else{
            return image;
        }
    }
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
                    </div>
                </div>
                <div class="col-7">
                    <br>
                    ${EmbedVideo(d.video)}
                    <img src="${getImageURL(d.teaser)}" div class="project-teaser">
                    <img src="${getImageURL(d.image1)}" div class="project-teaser">
                    <img src="${getImageURL(d.image2)}" div class="project-teaser">
                    <img src="${getImageURL(d.image3)}" div class="project-teaser">
                    <img src="${getImageURL(d.image4)}" div class="project-teaser">
                    <img src="${getImageURL(d.image5)}" div class="project-teaser">
                </div>
            </div>
                
        </div>
    </section>
    `
}

export function fileIdFrom(url) {
    url.toString();
    let match = url.href.match(/([a-z0-9_-]{25,})[$/&?]/i);
    return match[1];
    // 1. /([a-z0-9_-]{25,})[$/&?]/i
    // 2. /\/d\/(.+)\//
}

export function EmbedVideo(video){
    console.log(video);
    if (video===""){
        return '';
    }else if (video.startsWith("http") && video.includes("drive.google.com")){
        // for Google Form auto-generated link
        const url = new URL(video); 
        const urlParams = new URLSearchParams(url.search);
        if (urlParams.get("id")){
            return `
                <div class="videoWrapper">
                    <iframe id="current" src="https://drive.google.com/file/d/${urlParams.get("id")}/preview" width="640" height="480"></iframe>
                </div>
            `
        }else{
            const id = video.split('/').slice(-2)[0];// second from last
            return `
                <div class="videoWrapper">
                    <iframe id="current" src="https://drive.google.com/file/d/${id}/preview" width="640" height="480"></iframe>
                </div>
            `
        }

    }else{
        return `
            <div class="videoWrapper">
                ${video}
            </div>
        `
    }
}

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
            </div>
        `
    }

}

export function LinkButton(label, link) {
    if (label===""){
        return '';
    }else {
        return `
            <a class="link-button" href="${label}" target="_blank">${link}</a>
        `
    }
}