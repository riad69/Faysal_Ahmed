import React, { useEffect, useMemo, useState } from "react";
import { useGetLeadsQuery } from "../features/leads/LeadsApi";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa";
import { BarChart, Bar } from "recharts";
const Home = () => {
  const { data, isLoading } = useGetLeadsQuery();
  const [columns, setColumns] = useState([]);
  const [showcheckBox, setShowCheckBox] = useState(false);
  const [name, setName] = useState(false);
  const [projectLink, setprojectLink] = useState(false);
  const [projectID, setprojectId] = useState(false);
  const [projectBudget, setprojectBudget] = useState(false);
  const [bidValue, setBidvalue] = useState(false);
  const [status, setStatus] = useState(false);
  const [createdby, setCreatedBy] = useState(false);
  const [currentData, setCurrentData] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    let count = 0;
    let current = 0;
    if (data?.data) {
      for (let i = 0; i < data?.data.length; i++) {
        if (i % 25 === 0) {
          setChartData([...chartData, { count, current }]);

          count = 0;
          current = 0;
        } else {
          if (data?.data[i].deal_status == 1) {
            current = current + 1;
          }
        }
      }
    }
  }, [data]);

  useEffect(() => {
    if (name && columns.filter((data) => data.value === "Name").length < 1) {
      setColumns([...columns, { value: "Name", status: true }]);
    } else if (!name) {
      setColumns((current) => current.filter((col) => col.value !== "Name"));
    }
    if (
      projectLink &&
      columns.filter((data) => data.value === "Project Link").length < 1
    ) {
      setColumns([...columns, { value: "Project Link", status: true }]);
    } else {
      setColumns((current) =>
        current.filter((col) => col.value !== "Project Link")
      );
    }
    if (
      projectID &&
      columns.filter((data) => data.value === "Project ID").length < 1
    ) {
      setColumns([...columns, { value: "Project ID", status: true }]);
    } else {
      setColumns((current) =>
        current.filter((col) => col.value !== "Project ID")
      );
    }
    if (
      projectBudget &&
      columns.filter((data) => data.value === "Project Budget").length < 1
    ) {
      setColumns([...columns, { value: "Project Budget", status: true }]);
    } else {
      setColumns((current) =>
        current.filter((col) => col.value !== "Project Budget")
      );
    }
    if (
      bidValue &&
      columns.filter((data) => data.value === "Bid Value").length < 1
    ) {
      setColumns([...columns, { value: "Bid Value", status: true }]);
    } else {
      setColumns((current) =>
        current.filter((col) => col.value !== "Bid Value")
      );
    }
    if (
      status &&
      columns.filter((data) => data.value === "Status").length < 1
    ) {
      setColumns([...columns, { value: "Status", status: true }]);
    } else {
      setColumns((current) => current.filter((col) => col.value !== "Status"));
    }
    if (
      createdby &&
      columns.filter((data) => data.value === "Created By").length < 1
    ) {
      setColumns([...columns, { value: "Created By", status: true }]);
    } else {
      setColumns((current) =>
        current.filter((col) => col.value !== "Created By")
      );
    }
  }, [
    name,
    projectLink,
    projectID,
    projectBudget,
    bidValue,
    status,
    createdby,
  ]);
  return (
    <div className="h-full  m-8 relative">
      <div className="flex gap-2">
        <button className="bg-blue-600 p-2 rounded-md text-white flex gap-2 items-center">
          <FaPlus />
          Add Lead
        </button>
        <div className="flex grow justify-between">
          <button className="bg-white p-2 rounded-md text-black flex items-center gap-2">
            <FaFileExport />
            Export
          </button>
          <button
            className="bg-black p-2 rounded-md text-white"
            onClick={() => setShowCheckBox(!showcheckBox)}
          >
            <IoMenu />
          </button>
        </div>
      </div>
      {showcheckBox && (
        <div className="mt-2 flex flex-col items-center justify-center bg-white p-2 basis-full w-[200px] gap-2  fixed  right-8">
          <div className="flex items-center justify-between gap-2 w-full">
            <label htmlFor="">Name</label>
            <input
              type="checkbox"
              value={"Name"}
              onChange={(e) => {
                setName(e.target.checked);
              }}
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
      )}

      <div className="mx-auto my-5  ">
        {!isLoading && (
          <table className="table-auto mx-auto bg-white rounded-md">
            <thead>
              <tr className="text-slate-200">
                {columns.map((col) => {
                  return <th className="px-10 py-2">{col.value}</th>;
                })}
              </tr>
            </thead>
            <tbody className="divide-y ">
              {data.data.length > 0 &&
                data.data.map((lead) => {
                  return (
                    <tr key={lead.id} className="px-10 mt-1">
                      {columns.filter((data) => data.value === "Name").length >
                        0 && <td>{lead.client_name}</td>}
                      {columns.filter((data) => data.value === "Project Link")
                        .length > 0 && <td>{lead.project_link}</td>}
                      {columns.filter((data) => data.value === "project ID")
                        .length > 0 && <td>{lead.project_id}</td>}
                      {columns.filter((data) => data.value === "Project Budget")
                        .length > 0 && <td>{lead.actual_value}</td>}
                      {columns.filter((data) => data.value === "Bid Value")
                        .length > 0 && <td>{lead.bid_value}</td>}
                      {columns.filter((data) => data.value === "Status")
                        .length > 0 && (
                        <td className="p-1">
                          {lead.deal_status == 1 ? (
                            <span className="bg-green-400 p-1 text-white text-sm">
                              Converted to deal
                            </span>
                          ) : (
                            <span className="bg-red-400 p-1 text-white text-xs">
                              Not converted to deal
                            </span>
                          )}
                        </td>
                      )}
                      {columns.filter((data) => data.value === "Created By")
                        .length > 0 && <td>{lead.deadline}</td>}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
        {}
      </div>

      {chartData.length > 0 && (
        <BarChart width={500} height={500} data={chartData}>
          <Bar dataKey="current" fill="blue" />
        </BarChart>
      )}
    </div>
  );
};

export default Home;
