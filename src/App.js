import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>10000</Button>
      </div>
      <div>
        <Button danger outline>20000</Button>
      </div>
      <div>
        <Button warning>30000</Button>
      </div>
      <div>
        <Button secondary outline>40000</Button>
      </div>
    </div>
  );
}

export default App;
