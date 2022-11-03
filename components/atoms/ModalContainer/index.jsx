import { Modal } from "react-bootstrap";

function ModalContainer(props) {
  return (
    <>
      <Modal {...props}>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalContainer;
