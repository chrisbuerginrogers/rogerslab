export default function Websites(websites){
    return `

    <section id="websites">
        <div class="wrapper">
            <h1 class="title">WEBSITES</h1>
            <div class="project-list">
                ${WebsiteItems(websites)}
            </div>
        </div>
    </section>`;
}

export function WebsiteItems(websites){
    return websites.map(d=>`
        <div class="website-box">
                <img src="${d.teaser}" div class="teaser">
                <div class="info">
                    <div class="project-overview">
                        <div class="project-title">
                            <a href="${d.link}"><strong>${d.title}</strong></a>
                        </div>
                    <div class="project-subtitle">
                        ${d.description}<br>
                    </div>
                    
                </div>
            </div> 
        </div>
        `).join('');
}
