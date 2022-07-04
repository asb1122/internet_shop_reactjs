import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <main className="content p-40">
        <div className="d-flex alighn-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" width="25" alt="Search"/>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex">
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
