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
          {sections.map(({ title, id }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default Header
