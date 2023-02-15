import Button from './components/Button';
import { GoBell, GoDatabase, GoAlert, GoMail } from 'react-icons/go';

function App() {
  const handleEvent = () => {
    console.log('!! works !!');
  };

  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleEvent}>
          <GoBell />
          10000
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleEvent}>
          <GoDatabase />
          2001
        </Button>
      </div>
      <div>
        <Button warning className={'mb-5'}>
          <GoAlert />
          30000000
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoMail />
          40000
        </Button>
      </div>
      <div>
        <Button primary rounded>
          50000
        </Button>
      </div>
    </div>
  );
}

export default App;
