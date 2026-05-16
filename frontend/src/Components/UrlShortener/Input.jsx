import { Button, TextInput, Box, Paper, Stack, Title } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../../utils/http.js'

export default function Input({setResponse}) {
   const service = new Service();
   const [payload, setPayload] = useState(
       {
           "originalUrl": "",
           "expiresAt": "",
           "title": "",
           "customUrl": ""
       }
   )

   const generateShortCode = async ()=>{
       const response = await service.post("s", payload)
       setResponse(response)
   }

   return (
       <Box
          style={{
            minHeight: '100vh',
            // Updated: Three-point gradient effect
            background: 'linear-gradient(135deg, #f4a261 0%, #e9c46a 50%, #f4a261 100%)',
            padding: '2rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
       >
         <Paper 
            shadow="xl" 
            p="xl" 
            radius="md" 
            style={{ 
                width: '100%', 
                maxWidth: '500px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
         >
            <Stack gap="md">
               <Title order={3} style={{ color: '#264653' }}>Create Short URL</Title>

               <TextInput
                   label="Original Url"
                   withAsterisk
                   description="Paste your Original Url"
                   placeholder="https://example.com/very-long-url"
                   styles={{ label: { color: '#264653', fontWeight: 600 } }}
                   onChange={(e) => {
                       setPayload( { ...payload, originalUrl: e.target.value } )
                   }}
               />

               
               
              <Button 
  disabled={payload.originalUrl === ""} 
  onClick={generateShortCode} 
  variant="filled" 
  fullWidth
  size="md"
  style={{ 
    backgroundColor: '#e76f51', // Dusky Orange background
    color: 'white',             // Force white text color
    marginTop: '10px',
    opacity: payload.originalUrl === "" ? 0.6 : 1, // Optional: add transparency when disabled
  }}
>
  Shorten Url
</Button>
            </Stack>
         </Paper>
       </Box>
   )
}