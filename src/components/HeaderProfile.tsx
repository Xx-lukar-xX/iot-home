const profile_link: string = "profile";

const HeaderProfile: React.FC = () => {
    return (
        <header style={styles.header}>
            <a
                href="/app-view/profile.html"
                style={styles.link}
            >
                <div style={styles.imageContainer}>
                    <img
                        src={`/app-view/img/${profile_link}.svg`}
                        alt=""
                        style={styles.image}
                    />
                </div>
            </a>
        </header>
    );
};

const styles = {
    header: {
        position: "fixed" as "fixed",
        top: 0,
        right: 0,
        width: "auto",
        color: "#fff",
        display: "flex",
        alignItems: "center",
    },
    link: {
        color: "#fff",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "5px",
        display: "inline-flex",
        alignItems: "center",
    },
    imageContainer: {
        backgroundColor: "#fff",
        borderRadius: "50%",
        padding: "5px",
        border: "2px solid #000",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "30px",
        height: "30px",
    },
};

export default HeaderProfile;
