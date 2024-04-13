import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { FaBars,FaClipboardList} from 'react-icons/fa';
import { IoMdLogOut } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
import './Manager.css';



function Manager() {
  const [activePart, setActivePart] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [managerList, setManagerList] = useState([]);
  const [setPopupMessage] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  

  const [popupStyle]=useState("");

  const handleAddSite = () => {
    // Assuming all fields are filled
    if (name && mobileNo && mobileNo && name && email) {
      alert("Site Engg Added Successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleAddClient = () => {
    // Assuming all fields are filled
    if (name && email && mobileNo) {
      alert("Client Added Successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleAddProject = () => {
    // Assuming all fields are filled
    if (name && name && email && mobileNo) {
      alert("New project Added Successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleBlock = (name) => {
    setManagerList(
      managerList.map((manager) =>
        manager.name === name ? { ...manager, blocked: true } : manager
      )
    );
    setPopupMessage(`${name} is blocked.`);
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "100vh",
          width: "250px",
          backgroundColor: "#3466aa",
          paddingTop: 0,
          marginTop:0,
          color:"white"
        }}
      >

<Navbar expand="lg" style={{width: '100%', marginTop:"20px" }}>
      <Container>
      <ul>
        <li>
        <div>
       
       <FaBars onClick={toggleSidebar} style={{ cursor: "pointer" , marginLeft:"150px"}} />
          </div>
        </li>
        {/* <li>
        <div style={{ marginTop:"50px"}}>
            <h3>Admin</h3>
          </div>
        </li> */}
           
            <li>
            <NavDropdown title={<><IoPersonAdd />       Add</>} id="basic-nav-dropdown" style={{ margin: "10px 0", marginTop: "40px", marginLeft: "10px", width: "90%", padding: "10px", fontSize: "20px" }}>
              <NavDropdown.Item onClick={() => setActivePart("siteEngg")} className={activePart === "siteEngg" ? "activeButton" : ""}>Site Engg</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setActivePart("clients")} className={activePart === "clients" ? "activeButton" : ""}>Client</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setActivePart("projects")} className={activePart === "projects" ? "activeButton" : ""}>Projects</NavDropdown.Item>
            </NavDropdown>
              </li>
              <li>
              <NavDropdown title={<><FaClipboardList />       Lists</>} id="basic-nav-dropdown" style={{ margin: "10px 0", marginTop: "40px", marginLeft: "10px", width: "90%", padding: "10px", fontSize: "20px" }}>
              <NavDropdown.Item onClick={() => setActivePart("siteEngg1")} className={activePart === "siteEngg1" ? "activeButton" : ""}>Site Engg</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setActivePart("clients1")} className={activePart === "clients1" ? "activeButton" : ""}>Client</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setActivePart("projects1")} className={activePart === "projects1" ? "activeButton" : ""}>Projects</NavDropdown.Item>
            </NavDropdown>
              </li>
              <li>      
            <NavDropdown title={<><BiSolidReport/>      Reports</>} id="basic-nav-dropdown" style={{ margin: "10px 0", marginTop: "40px", marginLeft: "10px", width: "90%", padding: "10px", fontSize: "20px"}}>
              <NavDropdown.Item>Create</NavDropdown.Item>
              <NavDropdown.Item>Send</NavDropdown.Item>
              <NavDropdown.Item >History</NavDropdown.Item>
            </NavDropdown>
              </li>
              <li>
                <Nav.Link style={{margin: "10px", marginTop: "40px", marginLeft: "10px", width: "90%", padding: "10px", fontSize: "20px"}}>
                  <IoMdLogOut style={{ marginRight: "5px" }} />
                  Logout
                </Nav.Link>
              </li>
              </ul>
        </Container>
      </Navbar>



      </div>
      <div style={{ flex: 1, padding: "20px" }}>  


 {/* add site engg*/}
{activePart === "siteEngg" && (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", width: "500px" }}>
      <h2 style={{ marginLeft: "120px" }}>Add siteEngg</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="mobileNo" style={{ display: "block", marginBottom: "5px" }}>Site Engg Code:</label>
          <input
            type="text"
            id="siteEnggCode"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="mobileNo" style={{ display: "block", marginBottom: "5px" }}>Mobile No:</label>
          <input
            type="text"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Qualification:</label>
          <input
            type="text"
            id="qualification"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => 
              setEmail(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        
        <button
          type="button"
          onClick={handleAddSite}
          className={activePart === "manager" ? "activeButton" : ""}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            marginTop: "20px"
          }}
        >
          Add Site Engg
        </button>
        <div className={popupStyle}></div>
      </form>
    </div>
  </div>
)}

{/*add cilent*/}
{activePart === "clients" && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
            <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", width: "500px" }}>
              <h2 style={{ marginLeft: "120px" }}>Add Client</h2>
              <form>
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", padding: "5px" }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
                  <input  type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "5px" }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label htmlFor="mobileNo" style={{ display: "block", marginBottom: "5px" }}>Mobile No:</label>
                  <input
                    type="text"
                    id="mobileNo"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    style={{ width: "100%", padding: "5px" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddClient}
                  className={activePart === "manager" ? "activeButton" : ""}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "20px"
                  }}
                >
                  Add Client
                </button>
                <div className={popupStyle}></div>
              </form>
            </div>
          </div>
          )}

          {/* add Project*/}
{activePart === "projects" && (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", width: "500px" }}>
      <h2 style={{ marginLeft: "120px" }}>Add Project</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Billing Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Billing Address:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
           </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email Id:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="mobileNo" style={{ display: "block", marginBottom: "5px" }}>Office Contact No:</label>
          <input
            type="text"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            style={{ width: "100%", padding: "5px" }}
          />
        </div>
        <button
          type="button"
          onClick={handleAddProject}
          className={activePart === "manager" ? "activeButton" : ""}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            marginTop: "20px"
          }}
        >
          Add Project
        </button>
        <div className={popupStyle}></div>
      </form>
    </div>
  </div>
)}

        {/* list of Site engg */}

        {activePart === "siteEngg1" && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", width: "800px" }}>
              <h2 style={{ marginLeft: "250px" }}>Site Engg List</h2>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "10px" }}>Name</th>
                    <th style={{ padding: "10px" }}>Site Engg Code</th>
                    <th style={{ padding: "10px" }}>Mobile No</th>
                    <th style={{ padding: "10px" }}>Qualification</th>
                    <th style={{ padding: "10px" }}>Email</th>
                    <th style={{ padding: "10px" }}>Block</th>
                  </tr>
                </thead>
                <tbody>
                  {managerList.map((manager, index) => (
                    <tr key={index}>
                      <td style={{ padding: "10px" }}>{manager.name}</td>
                      <td style={{ padding: "10px" }}>{manager.email}</td>
                      <td style={{ padding: "10px" }}>{manager.mobileNo}</td>
                      <td style={{ padding: "10px" }}>
                        {!manager.blocked && (
                          <button
                            onClick={() => handleBlock(manager.name)}
                            style={{
                              padding: "5px 10px",
                              fontSize: "12px",
                              backgroundColor: "red",
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer"
                            }}
                          >
                            Block
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* list of Clients */}
        {activePart === "clients1" && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", width: "800px" }}>
              <h2 style={{ marginLeft: "250px" }}>Clients List</h2>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "10px" }}>Name</th>
                    <th style={{ padding: "10px" }}>Email</th>
                    <th style={{ padding: "10px" }}>Mobile No</th>
                    <th style={{ padding: "10px" }}>Block</th>
                  </tr>
                </thead>
                <tbody>
                  {managerList.map((manager, index) => (
                    <tr key={index}>
                      <td style={{ padding: "10px" }}>{manager.name}</td>
                      <td style={{ padding: "10px" }}>{manager.email}</td>
                      <td style={{ padding: "10px" }}>{manager.mobileNo}</td>
                      <td style={{ padding: "10px" }}>
                        {!manager.blocked && (
                          <button
                            onClick={() => handleBlock(manager.name)}
                            style={{
                              padding: "5px 10px",
                              fontSize: "12px",
                              backgroundColor: "red",
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer"
                            }}
                          >
                            Block
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* list of projects */}

        {activePart === "projects1" && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", width: "800px" }}>
              <h2 style={{ marginLeft: "250px" }}>Project List</h2>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "10px" }}>Billing Name</th>
                    <th style={{ padding: "10px" }}>Billing Address</th>
                    <th style={{ padding: "10px" }}>Email Id</th>
                    <th style={{ padding: "10px" }}>Office Contact No</th>
                    <th style={{ padding: "10px" }}>Block</th>
                  </tr>
                </thead>
                <tbody>
                  {managerList.map((manager, index) => (
                    <tr key={index}>
                      <td style={{ padding: "10px" }}>{manager.name}</td>
                      <td style={{ padding: "10px" }}>{manager.email}</td>
                      <td style={{ padding: "10px" }}>{manager.mobileNo}</td>
                      <td style={{ padding: "10px" }}>
                        {!manager.blocked && (
                          <button
                            onClick={() => handleBlock(manager.name)}
                            style={{
                              padding: "5px 10px",
                              fontSize: "12px",
                              backgroundColor: "red",
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer"
                            }}
                          >
                            Block
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


    </div>
    </div>
  );
}

export default Manager;













