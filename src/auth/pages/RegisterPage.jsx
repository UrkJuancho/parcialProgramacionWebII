import { Link as RouterLink } from "react-router-dom";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: "prueba@gmail.com",
  password: "123456",
  displayName: "Prueba",
};

const formValidation = {
  email: [(value) => value.includes("@"), "El correo no es valido"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
  displayName: [
    (value) => value.length >= 3,
    "El nombre debe tener al menos 3 caracteres",
  ],
};

export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidation);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Registro - Crear Cuenta">
      <form onSubmit={onSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              autoComplete="off"
              placeholder="Digita tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              InputProps={{
                style: { color: "white" }, // Color del texto del input
              }}
              InputLabelProps={{
                style: { color: "#00FFFF" }, // Color cian para el label
              }}
            />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              autoComplete="off"
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
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              autoComplete="off"
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

          <Grid2 size={{ xs: 12, md: 12 }}>
            <Button
              type="submit"
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
              Crear Cuenta
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1, color: "#00FFFF", // Color cian para el enlace
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                color: "#00e6e6",
              }  
              }}>¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login" 
          sx={{
              color: "#00FFFF", // Color cian para el enlace
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
                color: "#00e6e6",
              },
            }}
          >
            Ingresar
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
