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
                <a href="?people=${d.id}">${d.name}</a>
            </div>
            
            <div class="people-position">
                ${d.position}
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