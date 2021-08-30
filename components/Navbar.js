export default function Navbar(page, items){
    return `
    <nav class="navbar">
        <ul>
           ${page==='project'? (
                `<li class="nav-title">
                    <a href="/fetlab/#projects">Future Educational Technology Lab</a>
                </li>`
           ):(
            `<li>
                <a href="#about">ABOUT</a>
            </li>
            <li>
                <a href="#projects">PROJECTS</a>
            </li>
            <li>
                <a href="#people">PEOPLE</a>
            </li>
            `
            )}
        </ul>
    </nav>`
}

