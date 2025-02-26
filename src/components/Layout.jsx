import '../assets/styles/layout.scss';
import Nav from './Nav';

export default function Layout() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main id="mainElement">
                {/* Dynamisk innhold genereres her: */}
            </main>
        </>
    );
}