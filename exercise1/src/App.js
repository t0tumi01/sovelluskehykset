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
      img: "images/newsLeft.png", 
      scale: "100%"
    },
    {
      img: "images/newsRight.png",
      scale: "100%"
    }];
  
  return (
    <div>
      <TopMenu />
      <HeadLines listItems={HeadLinesContent}/>
      <News items={NewsContent}/>
    </div>
  );
}

export default App;
