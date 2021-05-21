export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
                 <h1 class="title" style="padding-top: 60px;">${about.name}</h1>
                 <p>${about.desc}</p>
        </div >    
    </section>`
}