import React ,{useState , useEffect} from 'react';
import { Container, Box, Typography, Link, Paper } from '@mui/material';

export default function Contact() {

  const [contact , setContact] = useState({
    header: 'Loading...',
    url: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
      fetch('http://localhost:8080/api/contact')
        .then(res => res.json())
        .then(data => setContact(data))
        .catch(() => setContact({
          header: 'Unavailable...',
          url: 'Unavailable',
          phone: 'Unavailable',
          email: 'Unavailable'
        }));
    }, []);
  

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f5f5' }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', mb: 3, color: '#1a237e', textAlign: 'center' }}
        >
          {contact.header}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">
            <strong>LinkedIn:</strong>{' '}
            <Link
              href={`https://${contact.url}`}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="primary"
            >
              {contact.url}
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">
            <strong>Phone:</strong> {contact.phone}
          </Typography>
        </Box>

        <Typography variant="h6">
          <strong>Email:</strong>{' '}
          <Link href="{contact.email}" underline="hover" color="primary">
            {contact.email}
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
