// return HTML for footer section
export default function Footer(about){
    return `
    <footer>
        <div class="footer-content">
            <img src="${about[0].ceeologo}" class="logo">
        </div>
    </footer>`
}