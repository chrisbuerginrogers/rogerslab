export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
                 <h1 class="title">${about.name}</h1>
                 <p>${about.desc}</p>
        </div >    
    </section>`
}