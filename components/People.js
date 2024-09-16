import fileIdFrom, {getImageURL} from './Images.js';

// return HTML for people section
export default function People(people){
    // decide what people will show as default
    let defaultPeople = people.filter(d=>{
        return d.status === 'Member'; // filter by status
    });
    return `
    <section id="people">
        <div class="wrapper">
            <h1 class="title">People</h1>
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
                ${PeopleItems(defaultPeople)}
            </div>
        </div>
    </section>`;
}

// return HTML for people items
export function PeopleItems(people){
    // optimize headshot image source
    let getHeadshotURL = (image)=>{
        if (image===""){ 
            // in case of no image, show a placeholder image
            return 'assets/global/headshot-placeholder.png'; 
        }else if (image.startsWith("http") && image.includes("drive.google.com")){ 
            // in case of google link, extract a file id from it and create a proper url for jpg, png images
            let photoid = "";
            const photourl = new URL(image);
            photoid = fileIdFrom(photourl);
            return `https://drive.google.com/uc?id=${photoid}`; 
        }else{
            // in case of a local path or other image url, use the source as it is
            return image; 
        }
    }
    return people.map(d=>`
        <div class="people-item">
            <img class="people-thumbnail" src="${getHeadshotURL(d.photo)}">
            <div class="overlay">
                <div class="people-interests">
                    ${d.interests}
                </div>
            </div>
            
            <div class="people-name">
                <a href="${d.link}" target="_blank">${d.name}</a>
            </div>
            
            <div class="people-position">
                ${d.affiliation}
            </div>
        </div>
    `).join('');
}

// return HTML for alumni items
export function AlumniItems(people){
    // optimize headshot image source
    let getHeadshotURL = (image)=>{
        if (image===""){
            return 'assets/global/headshot-placeholder.png'; // in case of no image, show a placeholder image
        }else if (image.startsWith("http") && image.includes("drive.google.com")){
            let photoid = "";
            const photourl = new URL(image);
            photoid = fileIdFrom(photourl);
            return `https://drive.google.com/uc?id=${photoid}`; // in case of google link, extract a file id from it and create a proper url for jpg, png images
        }else{
            return image; // in case of a local path or other image url, use the source as it is
        }
    }
    return people.map(d=>`
        <div class="alumni-item">
            <img class="alumni-thumbnail" src="${getHeadshotURL(d.photo)}">
            <div class="people-name">
                <a href="${d.link}" target="_blank">${d.name}</a>
            </div>
            
            <div class="people-position">
                ${d.tags}
            </div>
        </div>
    `).join('');
}

// filter people by tags
export function handlePeopleFilter(data){
    let conds = document.querySelectorAll('.filter input[name="people-filter"]');
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        let checked = event.target.value;
        if (checked==='all'){
            let filtered = data.people.filter(d=>{
                return d.status === 'Member';
            });
            document.querySelector('.people-list').innerHTML = PeopleItems(filtered);
        }else if (checked==='alumni') {
            let filtered = data.people.filter(d=>{
                return d.status === 'Alumni';
            });
            console.log(filtered);
            document.querySelector('.people-list').innerHTML = AlumniItems(filtered);
        }else{
            let filtered = data.people.filter(d=>{
                return d.tags.some(tag=>checked === tag.toLowerCase());
            });
            document.querySelector('.people-list').innerHTML = PeopleItems(filtered);
        }
    }));
}