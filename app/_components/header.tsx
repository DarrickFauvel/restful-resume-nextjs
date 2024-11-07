import { contactInfo } from "../config"
import { sections } from "../config"

const Header = () => {
  return (
    <header>
      <div>
        <h1>{contactInfo.name}</h1>
        <span>{contactInfo.title}</span>
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
