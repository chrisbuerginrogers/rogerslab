export default function Navbar(page, items){
    return `
    <nav class="navbar">
        <ul>
           ${page==='project'? (
                `<li class="nav-title">
                    <a href="/rogerslab/#projects">FUTURE EDUCATIONAL TECHNOLOGY TECHNOLOGY LAB</a>
                </li>`
           ):(
                items.map(d=>
                `<li>
                    <a href="#${d}">${d.toUpperCase()}</a>
                </li>
                `).join('')
            )}
        </ul>
    </nav>`
}
