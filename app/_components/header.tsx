import { contactInfo } from "../config"
import { sections } from "../config"

const Header = () => {
  const NavListItems = () => {
    return sections.map(({ title, id }) => (
      <li key={id}>
        <a href={`#${id}`}>{title}</a>
      </li>
    ))
  }

  return (
    <header className="flex">
      <div className="flex-grow">
        <h1>{contactInfo.name}</h1>
        <span>{contactInfo.title}</span>
      </div>
      <nav>
        <ul className="flex flex-col">
          <NavListItems />
        </ul>
      </nav>
    </header>
  )
}
export default Header
