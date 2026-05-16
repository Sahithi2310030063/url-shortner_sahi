import {
  Button,
  Center,
  Container,
  Text,
  Title,
  Stack,
  Box,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/slices/User";
import {
  IconLink,
  IconArrowRight,
  IconChartBar,
  IconShieldCheck,
} from "@tabler/icons-react";

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  // Light Orange Gradient Palette
  const orangeGradient =
    "linear-gradient(135deg, #ffbe98 0%, #ff9e6d 50%, #ff8c5a 100%)";

  const softOrange = "#ff9e6d";

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #fdf8f5 0%, #f3e9e2 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Accent */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(circle, rgba(255, 158, 109, 0.08) 0%, transparent 60%)",
          top: "-20%",
          right: "-10%",
        }}
      />

      <Container size="sm" style={{ position: "relative", zIndex: 1 }}>
        <Box
          style={{
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            border: "1px solid rgba(255, 158, 109, 0.25)",
            borderRadius: "40px",
            padding: "4.5rem 2rem",
            boxShadow: "0 20px 60px rgba(255, 140, 90, 0.12)",
            textAlign: "center",
          }}
        >
          <Stack align="center" spacing="xl">
            {/* Gradient Icon Container */}
            <div
              style={{
                background: orangeGradient,
                padding: "18px",
                borderRadius: "22px",
                boxShadow: "0 10px 25px rgba(255, 140, 90, 0.25)",
              }}
            >
              <IconLink size={38} color="#fff" stroke={1.8} />
            </div>

            <div>
              <Title
                order={1}
                style={{
                  color: "#3d3d3d",
                  fontWeight: 900,
                  fontSize: "3.4rem",
                  lineHeight: 1.1,
                  letterSpacing: "-2px",
                }}
              >
                Snap
                <span
                  style={{
                    background: orangeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Link.
                </span>
              </Title>

              <Text
                size="xl"
                style={{
                  color: "#7a716e",
                  marginTop: "1.2rem",
                  fontWeight: 400,
                  maxWidth: "440px",
                  lineHeight: 1.5,
                }}
              >
                Refine your digital presence with sophisticated URL management
                and dusky-smooth analytics.
              </Text>
            </div>

            {/* Gradient Button */}
            <Button
              size="xl"
              radius="md"
              variant="filled"
              rightSection={<IconArrowRight size={20} />}
              style={{
                background: orangeGradient,
                height: "58px",
                paddingLeft: "35px",
                paddingRight: "35px",
                fontSize: "1rem",
                fontWeight: 600,
                border: "none",
                boxShadow: "0 10px 25px rgba(255, 140, 90, 0.3)",
                transition: "all 0.3s ease",
              }}
              onClick={() =>
                isLoggedIn
                  ? navigate("/url/shortener")
                  : navigate("/login")
              }
            >
              Get Started
            </Button>

            {/* Bottom Feature Row */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "15px",
                borderTop: "1px solid rgba(0,0,0,0.05)",
                paddingTop: "25px",
              }}
            >
              <Center style={{ gap: "8px" }}>
                <IconChartBar
                  size={18}
                  color={softOrange}
                  opacity={0.8}
                />
                <Text
                  size="xs"
                  fw={600}
                  color="#8c8581"
                  style={{ letterSpacing: "0.5px" }}
                >
                  ANALYTICS
                </Text>
              </Center>

              <Center style={{ gap: "8px" }}>
                <IconShieldCheck
                  size={18}
                  color={softOrange}
                  opacity={0.8}
                />
                <Text
                  size="xs"
                  fw={600}
                  color="#8c8581"
                  style={{ letterSpacing: "0.5px" }}
                >
                  ENCRYPTED
                </Text>
              </Center>
            </div>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Home;