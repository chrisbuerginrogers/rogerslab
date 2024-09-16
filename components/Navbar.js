// return HTML for navigation section
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
            <li>
                <a href="https://sites.tufts.edu/ceeoinstructions/" target="_blank" style="color: #c4c3d0">ADMIN</a>
            </li>
            `
            )}
        </ul>
    </nav>`
}

