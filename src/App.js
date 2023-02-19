import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'l2kj5',
      label: '1 Can I use React on a project?',
      content:
        '1 You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'lk2j35lkj',
      label: '2 Can I use Javascript on a project?',
      content:
        '2You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'l1kj2i0g',
      label: '3 Can I use CSS on a project?',
      content:
        '3 You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
