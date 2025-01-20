const footer_link: Array<{ name: string, url: string }> = [
    { name: "home", url: "/app-view/home.html" },
    { name: "devices", url: "/app-view/devices.html" },
    { name : "settings", url: "/app-view/settings.html" },
]

const Footer = () => {
    return (
        <footer>
            <ul>
                {footer_link.map((link) => (
                    <li key={link.name}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;

