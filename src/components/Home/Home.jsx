import React from 'react';
import Footer from '../Footer/Footer';
import salonindien from '../../assets/salonindien.jpg';
import langlois from '../../assets/langlois.jpg';

import './Home.css';

const Home = () =>(
  <>    
    <main className="home-main">
      <div className="home-container">
        <h1>Bienvenue aux origines du cinéma, 1895 - 1929</h1>

        <p>Le 28 décembre 1895 Louis Lumière organise la première projection cinématographique publique et payante au sous-sol du Grand Café à Paris. Le billet d'entrée donnait le droit de voir une dizaine de bandes de 50 secondes chacune. Quelques années plus tôt (1889), Edison avait aussi mis sur pied une présentation publique, mais celle-ci était gratuite et chacun devait défiler devant un kinétoscope, pour voir un film qui ne durait que trois secondes. Louis Lumière a d'ailleurs toujours reconnu les apports de Janssen, Muybridge et Marey, inventeurs de la chronophotographie, et de Reynaud, Edison et surtout Dickson. Une liste à laquelle il faudrait ajouter Louis Le Prince.</p>
        <img className="home-img" src={salonindien} alt='Grand Café à Paris' />
        <p>Dans la période qui a suivi, les films sont vendus au mètre à des forains grâce auxquels le cinéma touche surtout un public populaire. Ce sont des consommables dont on fait peu de cas quand ils ne servent plus. Ainsi, quand Méliès fait faillite en 1923, ses négatifs sont vendus au poids. Les sels argentiques sont récupérés et le celluloïd fondu pour la fabrication de talons de godillots destinés à l'armée. Seules les copies restées aux États-Unis sauvent du néant l'essentiel de l'œuvre du cinéaste français.</p>
        <img className="home-img" src={langlois} alt='Henri Langlois' />
        <p>Henri Langlois fait partie de ceux qui comprennent dans les années 1930 que le film muet est un patrimoine en péril, et décide de collecter tout ce qu'il peut trouver. Si Langlois s’emploie à conserver les films, il collecte également scénarios, photos, affiches, costumes, appareils, décors et maquettes, tout ce qui constitue la mémoire de l’art cinématographique. De ce collectage, naitrons la Cinémathèque Française d'une part, et le Musée du cinéma d'autre part. Langlois laisse derrière lui une idée forte, essentielle : le cinéma est un art majeur qu’il faut préserver, restaurer, exposer et programmer.</p>
        
        <p>Or de nos jours, on peut trouver de nombreux films de cette époque des origines sur Internet, leur âge vénérable les ayant fait passer dans le domaine public. Ce site vous propose de les rescencer et de les relier entre eux via leurs auteurs.</p>
      </div>
      <Footer />
    </main>
  </>
);

export default Home;
