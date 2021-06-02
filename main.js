
fetch('assets/data.json')
.then(resp=>resp.json())
.then(data=>{
    console.log('loaded:',data);
    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        Navbar('project')
        ProjectPage(project);
    }    
});



fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQka0KPDQVSEPrSg9So_KLygCMEzDKTY0zNPJJiK2zqQbN4ykQeNFkOl85DAs9l-xi3r0hMz9_qa1Ix/pub?gid=0&single=true&output=csv')
.then(resp=>resp.text())
.then(text=>{
    console.log(d3.csvParse(text));
})
fetch('assets/data.json')
.then(resp=>resp.json())
.then(d=>{
    console.log('loaded:',d);
    data = d;
    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        renderMainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        renderProjectPage(project);
    }
});

function renderNavbar(page, items){
    return `
    <nav>
        <ul>
           ${page==='project'? (
                `<li>
                    <a href=".">Go Back</a>
                </li>`
           ):(
                items.map(d=>
                `<li>
                    <a href="#${d}">${d.toUpperCase()}</a>
                </li>
                `).join('')
            )}
        </ul>
    </nav>`
}
function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderProjects(data.projects)}
    `
    document.querySelector('footer').innerHTML = `
        ${renderFooter(data.about)}
    `
}
function renderAbout(about){
    return `
    <section id="about">
        <h1 class="title">${about.name}</h1>
        <div class="row">
            <div class="col-12, textcenter">
                <p>
                    ${about.desc}
                </p>
                <img class="profile-img" src="${about.photo}"/>
                
            </div>
        </div >    
    </section>`
}

function renderMaterialIcon(type){
    switch (type){
        case 'Paper':
            return '<i class="far fa-file-alt"></i>';
        case 'Placemats':
            return '<i class="far fa-file-alt"></i>';
        case 'Video':
            return '<i class="fas fa-video"></i>';
        case 'Demo':
            return '<i class="fas fa-desktop"></i>';
    }
}

function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Research Focus</h1>
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
    </section>`;
}

function renderProjectItems(projects){
    return projects.map(d=>`
        <div class="row">
            <div class="col-6">
                <div class="project-title">
                    <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                </div>
                <div class="project-subtitle">
                    ${d.subtitle}<br>
                </div>
                <div class="project-authors">
                    ${d.authors}
                </div>
                <div class="project-tags">
                    ${d.tags.map(tag=>`
                        <span class="tag ${tag.toLowerCase()}">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
            </div> 
            <div class="col-6">
                <img src="${d.teaser}" div class="teaser">
            </div>
        </div>
    `).join('');
}




function renderProjectPage(project){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('project')}
        ${renderProjectDetail(project)}
    `
}

function renderProjectDetail(d){
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

function renderFooter(about){
    return `
    <div class="row">
        <div class="col-4">
        </div>
        <div class="col-4">
            <img class="footer-img" src="${about.ceeologo}"/>
        </div>
        <div class="col-4">
        </div>
    </div >    
    `
}
