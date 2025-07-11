import LightEffect from '../components/lightEffect';
import InfoFixas from './info-fixas';
import Sobre from './sobre';
import Experiencia from './experiencia';

export default function Portfolio() {
  return (
    <> 
      <LightEffect/>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <InfoFixas/>

          <main id="content" className='pt-24 lg:w-[52%] lg:py-24'>
            <Sobre/>
            <Experiencia/>
          </main>
        </div>
      </div>
      </>
  );
}
