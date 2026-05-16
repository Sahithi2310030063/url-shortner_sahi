import { Avatar, Box, Container, Group, Paper, Stack, Text, Title, Divider, Badge } from '@mantine/core'
import { IconMail, IconId } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import Service from '../../utils/http'

export default function Profile() {
  const service = new Service()
  const [data, setData] = useState(null)

  const getProfile = async () => {
    const response = await service.get("user/me")
    setData(response)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f4a261 0%, #e9c46a 50%, #f4a261 100%)',
        padding: '2rem 0',
      }}
    >
      <Container size="sm">
        {/* Header accent bar */}
        <Box
          style={{
            height: '8px',
            background: 'linear-gradient(90deg, #264653, #2a9d8f, #264653)',
            borderRadius: '4px 4px 0 0',
          }}
        />

        <Paper
          shadow="xl"
          radius="md"
          p="xl"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
          }}
        >
          {/* Profile Header */}
          <Stack align="center" gap="lg" py="xl">
            <Box
              style={{
                padding: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e76f51, #f4a261)',
              }}
            >
              <Avatar
                src={data?.avatar}
                size={120}
                radius="50%"
                alt={data?.name || 'User avatar'}
                style={{
                  border: '4px solid white',
                }}
              />
            </Box>

            <Stack align="center" gap="xs">
              <Title
                order={2}
                style={{
                  color: '#264653',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                }}
              >
                {data?.name || 'Loading...'}
              </Title>
              <Badge
                variant="gradient"
                gradient={{ from: '#e76f51', to: '#f4a261', deg: 45 }}
                size="lg"
              >
                Member
              </Badge>
            </Stack>
          </Stack>

          <Divider
            my="lg"
            style={{
              borderColor: 'rgba(231, 111, 81, 0.2)',
            }}
          />

          {/* Profile Details */}
          <Stack gap="md" px="md">
            <Paper
              p="md"
              radius="md"
              style={{
                background: '#fefae0',
                border: '1px solid rgba(244, 162, 97, 0.3)',
              }}
            >
              <Group gap="md">
                <Box
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#264653',
                  }}
                >
                  <IconMail size={20} color="#f4a261" />
                </Box>
                <Stack gap={2}>
                  <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
                    Email Address
                  </Text>
                  <Text c="#264653" fw={500}>
                    {data?.email || '—'}
                  </Text>
                </Stack>
              </Group>
            </Paper>

            <Paper
              p="md"
              radius="md"
              style={{
                background: '#fefae0',
                border: '1px solid rgba(244, 162, 97, 0.3)',
              }}
            >
              <Group gap="md">
                <Box
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#264653',
                  }}
                >
                  <IconId size={20} color="#f4a261" />
                </Box>
                <Stack gap={2}>
                  <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
                    User ID
                  </Text>
                  <Text c="#264653" fw={500} size="sm" style={{ fontFamily: 'monospace' }}>
                    {data?._id || '—'}
                  </Text>
                </Stack>
              </Group>
            </Paper>
          </Stack>

          {/* Footer accent */}
          <Box
            mt="xl"
            py="md"
            style={{
              textAlign: 'center',
              borderTop: '1px solid rgba(231, 111, 81, 0.1)',
            }}
          >
            <Text size="xs" c="dimmed">
              Profile last updated • Just now
            </Text>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}