import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {

    const paperStyle = { padding: '50px 10px', width: 600, margin: "20px auto", row: '10px' }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const handleClick=(e)=>{e.preventDefault()
    const student={name,address}
    console.log(student)
     fetch("http://localhost:8080/api/v1/student/add",{
     method:"POST",
     headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)
    }).then(()=>{
        console.log("New Student added")
    })
    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <h1 style={{ color: "blue" }}><u>Add Student</u></h1>

                    <form className='{classe.root}' noValidate autoComplete='off'>

                        <TextField id="standard-basic" label="Student Name" variant="outlined" fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <TextField id="standard-basic" label="Student Address" variant="outlined" fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />

                        <Button variant="contained" color="secondary" onClick={handleClick}>Submit
                        
                        </Button>

                    </form>
                    {name}
                    {address}
                </Paper>
            </Container>
        </Box>
    );
}
