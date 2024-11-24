import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "prueba@gmail.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login - Inicia Sesion">
      <form onSubmit={onSubmit}>
        <Grid2 container spacing={2}>
          {/* Campo de Correo */}
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              autoComplete="current-password"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              InputProps={{
                style: { color: "white" }, // Color del texto del input
              }}
              InputLabelProps={{
                style: { color: "#00FFFF" }, // Color cian para el label
              }}
            />
          </Grid2>

          {/* Campo de Contraseña */}
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              InputProps={{
                style: { color: "white" }, // Color del texto del input
              }}
              InputLabelProps={{
                style: { color: "#00FFFF" }, // Color cian para el label
              }}
            />
          </Grid2>

          {/* Botones */}
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Grid2 size={12}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#00bcd4", // Color cian llamativo para el botón
                  color: "white", // Texto blanco para buena visibilidad
                  ":hover": {
                    backgroundColor: "#0097a7", // Un tono más oscuro en hover
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                Entrar
              </Button>
            </Grid2>

            {/* Separador con línea continua y texto "ó" */}
            <Grid2 size={12} >
              <Typography
                sx={{
                  color: "#00FFFF",
                  fontSize: "1rem",
                }}
              >
                ó
              </Typography>
            </Grid2>
            <Grid2 size={12}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#ff5722", // Naranja para diferenciar el botón de Google
                  color: "white", // Texto blanco para contraste
                  ":hover": {
                    backgroundColor: "#e64a19", // Un tono más oscuro en hover
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Inicia Sesión con Google</Typography>
              </Button>
            </Grid2>
          </Grid2>


        </Grid2>

        {/* Enlace Crear nueva cuenta */}
        <Grid2 container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Link
            component={RouterLink}
            to="/auth/register"
            sx={{
              color: "#00FFFF", // Color cian para el enlace
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                color: "#00e6e6",
              },
            }}
          >
            Crear nueva cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
