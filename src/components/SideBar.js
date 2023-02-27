import Link from './Link';

function SideBar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/button' },
    { label: 'Modal', path: '/modal' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-5" // additional classes passed to Link
        activeLinkClassName="font-bold border-l-4 border-blue-500 pl-2" // css if link active
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default SideBar;
