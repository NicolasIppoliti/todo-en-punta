import React, {useState} from "react";
import {List, ListItem, ListItemText, Box} from "@mui/material";
import Pagination from "@mui/material/Pagination";

const ShopList = ({ shops }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleShops = shops.slice(startIndex, endIndex);

    return (
    <Box>
        <List>
            {visibleShops.map((shop) => (
            <ListItem key={shop.id}>
                <ListItemText primary={shop.name} secondary={shop.category} />
            </ListItem>
            ))}
        </List>
        <Box display="flex" justifyContent="center" marginTop={2}>
            <Pagination
            count={Math.ceil(shops.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            />
        </Box>
    </Box>
    );
};

export default ShopList;