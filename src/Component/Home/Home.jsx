import Button from '../Button/Button';
import user from "../../assets/images/user.png";
import './Home.css';
export default function Home() {
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = document.getElementById("header")?.offsetHeight || 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 10;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
    return(
        <div id='home'>
            <div className="image">
                <img src={user} alt="Venkatesh" />
            </div>
            <div className="details">
                <h1>Hello, I'm Venkatesh</h1>
                <h3>Software Engineer</h3>
                <p>
                    A developer passionate about software testing and backend development.
                    I enjoy ensuring software quality while building reliable backend systems
                    and continuously learning new technologies.
                </p>
                <Button onClick={() => scrollToSection("project")}>View Projects</Button>
            </div>
        </div>
    );
}