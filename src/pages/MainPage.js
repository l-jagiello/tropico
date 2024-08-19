import React from 'react';
import { Link } from 'react-router-dom';
import italy from '../assets/italy.jpg';
import france from '../assets/france.jpg';
import greece from '../assets/greece.jpg';
import australia from '../assets/australia.jpg';
import japan from '../assets/japan.jpg';
import madagascar from '../assets/madagascar.jpg';
import { ReactComponent as AirplaneIcon } from '../assets/airplane.svg';
import { ReactComponent as BackpackIcon } from '../assets/backpack.svg';
import { ReactComponent as CloudIcon } from '../assets/cloud.svg';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={italy} className="d-block w-100" alt="Italy" />
            </div>
            <div className="carousel-item">
              <img src={france} className="d-block w-100" alt="France" />
            </div>
            <div className="carousel-item">
              <img src={greece} className="d-block w-100" alt="Greece" />
            </div>
            <div className="carousel-item">
              <img src={australia} className="d-block w-100" alt="Australia" />
            </div>
            <div className="carousel-item">
              <img src={japan} className="d-block w-100" alt="Japan" />
            </div>
            <div className="carousel-item">
              <img src={madagascar} className="d-block w-100" alt="Madagascar" />
            </div>
          </div>
        </div>

        <div id="text" className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">Najlepsze oferty wakacyjne!</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Z Tropico zaplanujesz swoje wakacje tak, by wycisnąć z twojego czasu jak najwięcej. Bierzemy na siebie obowiązek załatwienia
              Wam wszystkiego, co będzie Wam potrzebne do udanej podróży - w tym transport, zakwaterowanie, wyżywienie oraz przewodników.
            </p>
            <Link to="/offer" className="btn btn-primary btn-lg">
              Sprawdź naszą ofertę
            </Link>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>

        <div className="container px-4 py-5" id="featured-3">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <AirplaneIcon/>
              </div>
              <h2 className="fs-2 text-body-emphasis">Kompleksowe plany wycieczek</h2>
              <p>Odpowiadamy za 100% potrzebnego planowania - dzięki czemu nie musicie o tym myśleć w trakcie przed i w trakcie podróży.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <BackpackIcon/>
                </div>
              <h2 className="fs-2 text-body-emphasis">Staranie dobrane lokalizacje</h2>
              <p>Nasze wycieczki są tworzone tak, byście mogli poznać miejsce podróży z jak najlepszej strony.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <CloudIcon/>
              </div>
              <h2 className="fs-2 text-body-emphasis">Pełne przygotowanie na niespodzianki</h2>
              <p>Mamy przygotowane plany w przypadku niespodziewanych przeciwności - dzięki temu nic nie jest nas zaskoczyć.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
