import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import React from "react";

const TestSelect = () => {
    const [age, setAge] = React.useState('0');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Stack direction='column' spacing={3}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={0}>(Not Specified)</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Box>Age is: {age}</Box>
          </Stack>
    );
};

const TestButton = () => {
    return (
        <Button>Test</Button>
    )
}

export default function App() {
    return (
        <Stack direction='column' spacing={3}>
            <Stack direction='row' spacing={3} display='flex'>
                <TestButton />
                <TestSelect />
            </Stack>
            <Box>Upon load, the Age selection works with keyboard.  After clicking on the "Test" button,
                the keyboard arrow keys affect the selection but the menu UI does not update,
                when running in Tauri w/Vite, until Enter is hit.</Box>
        </Stack>
    );
};