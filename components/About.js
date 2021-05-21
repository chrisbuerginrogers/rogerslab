export default function About(about){
    return `
    <section id="about" class="intro" style="width: 100%;">
        <h1 class="title">${about.name}</h1>
        <img class="teaser" src="${about.teaser}">
        <div class="row">
            <div class="col-12, textcenter">
                <p>
                    ${about.desc}
                </p>
                
                
            </div>
        </div >    
    </section>`
}