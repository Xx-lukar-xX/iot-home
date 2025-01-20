const footer_link: Array<string> = ["home", "devices", "settings"];

const FooterMenu: React.FC = () => {
    return (
        <footer style={styles.footer}>
            {footer_link.map((name, index) => (
            <a
                key={index}
                href={name === "home" ? "/index.html" : `/app-view/${name}.html`}
                style={{ ...styles.link, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <img
                src={`/app-view/img/${name}.svg`}
                alt={name}
                style={{ width: "auto", height: "auto", maxWidth: "30px", maxHeight: "30px" }}
                />
                <span>{name}</span> {/* あとでここ消すかも */}
            </a>
            ))}
        </footer>
    );
};

const styles = {
    footer: {
        position: "fixed" as "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(192, 168, 255, 1)",
        color: "#fff",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 20px",
    },
    link: {
        flex: 1,
        display: "flex",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        padding: "10px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        justifyContent: "center",
    },
};

export default FooterMenu;
