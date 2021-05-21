export default function Navbar(page, items){
    return `
    <nav class="navbar">
        <ul>
           ${page==='project'? (
                `<li>
                    <a href="/#projects"><strong>Playful Engineering Technology Lab</strong></a>
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
