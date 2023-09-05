import React from "react";
import Add from "./add";
import Delete from "./delete";
import Modify from "./modify";
function Hotel() {
  return (
    <div class="d-flex">
      <Add />
      <Modify />
      <Delete />
    </div>
  );
}

export default Hotel;
