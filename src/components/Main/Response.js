// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YourComponent = () => {
//   const [organizations, setOrganizations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Your logic to retrieve the access token from the backend, assuming you have a code parameter


//     const exchangeCodeForTokens = async () => {
//       try {
//         const response = await axios.get(`/generateToken?code=${code}`);
//         const { access_token, refresh_token } = response.data;

//         // Call the fetchCRMData function to get CRM data
//         fetchCRMData(access_token);
//       } catch (error) {
//         console.error('Error exchanging code for tokens:', error);
//         // Handle errors as needed
//       }
//     };

//     exchangeCodeForTokens();
//   }, []);

//   const fetchCRMData = async (accessToken) => {
//     try {
//       // Make a GET request to the CRM data endpoint with the access token
//       const crmResponse = await axios.get(`/crmData?accessToken=${accessToken}`);

//       // Extract organizations from the response and update state
//       const { organizations } = crmResponse.data;
//       setOrganizations(organizations);

//       // Set loading to false as the data has been fetched
//       setLoading(false);
//     } catch (error) {
//       // Handle errors during the CRM data fetch
//       console.error('Error fetching CRM data:', error.response ? error.response.data : error.message);

//       // Set an error message in state
//       setError('Error fetching CRM data. Please try again later.');

//       // Set loading to false as there was an error
//       setLoading(false);
//     }
//   };

//   // Your JSX to render the component based on the state (loading, organizations, error)
//   return (
//     <div>
//       {/* Render loading state */}
//       {loading && <p>Loading...</p>}

//       {/* Render error state */}
//       {error && <p>{error}</p>}

//       {/* Render organizations if available */}
//       {organizations.length > 0 && (
//         <select>
//           {organizations.map((org) => (
//             <option key={org.id} value={org.id}>
//               {org.name}
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// };

// export default YourComponent;

