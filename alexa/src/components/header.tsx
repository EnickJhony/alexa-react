export function Header() {
  return (
    <header>
      <nav className="max-w-[968px] h-[72px] ml-auto mr-auto flex justify-between items-center bg-zinc-300">
        <a href="#">Alexa</a>
        <div className="ml-auto">
          <ul className="flex gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contactme</a>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="ml-8">
          <a href="#">Lua</a>
        </div>
      </nav>
    </header>
  )
}
