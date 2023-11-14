import logo from './logo.svg';
import './App.css';
function Catatan1(props) {
  return (
    <>
      <div class="card p-2 mb-2 bg-info bg-gradient">
        <div className="card-header d-flex justify-content-between">
          <h5 class="card-title">w11vocasia</h5>
          <div class="card-text fs-5">{props.dates}</div>
        </div>
        <p class="card-text fs-5 text-start">
          vocasia keren 
        </p>
      </div>
    </>
  );
}
function Catatan2(props) {
  return (
    <>
      <div class="card p-2 mb-2 bg-info bg-gradient">
        <div className="card-header d-flex justify-content-between">
          <h5 class="card-title">vocasia good</h5>
          <div class="card-text fs-5">{props.dates}</div>
        </div>
        <p class="card-text fs-5 text-start">vocasia best</p>
      </div>
    </>
  );
}
function Catatan3(props) {
return (
    <>
      <div class="card p-2 mb-2 bg-info bg-gradient">
        <div className="card-header d-flex justify-content-between">
          <h5 class="card-title">vocasia good</h5>
          <div class="card-text fs-5">{props.dates}</div>
        </div>
        <p class="card-text fs-5 text-start">
          vocasia best
        </p>
      </div>
    </>
  );
}
function App() {
  const name='n.mutiarahma';
  return (
    <div className="App card p-3">
      <h1 class="text-center mb-3">Todo List {name}</h1>
      
      <div>
        <Catatan1 dates="08/11/2023" />
        <Catatan2 dates="09/11/2023" />
        <Catatan3 dates="10/11/2023" />
      </div>
    </div>
  );
}

export default App;
