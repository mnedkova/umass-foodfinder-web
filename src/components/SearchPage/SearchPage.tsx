import { ListItem, Stack } from "@mui/material";
import SearchFilter from "../SearchFilter/SearchFilter";

const SearchPage: React.FC = () => {
    return (
        <Stack spacing={2}>
            <SearchFilter/>
        </Stack> 
    )
}

export default SearchPage;