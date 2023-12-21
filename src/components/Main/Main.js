import React, { useState } from "react";
import ConnectForm from "../form/form";
import ConnectFormEasyEcom from "../form/easyEcomForm";
import './Main.css'
import axios from "axios";

export const Main = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isFormEasyEcom, setFormEasyEcom] = useState(false);
  const [zohoStatus, setZohoStatus] = useState("InActive");
  const [easyEcomStatus, setEasyEcomStatus] = useState("InActive");

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const openForm1 = () => {
    setFormEasyEcom(true);
  };

  const closeForm1 = () => {
    setFormEasyEcom(false);
  };

  const connect = (selectedOrganization) => {
    console.log(selectedOrganization);
    setZohoStatus("Active");
  };

  const connectData = (values) => {
    console.log(values);
    if(values){
      setEasyEcomStatus("Active");
    }else{
      setEasyEcomStatus("InActive");
    }
    
  };

  const handleConnect = () => {
    const redirectUrl = "https://todolist-60025231950.development.catalystserverless.in/server/crm_crud/generateToken";
    const authUrl = `https://accounts.zoho.in/oauth/v2/auth?scope=ZohoBooks.fullaccess.ALL&client_id=1000.KC3E3RH5AZPEVUZAVJ1BVBFQXJG6PM&state=testing&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}&access_type=offline&prompt=Consent`;
  
    // Redirect to authUrl
    window.location.href = authUrl;
   
  
    // Trigger the form opening after the redirection
    setTimeout(() => {
      getOrganizations()
      openForm();
    }, 1000);

  
   
  };

   function getOrganizations() {
  try {
    axios.get("https://todolist-60025231950.development.catalystserverless.in/server/crm_crud/crmData")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
  
  
  return (
    <div style={{ marginTop: "30px" }}>
      <div className="card mb-3 main" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-3" style={{height:"125px"}}>
            <img
              src="https://i.pcmag.com/imagery/reviews/036rJcAK3sZYpCdHStxxy8U-35.1602532747.fit_lim.size_1200x630.png"
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: "200px", marginLeft: "20px", marginTop: "23px" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-row justify-content-between des">
            <div className="card-body ">
              <p className="card-text" style={{ fontSize: "18px" }}>
                Zoho Books is online accounting software that manages your
                finances, automates business workflows
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <button
              className="btn btn-success lg:mt-0 lg:ml-auto mt-4 res"
              onClick={handleConnect}
              style={{
                height: "40px",
                fontFamily: "sans-serif",
                position: "relative",
                left: "150px",
                top: "12px",
              }}
            >
              {zohoStatus === 'Active' ? 'RECONNECT' : 'CONNECT'}
            </button>
            <button className="zohostatus" style={{ marginLeft: "10px", height:'30px', background:`${zohoStatus==='Active' ? 'green': 'red'}`,color:`${zohoStatus==='Active' ? 'white': 'black'}`, border:`2px solid ${zohoStatus==='Active' ? 'green': 'red'}` }}>{zohoStatus}</button>
            {isFormOpen && (
              <ConnectForm
                show={isFormOpen}
                onClose={closeForm}
                onConnect={connect}
              />
            )}
          </div>
        </div>
      </div>



      <div className="card mb-3 main" style={{ maxWidth: "100%", marginTop: "-30px" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="https://uploads-ssl.webflow.com/63a40b5c0bd7062fd386021f/63a4b8b4ed5955b52a15eaf2_easyecom%20logo-2%20(4)-p-2000.png"
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: "250px", marginTop: "30px", marginLeft: "20px" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-row justify-content-between des">
            <div className="card-body">
              <p className="card-text" style={{ fontSize: "18px" }}>
                EasyEcom is an eCommerce operating system offering a unified
                dashboard that lets you handle everything in eCommerce
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <button
              className="btn btn-success lg:mt-0 lg:ml-auto mt-5 lg:ml-20 res"
              onClick={openForm1}
              style={{
                height: "40px",
                fontFamily: "sans-serif",
                position: "relative",
                left: "150px",
                bottom:'5px'
              }}
            >
              {easyEcomStatus === 'Active' ? 'RECONNECT' : 'CONNECT'}
            </button>
            <button className="easyecom-status" style={{ marginLeft: "10px",height:'30px', background:`${easyEcomStatus==='Active' ? 'green': 'red'}`,color:`${zohoStatus==='Active' ? 'white': 'black'}`, border:`2px solid ${zohoStatus==='Active' ? 'green': 'red'}` }}>{easyEcomStatus}</button>
            {isFormEasyEcom && (
              <ConnectFormEasyEcom
                show={isFormEasyEcom}
                onClose={closeForm1}
                onConnect={connectData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
 