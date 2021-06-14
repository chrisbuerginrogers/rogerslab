import MaterialIcon from './MaterialIcon.js';
export default function Projects(projects){
    return `
    
    <section id="projects">
        <div class="wrapper">
            <h1 class="title">CURRENT PROJECTS</h1>
            <div class="filter text-center">
                <input type="radio" name="project-filter" id="prj-item1" value="all" checked>
                <label for="prj-item1">All</label>

                <input type="radio" name="project-filter" id="prj-item2" value="featured" >
                <label for="prj-item2">Featured</label>
                
                <input type="radio" name="project-filter" id="prj-item3" value="graduate">
                <label for="prj-item3">Graduate</label>
                
                <input type="radio" name="project-filter" id="prj-item4" value="undergraduate">
                <label for="prj-item4">Undergraduate</label>
                
                <input type="radio" name="project-filter" id="prj-item5" value="active">
                <label for="prj-item5">Active</label>

                <input type="radio" name="project-filter" id="prj-item6" value="archaived">
                <label for="prj-item6">Archived</label>

                <input type="radio" name="project-filter" id="prj-item7" value="lego-funded">    
                <label for="prj-item7">LEGO-Funded</label>
            
            </div>
            <div class="project-list">
                ${ProjectItems(projects)}
            </div>
        </div>
    </section>`;
}

export function ProjectItems(projects){

    let getURL = (image)=>{
        if (image===""){
            return 'assets/global/project-placeholder.png';
        }else if (image.startsWith("http") && image.includes("drive.google.com")){
            let id = "";
            const url = new URL(image);
            id = templateIdFrom(url);
            console.log('id: ' + id);
            return `https://drive.google.com/uc?id=${id}`;
        }else{
            return image;
        }
    }
    return projects.map(d=>`
        <div class="project-box">
                <img src="${d.teaser}" div class="teaser">
                <div class="info">
                    <div class="project-overview">
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

export function templateIdFrom(url) {
    // let parts = url.match(/\/d\/(.+)\//);
    // if (parts == null || parts.length < 2) {
    //   return url;
    // } else {
    //   return parts[1];
    // }
}

export function stringToArray(projects){
    projects.map(d => {
        d.tags = d.tags.split(', ').map(s=>s.trim());
    })
}

export function handleProjectFilter(data){
    let conds = document.querySelectorAll('.filter input[name="project-filter"]');
    console.log(typeof conds);
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