import fileIdFrom, {getImageURL} from './Images.js';
import MaterialIcon from './MaterialIcon.js';

// return HTML for project section
export default function Projects(projects){
    // decide what projects will show as default
    let defaultProjects = projects.filter(d=>{
        return d.status === 'Ongoing'; // filter by status
    });
    return `
    <section id="projects">
        <div class="wrapper">
            <h1 class="title">Current Projects</h1>
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
                ${ProjectItems(defaultProjects)}
            </div>
        </div>
    </section>`
}

// return HTML for project items
export function ProjectItems(projects){
    return projects.map(d=>`
        <a href="?project=${d.id}" class="project-box">
            <img src="${getImageURL(d.teaser)}" div class="teaser">
            <div class="info">
                <div class="project-overview">
                    <div class="project-tags">
                        ${d.year}
                    </div>
                    <div class="project-title">
                        <strong>${d.title}</strong>
                    </div>
                    <div class="project-subtitle">
                        ${d.subtitle}<br>
                    </div>
                </div>
            </div> 
        </a>
    `).join('');
}

// filter projects by tags
export function handleProjectFilter(data){
    let conds = document.querySelectorAll('.filter input[name="project-filter"]');
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        let checked = event.target.value; 
        if (checked==='all'){
            // show all projects except for private ones
            let AllProjects = data.projects.filter(d=>{
                return d.status !== 'Private'; 
            });
            document.querySelector('.project-list').innerHTML = ProjectItems(AllProjects);
        }else{
            let filtered = data.projects.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
        }
    }));
}