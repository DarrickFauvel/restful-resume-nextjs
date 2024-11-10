import { contactInfo } from "../config"
import { sections } from "../config"

const Header = () => {
  return (
    <header className="flex">
      <div className="flex-grow">
        <h1>{contactInfo.name}</h1>
        <span>{contactInfo.title}</span>
      </div>
      <nav>
        <ul className="flex flex-col">
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
