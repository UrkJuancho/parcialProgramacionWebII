import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
    return (
        <Grid2
            container
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                backgroundColor: "#0d1117", // Dark futuristic background
                backgroundImage: "radial-gradient(circle at top, #0f2027, #203a43, #2c5364)", // Subtle gradient
                backgroundSize: "200% 200%",
                animation: "background-pan 10s infinite alternate",
                overflow: "hidden",
                position: "relative",
                padding: 4,
            }}
        >
            {/* Neon circles */}
            <div
                style={{
                    position: "absolute",
                    top: "-10%",
                    left: "-10%",
                    width: "600px",
                    height: "600px",
                    background: "rgba(0, 255, 255, 0.2)", // Neon cyan
                    borderRadius: "50%",
                    filter: "blur(150px)",
                    boxShadow: "0 0 80px rgba(0, 255, 255, 0.5), 0 0 120px rgba(0, 255, 255, 0.4)",
                    animation: "float 6s ease-in-out infinite",
                    zIndex: 0,
                }}
            ></div>

            <div
                style={{
                    position: "absolute",
                    bottom: "-10%",
                    right: "-10%",
                    width: "500px",
                    height: "500px",
                    background: "rgba(255, 0, 255, 0.2)", // Neon magenta
                    borderRadius: "50%",
                    filter: "blur(150px)",
                    boxShadow: "0 0 80px rgba(255, 0, 255, 0.5), 0 0 120px rgba(255, 0, 255, 0.4)",
                    animation: "float 6s ease-in-out infinite",
                    zIndex: 0,
                }}
            ></div>

            <Grid2
                xs={4}
                className="box-shadow"
                sx={{
                    position: "relative",
                    zIndex: 10,
                    width: { md: 450 },
                    backgroundColor: "#161b22", // Dark card color
                    padding: 3,
                    borderRadius: 2,
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 2px 10px rgba(0, 0, 0, 0.4)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 15px 40px rgba(0, 255, 255, 0.4), 0 5px 20px rgba(255, 0, 255, 0.4)",
                    },
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mb: 2,
                        fontWeight: "bold",
                        color: "#FFFFFF", // Bright white for contrast
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        textShadow: "0 2px 8px rgba(255, 255, 255, 0.8)", // White glow effect
                    }}
                >
                    {title}
                </Typography>

                {children}
            </Grid2>
        </Grid2>
    );
};
