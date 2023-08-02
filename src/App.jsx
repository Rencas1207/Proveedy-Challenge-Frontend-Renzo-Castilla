import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import IA from './components/IA/IA';
import Create from './components/Create/Create';
import ShareEmbed from './components/ShareEmbed/ShareEmbed';
import Analyze from './components/Analyze/Analyze';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Banner />
        <IA />
        <Create />
        <ShareEmbed />
        <Analyze />
      </main>
    </>
  )
}

export default App
