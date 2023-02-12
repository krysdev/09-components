import libClassNames from 'classnames';

//////// how classnames lib works ////////
// const finalClassName1 = libClassNames('class1', 'class2', 'class3');
// const finalClassName2 = libClassNames('class0 class00', {
//   class1: true,
//   class2: false,
//   'class-3': true, // key with "-" has to be inside qoutes
// });
// console.log(finalClassName1);
// console.log(finalClassName2);
/////////////////////////////////////////

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = libClassNames('flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary === true,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  });

  // console.log(classes);

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'It is not allowed to combine props: primary, secondary, success, warning, danger '
      );
    }
  },
};

// We want to use only one of the props, so 'count' can't be greater than 1.
// When there is no prop given from the parent component then the prop is 'undefined'.
// Number(true)        --> 1
// !true -> false
// !!true -> true
//
// Number(undefined)   --> NaN, but...
// Number(!!undefined) --> 0, because
// !undefined  -> true
// !!undefined -> false

export default Button;
