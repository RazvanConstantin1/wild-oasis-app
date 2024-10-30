import { useState } from "react";
import AddCabin from "../features/cabins/AddCabin.jsx";
import CabinTable from "../features/cabins/CabinTable.jsx";
import CabinTableOperations from "../features/cabins/CabinTableOperations.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import Button from "../ui/Button.jsx";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
