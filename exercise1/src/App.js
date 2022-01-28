import './App.css';
import TopMenu from './components/TopMenu';
import HeadLines from './components/HeadLines';
import News from './components/News';

function App() {
  const HeadLinesContent = [
    {
      line: "PÄIVÄN TIMANTTI: Tutkija kertoo: Näin sota näkyy meissä edelleen",
      isAdv: false
    },
    {
      line: "PÄIVÄN TIMANTTI: Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19200 euroa",
      isAdv: false
    },
    {
      line: "MAINOS: Faktoille on nyt suurempi tarve kuin koskaan - Tutustu Hesariin 2 viikkoa maksutta",
      isAdv: true
    }];

  const NewsContent = [
    {
      img: "images/newsL1.png", 
      scale: "100%"
    },
    {
      img: "images/newsR1.png",
      scale: "100%"
    },
    {
      img: "images/newsL2.png", 
      scale: "100%"
    },
    {
      img: "images/newsR2.png", 
      scale: "100%"
    }];
  
  return (
    <div>
      <TopMenu />
      <div className='main-content'>
        <HeadLines listItems={HeadLinesContent}/>
        <News items={NewsContent}/>
      </div>
    </div>
  );
}

export default App;
