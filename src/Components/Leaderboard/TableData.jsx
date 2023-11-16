import { Button, Paper, TableRow, TableHead, TableCell, TableContainer, TableBody, Table, Grid, Typography, Avatar, Stack, TextField, TablePagination, Link } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import RanklistButtons from "./RanklistButtons";


const buttons = { margin: "8px", color: "#fff" };

const Tables = (props) => {
    const [data, setData] = useState([]);
    const [collegeName, setCollegeName] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleChangePage = (event, newPage) => {
        pageChange(newPage)
    }

    const handleRowsPerPage = (event) => {
        rowPerPageChange(+event.target.value)
        pageChange(0)
    }
    const [page, pageChange] = useState(0);
    const [rowPerPage, rowPerPageChange] = useState(10);


    useEffect(() => {
        axios.get(props.link)
            .then((res) => {
                setData(res.data.data);
                setSearchResults(res.data.data);
            })
            .catch((err) => console.log(err));
    }, [props.link]);

    const getSolidRank = (currentPage, rowsPerPage, rowIndex) => {
        return currentPage * rowsPerPage + rowIndex + 1;
    };

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     const filteredResults = data.filter((user) => user.college_name === collegeName);
    //     console.log(filteredResults);
    //     setSearchResults(filteredResults);
    // };

    const handleSearch = (e) => {
        e.preventDefault();
        const lowerCaseSearchTerm = collegeName.toLowerCase();
        const filteredResults = data.filter((user) => user.college_name.toLowerCase().includes(lowerCaseSearchTerm));
        console.log(filteredResults);
        setSearchResults(filteredResults);
    };

    const handleInputChange = (e) => {
        setCollegeName(e.target.value);
    };

    const feilds = ['Rank', 'Name', 'Codechef', 'Codeforces', 'Github', 'Leetcode', 'Points']


    return (
        <Grid
            container
            justifyContent="center"
            sx={{
                mt: "30px",
            }}
        >
            <RanklistButtons />
            <Typography variant="h6"
                sx={{
                    my: 1,
                    fontFamily: 'Nunito Sans',
                    fontSize: '25px',
                    fontWeight: 'medium',
                    color: 'lightblack',
                    letterSpacing: 'wide',
                }}>
                Filter Leaderboard through College Full Name &emsp;
                <form onSubmit={handleSearch}>
                    <TextField id="outlined-basic"
                        label="Enter Your Full College Name"
                        variant="outlined"
                        type="text"
                        sx={{ width: '70%' }}
                        value={collegeName}
                        onChange={handleInputChange}
                    />
                    <Button
                        sx={{
                            background: 'linear-gradient(45deg, #FF3366 30%, #FF9933 90%)',
                            borderRadius: "5px",
                            border: 0,
                            color: "white",
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            padding: "0px 15px",
                            marginLeft: '20px',
                            transition: "box-shadow 0.3s ease-in-out",

                        }}
                        variant="contained"
                        color="success"
                        type="submit"
                    >Search</Button>
                </form>
            </Typography>
            <TableContainer
                sx={{
                    width: "98%",
                    "&::-webkit-scrollbar": {
                        display: 'none'
                    },
                    marginBottom: "40px",
                    borderRadius: "10px",
                    maxHeight: '100vh'
                }}
            >
                <Table stickyHeader >
                    <TableHead>
                        <TableRow>
                            {feilds.map((data) => (
                                <TableCell
                                    key={data}
                                    sx={{
                                        backgroundColor: 'hsl(235, 16%, 14%)',
                                        color: 'white',
                                        height: "80px",
                                        fontSize: "25px",
                                    }}
                                    align="center"
                                >
                                    <Typography
                                        align="center"
                                        color="white"
                                        sx={{
                                            fontSize: 20,
                                            fontFamily: "Nunito Sans, sans-serif",
                                        }}
                                    >
                                        {data}
                                    </Typography>
                                </TableCell>
                            ))}

                        </TableRow>
                    </TableHead>
                    {/* -----------------------------------------------Table------------------------------------------------------------------ */}

                    <TableBody>
                        {searchResults &&
                            searchResults.slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                                .map((row, index) => (
                                    <TableRow
                                        sx={{
                                            width: "100%",
                                            height: "100px",

                                            "&:last-child td, &:last-child th": {
                                                border: 0,
                                            },
                                        }}
                                        key={row}
                                    >
                                        <TableCell
                                            sx={{
                                                backgroundColor: '#fff',
                                                color: 'black',
                                                height: "100%",
                                                fontSize: 18,
                                            }}
                                            align="center"
                                        >
                                            {/* {page + 1} */}
                                            {getSolidRank(page, rowPerPage, index)}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                backgroundColor: '#fff',
                                                color: 'white',
                                                height: "100%",
                                                fontSize: "25px",
                                            }}
                                            align="left"
                                        >
                                            <Stack
                                                direction="row"
                                            >

                                                <Avatar
                                                    variant="circular"
                                                    sx={{
                                                        position: "relative",
                                                        backgroundColor: "#fff",
                                                        width: "50px",
                                                        height: "50px",
                                                        borderRadius: "50%"
                                                    }}
                                                    alt="Avatar"
                                                    src={`https://avatars.githubusercontent.com/${row.github_id}`}
                                                />
                                                <Typography
                                                    color="black"
                                                    sx={{
                                                        fontSize: 18,
                                                        fontFamily: "Nunito Sans, sans-serif",
                                                        padding: '5% 10px',
                                                    }}
                                                >
                                                    {row.name}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                color="black"
                                                sx={{
                                                    fontSize: 10,
                                                    fontFamily: "Nunito Sans, sans-serif",
                                                    fontWeight: 700,
                                                    color: 'gray',
                                                    marginTop: '5px'
                                                }}
                                            >
                                                {/* {row.college_name && row.college_name.length > 2 ? row.college_name : ''} */}
                                                {row.college_name}
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            sx={{
                                                backgroundColor: '#fff',
                                                color: 'white',
                                                height: "100%",
                                                fontSize: "25px",
                                            }}
                                            align="center"
                                        >
                                            <Link
                                                style={{ textDecoration: "None", color: "black" }}
                                                href={`https://www.codechef.com/users/${row.codechef_id}`}
                                                rel="noopener"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="small"
                                                    sx={{
                                                        fontFamily: "Nunito Sans, sans-serif",
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        textTransform: 'none',
                                                        color: "hsl(235, 16%, 14%)",
                                                        "&:hover": {
                                                            background: 'linear-gradient(to right, #603813, #b29f94);',
                                                            color: "#fff",
                                                            border: "1px solid hsl(235, 16%, 14%)",
                                                        },
                                                    }}
                                                >
                                                    {row.codechef_id}
                                                </Button>
                                            </Link>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                backgroundColor: '#fff',
                                                color: 'white',
                                                height: "100%",
                                                fontSize: "25px",
                                            }}
                                            align="center"
                                        >
                                            <Link
                                                style={{ textDecoration: "None", color: "black" }}
                                                href={`https://codeforces.com/profile/${row.codeforces_id}`}
                                                rel="noopener"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="small"
                                                    sx={{
                                                        fontFamily: "Nunito Sans, sans-serif",
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        textTransform: 'none',
                                                        color: "hsl(235, 16%, 14%)",
                                                        "&:hover": {
                                                            background: 'linear-gradient(to right, #0575e6, #021b79);',
                                                            color: '#fff',
                                                            border: "1px solid hsl(235, 16%, 14%)",
                                                        },
                                                    }}
                                                >
                                                    {row.codeforces_id}
                                                </Button>
                                            </Link>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                backgroundColor: '#fff',
                                                color: 'white',
                                                height: "100%",
                                                fontSize: "25px",
                                            }}
                                            align="center"
                                        >
                                            <Link
                                                style={{ textDecoration: "None", color: "black" }}
                                                href={`https://github.com/${row.github_id}`}
                                                rel="noopener"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="small"
                                                    sx={{
                                                        fontFamily: "Nunito Sans, sans-serif",
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        textTransform: 'none',
                                                        color: "hsl(235, 16%, 14%)",
                                                        "&:hover": {
                                                            background: "linear-gradient(to right, #000000, #434343);",
                                                            color: "white",
                                                            border: "1px solid hsl(235, 16%, 14%)",
                                                        },
                                                    }}
                                                >
                                                    {row.github_id}
                                                </Button>
                                            </Link>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                backgroundColor: '#fff',
                                                color: 'white',
                                                height: "100%",
                                                fontSize: "25px",
                                            }}
                                            align="center"
                                        >
                                            <Link
                                                style={{ textDecoration: "None", color: "black" }}
                                                href={`https://leetcode.com/${row.leetcode_id}`}
                                                rel="noopener"
                                                target="_blank"
                                            >
                                                <Button
                                                    size="small"
                                                    sx={{
                                                        fontFamily: "Nunito Sans, sans-serif",
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        textTransform: 'none',
                                                        color: "hsl(235, 16%, 14%)",
                                                        "&:hover": {
                                                            background: 'linear-gradient(to right, #fc4a1a, #f7b733)',
                                                            color: '#fff',
                                                            border: '1px solid hsl(235, 16%, 14%)',
                                                        },
                                                    }}
                                                >
                                                    {row.leetcode_id}
                                                </Button>
                                            </Link>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontFamily: 'Blanka',
                                                fontSize: 18,
                                                background: "-webkit-linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                letterSpacing: '0.2rem'
                                            }}
                                            align="center"
                                        >
                                            {/* {row.total_score} */}
                                            {(props.type === 'leetcode') ? `${row.leetcode_rating}` : (props.type === 'codechef') ? `${row.codechef_rating}` : (props.type === 'codeforces') ? `${row.codeforces_rating}` : `${row.total_score}`}
                                        </TableCell>

                                    </TableRow >
                                ))}
                    </TableBody >
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 30, 50, 100]}
                rowsPerPage={rowPerPage}
                page={page}
                count={data.length}
                component="div"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleRowsPerPage}
            >

            </TablePagination>
        </Grid>
    );
};

export default Tables;
