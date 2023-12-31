import { Box, Stack, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/auth-context";
import { Link } from "react-router-dom";
import { useSnackbar } from "../../context/snackbar/snackbar-context";
import { useRedirectFromUrl } from "../../hooks/use-redirect-from-url";
import NormalButton from "../../common/Button.jsx";
import Footer from "../../common/Layout/Footer.jsx";

const LoginScreen = () => {
    const [isValidPassword, setIsValidPassword] = useState(true);

    const {user, isLoading, login} = useAuth();
    const {showNotification} = useSnackbar();
    const redirect = useRedirectFromUrl();

    useEffect(() => {
        if (user && !isLoading) {
            redirect();
        }
    }, [user, isLoading, redirect]);

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const isValid = password.length >= 6 && password.length <= 40;

        if (password.length === 0) {
            setIsValidPassword(true);
            return;
        }

        setIsValidPassword(isValid);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await login({username, password});
        console.log(response.message, 'login resposne')
        showNotification(response.message);
    }

    return (
        <Stack justifyContent="center" alignItems="center">
            <Stack direction="column" spacing={2} justifyContent="center" alignItems="center" mt={10} width={400}>
                <Stack p={1} alignItems="center" bgcolor="#f60157" borderRadius="50%">
                    <LockOutlinedIcon sx={{
                        color: '#ffffff'
                    }} fontSize="large"/>
                </Stack>

                <Typography variant="h4" pb={2}>
                    Sign in
                </Typography>

                <form onSubmit={handleSubmit} style={{
                    width: '100%',
                }}>
                    <Stack direction="column" spacing={2} width="100%">
                        <TextField id="username" label="Email Address" variant="outlined" type="email" required/>
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            required
                            error={!isValidPassword}
                            helperText={!isValidPassword && "Password must be between 6 to 40 characters"}
                            onChange={handlePasswordChange}
                        />

                        <Stack pt={2}>
                            <NormalButton label="Sign In" type="submit"/>
                        </Stack>
                    </Stack>
                </form>

                <Link to={'/signup'}>
                    <Typography noWrap variant="subtitle1" width="100%" color="#994696" sx={{
                        textDecoration: "underline",
                    }}>
                        Don't have an account? Sign Up
                    </Typography>
                </Link>

                <Box pt={4}>
                    <Footer/>
                </Box>
            </Stack>
        </Stack>
    )
}

export default LoginScreen;
