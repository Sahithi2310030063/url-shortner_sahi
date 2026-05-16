import React, { useEffect, useState } from 'react'
import Service from '../../utils/http'
import { Table, Box, Container, Paper, Title } from '@mantine/core';

export default function MyUrls() {
   const [data, setData] = useState(null)
   const service = new Service();

   async function getData() {
       const response = await service.get("user/my/urls?page=1&limit=10")
       setData(response)
   }

   useEffect(() => {
       getData()
   }, [])

   const rows = data?.shortURLs?.map((element) => (
       <Table.Tr key={element._id}>
           <Table.Td style={{ color: '#264653' }}>
               {element.originalUrl.length > 30 ? element.originalUrl.slice(0, 30) + '...' : element.originalUrl}
           </Table.Td>
           <Table.Td fw={700} style={{ color: '#e76f51' }}>{element.shortCode}</Table.Td>
           <Table.Td style={{ color: '#264653' }}>{element.clickCount}</Table.Td>
       </Table.Tr>
   ));

   return (
       <Box
          style={{
            minHeight: '100vh',
            // Updated: Three-point saffron and sand gradient
            background: 'linear-gradient(135deg, #f4a261 0%, #e9c46a 50%, #f4a261 100%)',
            padding: '2rem 0',
          }}
       >
         <Container size="md">
            <Paper 
                shadow="xl" 
                p="xl" 
                radius="md" 
                style={{ 
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0, 0, 0, 0.05)' 
                }}
            >
               <Title order={2} mb="lg" style={{ color: '#264653', fontWeight: 700 }}>
                   My Shortened URLs
               </Title>
               
               <Table verticalSpacing="sm" highlightOnHover>
                   <Table.Thead>
                       <Table.Tr>
                           <Table.Th style={{ color: '#264653' }}>Original Url</Table.Th>
                           <Table.Th style={{ color: '#264653' }}>Short Code</Table.Th>
                           <Table.Th style={{ color: '#264653' }}>Click Count</Table.Th>
                       </Table.Tr>
                   </Table.Thead>
                   <Table.Tbody>{rows}</Table.Tbody>
               </Table>
            </Paper>
         </Container>
       </Box>
   )
}