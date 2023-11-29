import {Box, Button, Typography} from "@mui/material";

const NotFound = () => {
    return (
        <Box sx={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Typography variant="h1">404 Not Found</Typography>
            <Typography variant="subtitle1">The page you are looking for does not exist.</Typography>
            <Button variant="contained" color="primary" href="/">Go to Home</Button>
        </Box>
    )
}

export default NotFound;
