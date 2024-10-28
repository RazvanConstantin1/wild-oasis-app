import { useState } from "react";
import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CabinTable from "./CabinTable.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      <Modal.Open opens="table">
        <Button>Add new table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((open) => !open)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal((open) => !open)}
//           />
//         </Modal>
//       )}
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new Cabin
//       </Button>
//     </div>
//   );
// }

export default AddCabin;
