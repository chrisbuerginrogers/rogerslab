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
            <br>
            <h1 class="title" style="margin-top: 40px; margin-bottom: 10px; text-align: left;">${d.title}</h1>
            <div class="project-subtitle" style="color: #000000;">
                ${d.subtitle}
        </div>
            
        <div class="project-tags" style="color: #a7a6a6;">
            By ${d.authors}
        </div>
        
        <div class="videoWrapper">
            ${GetEmbedVideo(d.video)}
        </div>
        
        <img src="${getImageURL(d.teaser)}" div class="project-teaser">
        <img src="${getImageURL(d.image1)}" div class="project-teaser">
        <img src="${getImageURL(d.image2)}" div class="project-teaser">
        <img src="${getImageURL(d.image3)}" div class="project-teaser">
        <div class="project-img">
            <img src="${d.smallimage1}" div class="project-img-holder">
            <img src="${d.smallimage2}" div class="project-img-holder">
        </div>
    

        <div class="row">
            <div class="col-9">
                <p class="project-desc">
                    ${d.desc}
                </p>
            </div>
            <div class="col-3">
                <p>
                    <strong>Links</strong> <br>
                    <a href="${d.link1}" target="_blank">${d.link1label}</a><br>
                    <a href="${d.link2}" target="_blank">${d.link2label}</a><br>
                    <a href="${d.link3}" target="_blank">${d.link3label}</a><br>
                    <a href="${d.link4}" target="_blank">${d.link4label}</a><br>
                    <a href="${d.link5}" target="_blank">${d.link5label}</a>
                </p>
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

export function GetEmbedVideo(video){
    if (video===""){
        return '';
    }else if (video.startsWith("http") && video.includes("drive.google.com")){
        // for Google Form auto-generated link
        const url = new URL(video); 
        const urlParams = new URLSearchParams(url.search);
        if (urlParams.get("id")){
            return `<iframe id="current" src="https://drive.google.com/file/d/${urlParams.get("id")}/preview" width="640" height="480"></iframe>`;
        }else{
            const id = video.split('/').slice(-2)[0];// second from last
            return `<iframe id="current" src="https://drive.google.com/file/d/${id}/preview" width="640" height="480"></iframe>`;
        }

    }else{
        return video;
    }
}
