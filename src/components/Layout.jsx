import "../assets/styles/layout.scss";
import Nav from "./Nav";

export default function Layout({children}) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main id="mainElement">
        {children}
      </main>
    </>
  )
}
