import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NoPage.css';

const NoPage = () => (
  <>
    <Header />
    <main className="nopage-container">
      <div className="nopage-content">
        <p>Oops, this page does not exist!</p>
      </div>
    </main>
    <Footer />
  </>
);

export default NoPage;