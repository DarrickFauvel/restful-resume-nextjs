const sections = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Experience",
    id: "experience",
  },
  {
    title: "Education",
    id: "education",
  },
  {
    title: "Contact",
    id: "contact",
  },
]

const Header = () => {
  return (
    <header>
      <div>
        <h1>Darrick Fauvel</h1>
        <span>Software Developer</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
