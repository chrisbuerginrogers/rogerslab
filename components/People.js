import MaterialIcon from './MaterialIcon.js';
export default function People(people){
    return `
    
    <section id="people">
        <div class="wrapper">
            <h1 class="title">PEOPLE</h1>
            <div class="filter text-center">
                <input type="radio" name="people-filter" id="ppl-item1" value="all" checked>
                <label for="ppl-item1">All</label>
                
                <input type="radio" name="people-filter" id="ppl-item2" value="faculty" >
                <label for="ppl-item2">Faculty</label>

                <input type="radio" name="people-filter" id="ppl-item3" value="staff">
                <label for="ppl-item3">Staff</label>
                
                <input type="radio" name="people-filter" id="ppl-item4" value="graduate researchers">
                <label for="ppl-item4">Graduate Researchers</label>

                <input type="radio" name="people-filter" id="ppl-item5" value="visiting researchers">
                <label for="ppl-item5">Visiting Researchers</label>
                
                <input type="radio" name="people-filter" id="ppl-item6" value="interns">
                <label for="ppl-item6">Interns</label>
                
                <input type="radio" name="people-filter" id="ppl-item7" value="alumni">
                <label for="ppl-item7">Alumni</label>

            </div>
            <div class="people-list">
                ${PeopleItems(people)}
            </div>
        </div>

    </section>`;
}

export function PeopleItems(people){
    console.log(people);
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

export function handlePeopleFilter(data){
    let conds = document.querySelectorAll('.filter input[name="people-filter"]');
    console.log(typeof conds);
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        
        let checked = event.target.value; //Array.from(conds).filter(d=>d.checked).map(d=>d.value);
        if (checked==='all'){
            document.querySelector('.people-list').innerHTML = PeopleItems(data.people);
        }else{
            let filtered = data.people.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            console.log('filtered', filtered);
        
            document.querySelector('.people-list').innerHTML = PeopleItems(filtered);
        }
    
    }));
    
}