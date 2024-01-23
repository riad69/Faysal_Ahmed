import React, { useState } from "react";

const Checkbox = () => {
  const [name, setName] = useState(false);
  const [projectLink, setprojectLink] = useState(false);
  const [projectID, setprojectId] = useState(false);
  const [projectBudget, setprojectBudget] = useState(false);
  const [bidValue, setBidvalue] = useState(false);
  const [status, setStatus] = useState(false);
  const [createdby, setCreatedBy] = useState(false);

  return (
    <div className="mt-2 flex flex-col items-center justify-center bg-white p-2 basis-full w-[200px] gap-2 ml-auto">
      <div className="flex items-center justify-between gap-2 w-full">
        <label htmlFor="">Name</label>
        <input
          type="checkbox"
          value={"Name"}
          onChange={(e) => setName(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <label htmlFor="">Project Link</label>
        <input
          type="checkbox"
          value={"Project Link"}
          onChange={(e) => setprojectLink(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <label htmlFor="">Project ID</label>
        <input
          type="checkbox"
          value={"Project ID"}
          onChange={(e) => setprojectId(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        {" "}
        <label htmlFor="">Project Budget</label>
        <input
          type="checkbox"
          value={"Project Budget"}
          onChange={(e) => setprojectBudget(e.target.checked)}
        />
      </div>

      <div className="flex items-center justify-between gap-2 w-full">
        {" "}
        <label htmlFor="">Bid Value</label>
        <input
          type="checkbox"
          value={"Bid Value"}
          onChange={(e) => setBidvalue(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        {" "}
        <label htmlFor="">Status</label>
        <input
          type="checkbox"
          value={"Status"}
          onChange={(e) => setStatus(e.target.checked)}
        />
      </div>
      <div className="flex items-center justify-between gap-2 w-full">
        <label htmlFor="">Created By</label>
        <input
          type="checkbox"
          value={"Created By"}
          onChange={(e) => setCreatedBy(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default Checkbox;
