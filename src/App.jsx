import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import IA from './components/IA/IA';
import SectionsTemplate from './components/SectionsTemplate/SectionsTemplate';

import 'animate.css';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Banner />
        <IA />
        <SectionsTemplate />
      </main>
    </>
  )
}

export default App
