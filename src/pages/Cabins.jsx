import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import Button from "../ui/Button.jsx";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        {showForm && <CreateCabinForm />}
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new Cabin
        </Button>
      </Row>
    </>
  );
}

export default Cabins;
