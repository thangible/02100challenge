import * as React from 'react';
import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateName = (name: string) => {
    if (name.trim() === '') {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateMessage = (message: string) => {
    if (message.trim().length > 500) {
      setMessageError('Message must be 500 characters or less');
      return false;
    }
    setMessageError('');
    return true;
  };

  const handleValidation = () => {
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    setFormValid(isNameValid && isEmailValid && isMessageValid);
  };

  useEffect(() => {
    if (hasSubmitted) {
      handleValidation();
    }
  }, [name, email, message, hasSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    handleValidation();

    if (formValid) {
      const formData = { name, email, message };
      const storedData = JSON.parse(localStorage.getItem('formData') || '[]');
      storedData.push(formData);
      localStorage.setItem('formData', JSON.stringify(storedData));

      setFormMessage('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setHasSubmitted(false);
    } else {
      setFormMessage('Please correct the errors in the form.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={hasSubmitted && !!nameError}
        helperText={hasSubmitted && nameError}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={hasSubmitted && !!emailError}
        helperText={hasSubmitted && emailError}
      />
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={hasSubmitted && !!messageError}
        helperText={hasSubmitted && messageError}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
      {formMessage && (
        <Typography variant="body2" color={formValid ? 'green' : 'red'} sx={{ mt: 2 }}>
          {formMessage}
        </Typography>
      )}
    </Box>
  );
}