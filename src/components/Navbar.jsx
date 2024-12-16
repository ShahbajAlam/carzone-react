export default function Navbar() {
    return <nav className="navbar" id="navbar">
        <div className="logo" id="logo">Carzone</div>
        <ul className="menu" id="menu">
            <li id="homeLink">Home</li>
            <li id="serviceLink">Service</li>
            <li id="featuredLink">Featured Cars</li>
            <li id="newLink">New Cars</li>
            <li id="contactLink">Contact</li>
        </ul>
    </nav>
}