import "../assets/styles/layout.scss";
import Nav from "./Nav";

//Tar i mot children som prop, og dette sørger for at alt innhold jeg har mellom Layout-taggen i App.jsx (Routes, Route) blir vist inne i <main>-elementet. 
export default function Layout({children}) {
  return (
    //Komponentet Nav.jsx importeres og brukes for å vise navigasjonsmenyen. Sørger for at det kan gjenbrukes på alle sider som bruker Layout.jsx-komponentet. 
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
