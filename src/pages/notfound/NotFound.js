import { Link } from 'react-router-dom';
import './notfound.css'


export default function NotFound() {
    return (
            <main className='notfound'>
                <div className='notfoundInfo'>
                    <h1 className='notfoundNumber'>404</h1>
                    <h2 className='notfoundMessage'>Oups! La page que vous demandez n'existe pas.</h2>
                    <Link to="/" className='linkAccueil'>Retourner sur la page d’accueil</Link>
                </div>
            </main>
    )
}