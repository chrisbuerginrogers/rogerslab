// return HTML for the partner website section
export default function Website(websites){
    return `
    <section id="websites">
        <div class="wrapper">
            <h1 class="title">Partner Websites</h1>
            <div class="website-list">
                ${WebsiteItems(websites)}
            </div>
        </div>
    </section>`
}

// return HTML for partner website items
export function WebsiteItems(websites){
    return websites.map(d=>`
        <div class="website-box">
            <img src="${d.teaser}" div class="website-teaser">
            <div class="info">
                <div class="project-overview">
                    <div class="project-title">
                        <a href="${d.link}" target="_blank"><strong>${d.title}</strong></a>
                    </div>
                    <div class="project-subtitle">
                        ${d.description}<br>
                    </div>
                    <img src="${d.logo}" div class="box-logo">
                </div>
            </div> 
        </div>
    `).join('');
}
