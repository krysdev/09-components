import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import libClassNames from 'classnames';

function Link({ to, children, className, activeLinkClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = libClassNames(
    'text-blue-500',
    className,
    currentPath === to && activeLinkClassName //if equal then apply active link class
  );

  const handleClick = (e) => {
    //to add a functionality of CTRL+click (open in new tab)
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // otherwise
    e.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a href={to} className={classes} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}

export default Link;
