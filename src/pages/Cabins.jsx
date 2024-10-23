import { useEffect } from "react";
import { getCabins } from "../services/apiCabins.js";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://iqvrajdacthkopbozpeo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"></img>
    </Row>
  );
}

export default Cabins;
