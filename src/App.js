import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>10000</Button>
      </div>
      <div>
        <Button danger outline>200</Button>
      </div>
      <div>
        <Button warning>30000000</Button>
      </div>
      <div>
        <Button secondary outline>40000</Button>
      </div>
      <div>
        <Button primary rounded>50000</Button>
      </div>
    </div>
  );
}

export default App;
