import MaterialIcon from './MaterialIcon.js';
export default function Projects(projects){
    return `
    
    <section id="projects">
        <div class="wrapper">
            <h1 class="title">CURRENT PROJECTS</h1>
  
            <div class="project-list">
                ${ProjectItems(projects)}
            </div>
        </div>
    </section>`;
}

export function ProjectItems(projects){
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


export function handleProjectFilter(data){
    console.log(data.projects[0].tags);

    let conds = document.querySelectorAll('.project-filter input[name="project-filter"]');
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

export function createTagArray(data){
    const tagArr = data.projects.tags.split(',');
    console.log(tagArr);
}

export function listToArray(fullString, separator) {
    const fullArray = [];

    if (fullString !== undefined) {
        if (fullString.indexOf(separator) == -1) {
            fullArray.push(fullString).split(separator);
        }
    }
    return fullArray;
}