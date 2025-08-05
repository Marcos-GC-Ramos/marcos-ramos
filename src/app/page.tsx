import InfoFixas from './portfolio/info-fixas';
import Sobre from './portfolio/sobre';
import Experiencia from './portfolio/experiencia';
import Skills from './portfolio/skills';
import Footer from './portfolio/footer';

// import LightEffect from '../components/lightEffect'; ainda nao esta pronto
// import Projetos from './portfolio/projetos'; ainda nao esta pronto
// import AnimacaoMR from './components/animacaoMR'; ainda nao esta pronto

export default function Home() {
  return (
    <> 
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <InfoFixas/>

          <main id="content" className='pt-24 lg:w-[52%] lg:py-24 scroll-smooth'>
            <Sobre/>
            <Skills />
            <Experiencia/>
            <Footer />
          </main>
        </div>
      </div>
      </>
  );
}
