export default function About(about){
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