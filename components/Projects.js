import MaterialIcon from './MaterialIcon.js';
export default function Projects(projects){
    let FeaturedProjects = projects.filter(d=>{
        return d.tag2 === 'Ongoing';
    });
    return `
    
    <section id="projects">
        <div class="wrapper">
            <h1 class="title">CURRENT PROJECTS</h1>
            <div class="filter text-center">
                <input type="radio" name="project-filter" id="prj-item1" value="all">
                <label for="prj-item1">All</label>

                <input type="radio" name="project-filter" id="prj-item2" value="featured">
                <label for="prj-item2">Featured</label>

                <input type="radio" name="project-filter" id="prj-item3" value="ongoing" checked>
                <label for="prj-item3">Ongoing</label>

                <input type="radio" name="project-filter" id="prj-item4" value="completed">
                <label for="prj-item4">Completed</label>
                
                <input type="radio" name="project-filter" id="prj-item5" value="graduate">
                <label for="prj-item5">Graduate</label>
                
                <input type="radio" name="project-filter" id="prj-item6" value="undergraduate">
                <label for="prj-item6">Undergraduate</label>
                
            </div>
            <div class="project-list">
                ${ProjectItems(FeaturedProjects)}
            </div>
        </div>
    </section>`;
}

export function ProjectItems(projects){
    let getTeaserURL = (image)=>{
        if (image===""){
            return 'assets/global/project-placeholder.png';
        }else if (image.startsWith("http") && image.includes("drive.google.com")){
            let id = "";
            const url = new URL(image);
            id = templateIdFrom(url);
            // console.log('id: ' + id);
            return `https://drive.google.com/uc?id=${id}`;
        }else{
            return image;
        }
    }
    return projects.map(d=>`
        <div class="project-box">
                <img src="${getTeaserURL(d.teaser)}" div class="teaser">
                <div class="info">
                    <div class="project-overview">
                        <div class="project-tags">
                            ${d.year}
                        </div>
                        <div class="project-title">
                            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                        </div>
                    <div class="project-subtitle">
                        ${d.subtitle}<br>
                    </div>
                    
                </div>
            </div> 
        </div>
        `).join('');
}

export function Tag(tags){

}
export function templateIdFrom(url) {
    url.toString();
    let match = url.href.match(/([a-z0-9_-]{25,})[$/&?]/i);
    return match[1];
    // 1. /([a-z0-9_-]{25,})[$/&?]/i
    // 2. /\/d\/(.+)\//
}

export function stringToArray(projects){
    projects.map(d => {
        d.tags = d.tags.split(', ').map(s=>s.trim());
    })
}

export function handleProjectFilter(data){
    let conds = document.querySelectorAll('.filter input[name="project-filter"]');
    // console.log(typeof conds);
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        
        let checked = event.target.value; //Array.from(conds).filter(d=>d.checked).map(d=>d.value);
        if (checked==='all'){
            console.log('all clicked');
            document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
        }else{
            let filtered = data.projects.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            console.log('filtered', filtered);
        
            document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
        }
    
    }));
    
}