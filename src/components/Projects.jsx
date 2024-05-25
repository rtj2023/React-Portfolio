import pwgen from '../assets/generate_pw_snip.png'
import sched_snip from '../assets/scheduler_snip.png'
function Projects() {
    return (
      <div className="projects">
        <h1>My Projects</h1>
        <div className="project">
            <a href="https://rtj2023.github.io/GeneratePass/">
                <h2 className="project-name">Password Generator</h2>
            <img src={pwgen} alt="P1" />
            </a>
        </div>
        <div className="project">
            <a href="https://rtj2023.github.io/Work-Scheduler/">
                <h2 className="project-name">Scheduler</h2>
            <img src={sched_snip} alt="P2" />
            </a>
        </div>
        <div className="project">
            <a href="https://simplestepscode.com/javascript-quiz-tutorial/">
                <h2 className="project-name">Code Quiz</h2>
            <img src="https://github.com/rtj2023/Code-Quiz/raw/main/assets/screenshot_2.png" alt="P3" />
            </a>
        </div>
        <div className="project">
            <a href="https://a-lovely-little-texty-editor-5a594f349d8e.herokuapp.com/">
                <h2 className="project-name">Text Editor</h2>
            <img src="https://github.com/rtj2023/Text-editor/raw/main/Assets/01-manifest.png" alt="P4" />
            </a>
        </div>
      </div>
    );
  }

  export default Projects;
