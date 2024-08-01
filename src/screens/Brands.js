import React, { useState, useEffect, useCallback } from "react";
// import { Table } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const brandDataRow = [
  { name: "Lakme", email: "Lakme@gmail.com", phone: "919140453894", subscription: "Platinum", campaigns: 10, createdAt: "2024-07-01" },
  { name: "Lakme2", email: "Lakme2@gmail.com", phone: "910000000000", subscription: "Gold", campaigns: 15, createdAt: "2024-06-01" },
  { name: "Lakme3", email: "Lakme3@gmail.com", phone: "911111111111", subscription: "Gold", campaigns: 1, createdAt: "2024-05-01" },
  { name: "Lakme aj4", email: "Lakme4@gmail.com", phone: "911234567890", subscription: "Silver", campaigns: 155, createdAt: "2024-04-01" },
  { name: "Jordan, Watkins and Alexander", email: "greenjacob@taylor-townsend.biz", phone: "(686)672-3258x6799", subscription: "Gold", campaigns: 97, createdAt: "2023-10-04" },
  { name: "Griffin-Soto", email: "lukemcguire@wright.com", phone: "070-636-5844", subscription: "Platinum", campaigns: 43, createdAt: "2024-01-04" },
  { name: "Gonzales, Gutierrez and Phelps", email: "juliahensley@sanchez-gomez.com", phone: "0201001181", subscription: "Silver", campaigns: 23, createdAt: "2023-10-21" },
  { name: "Perez and Sons", email: "xsmith@hernandez.org", phone: "001-069-216-8494x6347", subscription: "Gold", campaigns: 167, createdAt: "2024-01-20" },
  { name: "Bartlett-Paul", email: "ybauer@zimmerman.net", phone: "001-574-997-0077x1690", subscription: "Silver", campaigns: 59, createdAt: "2024-03-06" },
  { name: "Clark PLC", email: "rpark@koch.com", phone: "8022548665", subscription: "Gold", campaigns: 83, createdAt: "2023-11-04" },
  { name: "Love, Shelton and Gregory", email: "allenconnie@berry.com", phone: "611-816-3091x03593", subscription: "Gold", campaigns: 170, createdAt: "2024-02-16" },
  { name: "Gardner-Simmons", email: "epugh@jenkins.com", phone: "7589408517", subscription: "Gold", campaigns: 22, createdAt: "2024-05-26" },
  { name: "Green-Murphy", email: "christophergomez@blankenship.com", phone: "001-931-346-5612x3411", subscription: "Gold", campaigns: 108, createdAt: "2023-10-10" },
  { name: "Miller-Best", email: "tyler76@chambers.biz", phone: "324-104-0971x37038", subscription: "Silver", campaigns: 105, createdAt: "2024-01-14" },
  { name: "Nike", email: "justdoit@nike.com", phone: "+911234567890", subscription: "Platinum", campaigns: 105, createdAt: "2024-07-30" }
];

const columns = [
  {
    name: "Name",
    selector: row => row.name,
    sortable: true,
  },
  {
    name: "Email Address",
    selector: row => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: row => row.phone,
    sortable: true,
  },
  {
    name: "Subscription",
    selector: row => row.subscription,
    sortable: true,
  },
  {
    name: "No of Campaigns Done",
    selector: row => row.campaigns,
    sortable: true,
  },
];

export default function Brands() {
  const [data, setData] = useState(brandDataRow);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const navigate = useNavigate();

  const handleSortChange = useCallback((sortOrder) => {
    setSortOrder(sortOrder);
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });
    setData(sortedData);
  }, [data]);

  // useEffect(() => {
  //   handleSortChange(sortOrder);
  // }, [sortOrder, handleSortChange]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    setRowsPerPage(newPerPage);
    setCurrentPage(page);
  };

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (row) => {
    navigate(`/all-brands/brand-info/${row.name}`);
  };

  return (
    <div className="brandsPage">
      <div className="welcomDiv">
        <h4 className="h4Style">Welcome To - Bartergram</h4>
        <button className="POCbutton">
          Assign Brand POC
          <FaArrowRight />
        </button>
      </div>
      <h4 className="h4Style" style={{ marginTop: "20px" }}>
        All Brands
      </h4>
      <div className="hotSectionTableHome">
        <div className="tableControls">
          <select onChange={(e) => handleSortChange(e.target.value)}  value={sortOrder}>
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </select>
          <input
            type="text"
            placeholder="Type email or name"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationServer
          paginationTotalRows={filteredData.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
          onSort={handleSortChange}
          sortServer
          highlightOnHover
          pointerOnHover
          onRowClicked={handleRowClick}
        />
      </div>
    </div>
  );
}
