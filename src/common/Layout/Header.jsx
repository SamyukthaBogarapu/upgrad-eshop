import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useAuth } from "../../context/auth/auth-context";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useProducts } from "../../context/products/products-context";
import {USER_ROLES} from "../constants.js";
import {Search, SearchIconWrapper, StyledInputBase} from "../Search.jsx";

const Header = () => {
    const {user, logout} = useAuth();
    const {searchProducts} = useProducts();

    const isUserLoggedIn = !!user;
    const isAdmin = user?.roles?.includes(USER_ROLES.ADMIN);

    return (
        <AppBar component="nav" position="sticky" px="md" sx={{
            backgroundColor: "#3f51b5",
        }}>
            <Toolbar disableGutters sx={{px: 4}}>
                <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
                    <Link to={'/'}>
                        <Stack spacing={1} direction="row" alignItems="center">
                            <ShoppingCart/>
                            <Typography variant="h6" noWrap>
                                upGrad E-Shop
                            </Typography>
                        </Stack>
                    </Link>

                    {isUserLoggedIn && (
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                onChange={(e) => {
                                    e.preventDefault();
                                    searchProducts(e.target.value);
                                }}
                            />
                        </Search>
                    )}

                    {isUserLoggedIn && (
                        <Stack direction="row" alignItems="center" spacing={6}>
                            <Link to={'/'}>
                                <Typography noWrap variant="subtitle1" sx={{
                                    textDecoration: "underline",
                                }}>
                                    Home
                                </Typography>
                            </Link>
                            {isAdmin && (
                                <Link to={'/admin/add-product'}>
                                    <Typography noWrap variant="subtitle1" sx={{
                                        textDecoration: "underline",
                                    }}>
                                        Add Product
                                    </Typography>
                                </Link>
                            )}
                            <Button onClick={logout} sx={{
                                backgroundColor: "#f50057",
                                color: "#fff",
                                px: 2,

                                '&:hover': {
                                    backgroundColor: "#d20149",
                                },
                            }}>
                                Logout
                            </Button>
                        </Stack>
                    )}

                    {!isUserLoggedIn && (
                        <Stack direction="row" alignItems="center" spacing={6}>
                            <Link to={'/login'}>
                                <Typography noWrap variant="subtitle1" sx={{
                                    textDecoration: "underline",
                                }}>
                                    Login
                                </Typography>
                            </Link>
                            <Link to={'/signup'}>
                                <Typography noWrap variant="subtitle1" sx={{
                                    textDecoration: "underline",
                                }}>
                                    Sign Up
                                </Typography>
                            </Link>
                        </Stack>
                    )}

                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
