import libClassNames from 'classnames';
// see Button.js for more about 'classnames' library.

// passed PROPS:
// children - between <></> tagas
// className - additional classes (merged through 'classnames' library)
// ...rest - all other/additional props
function PillReusableComponent({ children, className, ...rest }) {
  const classesAltogether = libClassNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div
      {...rest}
      className={classesAltogether}
    >
      {children}
    </div>
  );
}

export default PillReusableComponent;
