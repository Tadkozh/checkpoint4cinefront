import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NoPage.css';

const NoPage = () => (
  <>
    <Header />
    <main className="global-container">
      <div className="global-content">
        <p>Oops, this page does not exist!</p>
      </div>
    </main>
    <Footer />
  </>
);

export default NoPage;