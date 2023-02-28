import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Important message
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open modal
      </Button>
      
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nobis perferendis! Nemo asperiores nesciunt minus architecto atque. Sed beatae maiores aliquam labore corrupti placeat tenetur itaque. Quas, facere. Doloribus, illum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nobis perferendis! Nemo asperiores nesciunt minus architecto atque. Sed beatae maiores aliquam labore corrupti placeat tenetur itaque. Quas, facere. Doloribus, illum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nobis perferendis! Nemo asperiores nesciunt minus architecto atque. Sed beatae maiores aliquam labore corrupti placeat tenetur itaque. Quas, facere. Doloribus, illum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde modi voluptate voluptates obcaecati laboriosam numquam mollitia non perspiciatis provident, sed, sit, aut animi iure totam qui excepturi consectetur? Est, molestias?
      </p>

      <Button primary onClick={handleClick}>
        Open modal
      </Button>

      {showModal && modal}

    </div>
  );
}

export default ModalPage;
