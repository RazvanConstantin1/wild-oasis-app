import { useState } from "react";
import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((open) => !open)}>
          <CreateCabinForm
            onCloseModal={() => setIsOpenModal((open) => !open)}
          />
        </Modal>
      )}
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new Cabin
      </Button>
    </div>
  );
}

export default AddCabin;
