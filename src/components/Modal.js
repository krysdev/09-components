import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, actionBar, children }) {
  //
  // to prevent scrolling when the Modal is open we add "overflow: hidden" to the BODY tag
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    // and the clean up, when the modal is closed
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // (first argument is the JSX, second argument is the refernece to the placeholder)
  return ReactDOM.createPortal(
    <div>

      {/* this div is the whole gray background */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>

      {/* this div is the white content */}
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>

    </div>,
    document.querySelector('.container-for-modal')
  );
}

export default Modal;

/*
// to position the modal using the CSS 'fixed or absolute' and to reasure that it will never break
// we have to use createPortal
// and then this placeholder has to be added to the public/index.html file, right before the closing BODY tag:

  <div class="container-for-modal"></div>
 </body>
</html>

*/
