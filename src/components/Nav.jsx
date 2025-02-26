import '../assets/styles/nav.scss';
export default function Nav() {
    return (
        <nav>
            <button onClick={() => buttonClick(this, 'HTML')} className="subject active">HTML</button>
            <button onClick={() => buttonClick(this, 'CSS')} className="subject">CSS</button>
            <button onClick={() => buttonClick(this, 'JavaScript')} className="subject">JavaScript</button>
            <button onClick={() => buttonClick(this, 'React')} className="subject">React</button>
            <button onClick={() => buttonClick(this, 'Sanity and headless CMS')} className="subject">Sanity and headless CMS</button>
        </nav>
    );
}