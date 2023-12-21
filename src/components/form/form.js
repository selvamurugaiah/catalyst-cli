import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ConnectForm = ({ show, onClose, onConnect }) => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const urlSearchParams = new URLSearchParams(window.location.search);
//     const code = urlSearchParams.get('code');

//     if (code) {
//       exchangeCodeForTokens(code);
//     }
//   }, []);
// // Inside exchangeCodeForTokens function after obtaining access_token
// const exchangeCodeForTokens = async (code) => {
//   try {
//     const response = await axios.get(`/generateToken?code=${code}`);
//     const { access_token, refresh_token } = response.data;

//     console.log('Access Token:', access_token);
//     console.log('Refresh Token:', refresh_token);

//     // Call the fetchCRMData function to get CRM data
//     fetchCRMData(access_token);
//   } catch (error) {
//     console.error('Error exchanging code for tokens:', error);
//     // Handle errors as needed
//   }
// };

// // Add this function to fetch CRM data
// const fetchCRMData = async (accessToken) => {
//   try {
//     // Make a GET request to the CRM data endpoint with the access token in the URL
//     const crmResponse = await axios.get(`/server/crm_crud/crmData?accessToken=${accessToken}`);

//     // Log the CRM data response
//     console.log('CRM Data Response:', crmResponse.data);

//     // Extract organizations from the response and update state
//     const { organizations } = crmResponse.data;
//     setOrganizations(organizations);

//     // Set loading to false as the data has been fetched
//     setLoading(false);
//   } catch (error) {
//     // Handle errors during the CRM data fetch
//     console.error('Error fetching CRM data:', error.response ? error.response.data : error.message);

//     // Set an error message in state
//     setError('Error fetching CRM data. Please try again later.');

//     // Set loading to false as there was an error
//     setLoading(false);
//   }
// };


// function getOrganizations() {
//   try {
//     axios.get("/server/crm_crud/crmData")
//       .then(response => {
//         console.log(response.data.organizations);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }

// getOrganizations();

// const handleConnect = () => {
//   if (selectedOrganization) {
//     const redirectUrl = "https://accounts.zoho.in/oauth/v2/auth?scope=ZohoBooks.fullaccess.ALL&client_id=1000.KC3E3RH5AZPEVUZAVJ1BVBFQXJG6PM&state=testing&response_type=code&redirect_uri=" + window.location.protocol + '//' + window.location.host + "/server/crm_crud/generateToken&access_type=offline&prompt=Consent";
//     window.location.href = redirectUrl;
//     onClose();
//   } else {
//     console.error("Please choose an organization before connecting.");
//   }
//  };


 

const handleConnect = () => {
  if (selectedOrganization) {
    // const redirectUrl = "https://todolist-60025231950.development.catalystserverless.in/server/crm_crud/generateToken";
    // const authUrl = `https://accounts.zoho.in/oauth/v2/auth?scope=ZohoBooks.fullaccess.ALL&client_id=1000.KC3E3RH5AZPEVUZAVJ1BVBFQXJG6PM&state=testing&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}&access_type=offline&prompt=Consent`;
    // window.location.href = authUrl;
     console.log(selectedOrganization)
    onClose();
  } else {
    console.error("Please choose an organization before connecting.");
  }
};


  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Zoho Books Organization</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="organization">
            <Form.Label>Choose organization:</Form.Label>
            <Form.Control
              as="select"
              value={selectedOrganization}
              onChange={(e) => setSelectedOrganization(e.target.value)}
            >
              <option value="">Please choose an organization</option>
              <option value="org1">Organization 1</option>
              <option value="org2">Organization 2</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleConnect}>
          Connect
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConnectForm;
