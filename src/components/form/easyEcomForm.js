import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConnectFormEasyEcom = ({ show, onClose, onConnect }) => {
  const [easyEcomEmail, setEasyEcomEmail] = useState('');
  const [easyEcomPassword, setEasyEcomPassword] = useState('');
  const [locationKey, setLocationKey] = useState('');
  const [sellerToken, setSellerToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // State to track touched state for each field
  const [touched, setTouched] = useState({
    easyEcomEmail: false,
    easyEcomPassword: false,
    locationKey: false,
    sellerToken: false,
  });

  const handleConnect = () => {
    // Set all fields as touched
    setTouched({
      easyEcomEmail: true,
      easyEcomPassword: true,
      locationKey: true,
      sellerToken: true,
    });

    // Check if all fields are filled and the email is valid before proceeding
    if (
      easyEcomEmail &&
      easyEcomPassword &&
      locationKey &&
      sellerToken &&
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(easyEcomEmail)
    ) {
      const credentials = {
        easyEcomEmail,
        easyEcomPassword,
        locationKey,
        sellerToken,
      };

      onConnect(credentials);
      onClose();
    } else {
      // If any field is empty or the email is invalid, show an error message
      console.error(
        'Please fill in all fields and provide a valid email address before connecting.'
      );
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter EasyEcom Credentials</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="easyEcomEmail">
            <Form.Label>
              EasyEcom Email:
              <span className="required" style={{ color: 'red', marginLeft: '5px' }}>
                *
              </span>
            </Form.Label>
            <Form.Control
              type="email"
              value={easyEcomEmail}
              onChange={(e) => setEasyEcomEmail(e.target.value)}
              onBlur={() => setTouched({ ...touched, easyEcomEmail: true })}
              // Add a pattern attribute for email validation
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            {touched.easyEcomEmail && !easyEcomEmail && (
              <Form.Text className="text-danger">EasyEcom Email is required.</Form.Text>
            )}
            {touched.easyEcomEmail && easyEcomEmail && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(easyEcomEmail) && (
              <Form.Text className="text-danger">Invalid email address.</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="easyEcomPassword">
            <Form.Label>
              EasyEcom Password:
              <span className="required" style={{ color: 'red', marginLeft: '5px' }}>
                *
              </span>
            </Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={easyEcomPassword}
                onChange={(e) => setEasyEcomPassword(e.target.value)}
                onBlur={() => setTouched({ ...touched, easyEcomPassword: true })}
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                style={{ marginLeft: '-30px', zIndex: 2 }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </div>
            {touched.easyEcomPassword && !easyEcomPassword && (
              <Form.Text className="text-danger">EasyEcom Password is required.</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="locationKey">
            <Form.Label>
              Location Key:
              <span className="required" style={{ color: 'red', marginLeft: '5px' }}>
                *
              </span>
            </Form.Label>
            <Form.Control
              type="text"
              value={locationKey}
              onChange={(e) => setLocationKey(e.target.value)}
              onBlur={() => setTouched({ ...touched, locationKey: true })}
            />
            {touched.locationKey && !locationKey && (
              <Form.Text className="text-danger">Location Key is required.</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="sellerToken">
            <Form.Label>
              Seller Token:
              <span className="required" style={{ color: 'red', marginLeft: '5px' }}>
                *
              </span>
            </Form.Label>
            <Form.Control
              type="text"
              value={sellerToken}
              onChange={(e) => setSellerToken(e.target.value)}
              onBlur={() => setTouched({ ...touched, sellerToken: true })}
            />
            {touched.sellerToken && !sellerToken && (
              <Form.Text className="text-danger">Seller Token is required.</Form.Text>
            )}
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


export default ConnectFormEasyEcom;
