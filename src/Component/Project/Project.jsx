import './Project.css';
import ProjectApp from '../ProjectApp/ProjectApp';
import aran from "../../assets/images/aran.png";
import ArrayDeque from "../../assets/images/ArrayDeque.png";
import Hospital from "../../assets/images/Hospital.png";
import redbus from "../../assets/images/redbus.jpeg";
import calculator from "../../assets/images/Calculator.png";
import game from "../../assets/images/game.png";
import planet from "../../assets/images/planet.jpg";
export default function Project(){
    return(
        <div id="project">
            <h1>Projects</h1>
            <h2 className="section-title"></h2>
            <div className="project-row">
                <ProjectApp isCode={true} describe={"Aran360 is a platform for learning cybersecurity and practice your skills online."} tech={["MySQL","react","JAVA"] } image={aran} link={"https://github.com/Venkatesh-36/regexLab"}>Aran360</ProjectApp>
                <ProjectApp isCode={true} describe={"A custom implementation of an Array Deque data structure with all methods built from scratch."} tech={["JAVA"] } image={ArrayDeque} link={"https://github.com/Venkatesh-36/java-project-2_ArrayDeque"}>Array Deque</ProjectApp>
                <ProjectApp isCode={true} describe={"A system to manage patients, appointments, and hospital operations efficiently."} tech={["JAVA","MySQL"] } image={Hospital} link={"https://github.com/Venkatesh-36/Venkat-hub"} >Hospital Management System</ProjectApp>
                <ProjectApp isCode={true} describe={"A Node.js app showcasing an interactive planets page with dynamic planetary data."} tech={["node.js"] } image={planet} link={"https://github.com/Venkatesh-36/planet-Assignment"} >planets</ProjectApp>
                <ProjectApp isCode={true} isDemo={true} describe={"A calculator that performs both basic arithmetic operations and advanced scientific functions."} tech={["JS","HTML","CSS"] } image={calculator} linkDemo={"https://venkatr-ja0msw7g-8443.zcodecorp.in/project/Mini%20project/Calculator1/calculator1.html"} link={"https://github.com/Venkatesh-36/calculator"} >Calculator</ProjectApp>
                <ProjectApp isCode={true} isDemo={true} describe={"A static Radbus website built using HTML and CSS as part of a frontend training project."} tech={["HTML","CSS"] } image={redbus} linkDemo={"https://venkatr-i4lm3hsq-8443.zcodecorp.in/Learning/Project%20HTML%20&%20CSS/profile..html"} link={"https://github.com/Venkatesh-36/Redbus"} >Red Bus</ProjectApp>
                <ProjectApp isDemo={true} describe={"A Scratch game where a player escapes from many universes by solving challenges."} tech={["scratch"] } image={game} linkDemo={"https://scratch.mit.edu/projects/1193227060/"}>Multiverse Escape Game</ProjectApp>
            </div>
        </div>
    );
}