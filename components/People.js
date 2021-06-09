import MaterialIcon from './MaterialIcon.js';
export default function People(people){
    return `
    
    <section id="people">
        <div class="wrapper">
            <h1 class="title">PEOPLE</h1>
          
            <div class="people-list">
                ${PeopleItems(people)}
            </div>
        </div>

    </section>`;
}

export function PeopleItems(people){
    return people.map(d=>`
        
        <div class="people-item">
            <img class="people-thumbnail"  src="${d.photo}">

            
            <div class="people-name">
                <a href="${d.link}" target="_blank">${d.name}</a>
            </div>
            
            <div class="people-position">
                ${d.affiliation}
            </div>
            <div class="people-interests">
                ${d.interests}
            </div>
        </div>
        `).join('');
}

export function AlumniItems(people){
    return people.map(d=>`
        
        <div class="people-item">
            <img class="people-thumbnail"  src="${d.photo}">

            
            <div class="people-title">
                <a href="?people=${d.id}">${d.alumni-name}</a>
            </div>
            
            <div class="people-short-desc">
                ${d.position}
            </div>
        </div>
        `).join('');
}

export function handlePeopleFilter(data){

    
    let conds = document.querySelectorAll('.filter input[name="people-filter"]');
    console.log(typeof conds);
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        
        let checked = event.target.value; //Array.from(conds).filter(d=>d.checked).map(d=>d.value);
        if (checked==='all'){
            document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
        }else{
            let filtered = data.projects.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            // console.log('filtered', filtered);
        
            document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
        }
    
    }));
    
}