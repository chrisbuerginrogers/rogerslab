import MaterialIcon from './MaterialIcon.js';
export default function Projects(projects){
    return `
    
    <section id="projects">
        <div class="wrapper">
            <h1 class="title">CURRENT PROJECTS</h1>
            <div class="filter text-center">
                <input type="radio" name="project-filter" id="item1" value="all" checked>
                <label for="item1">All</label>

                <input type="radio" name="project-filter" id="item2" value="featured" >
                <label for="item2">Featured</label>
                
                <input type="radio" name="project-filter" id="item3" value="graduate">
                <label for="item3">Gradudate</label>
                
                <input type="radio" name="project-filter" id="item4" value="undergraduate">
                <label for="item4">Undergradudate</label>
                
                <input type="radio" name="project-filter" id="item5" value="active">
                <label for="item5">Active</label>

                <input type="radio" name="project-filter" id="item6" value="archaived">
                <label for="item6">Archived</label>

                <input type="radio" name="project-filter" id="item7" value="lego-funded">    
                <label for="item7">LEGO-Funded</label>
            
            </div>
            <div class="project-list">
                ${ProjectItems(projects)}
            </div>
        </div>
    </section>`;
}

export function ProjectItems(projects){
    console.log(projects);
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