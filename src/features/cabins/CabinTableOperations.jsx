import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort By name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort By name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort By price (low first)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort By price (high first)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort By capacity (low first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort By capacity (high first)",
          },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOperations;
