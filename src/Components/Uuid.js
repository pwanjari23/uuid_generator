import React, { useEffect, useState } from 'react';
import { Grid, Button, TextField, Box, Typography } from '@mui/material';
import { MdOutlineRefresh } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";


function Uuid() {

    const [UUID, setUUID] = useState("");
    const [copied, setCopied] = useState(false);
    const { v4: uuidv4 } = require('uuid');

    let handleUpdateUuid = () => {
        let myUUID = uuidv4()
        console.log(myUUID);
        setUUID(myUUID);
        setCopied(false);
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(UUID);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 500);
    }


    useEffect(() => {
        handleUpdateUuid()
    }, [])


    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item>
                    <Grid item>
                        <Typography style={{ textAlign: "center", fontSize: 28, fontWeight: 'bold' }}>UUID Generator</Typography>
                    </Grid>
                    <Box
                        height={300}
                        width={600}
                        my={4}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        p={2}
                        sx={{ boxShadow: 6, position: 'relative', backgroundColor: 'linen' }}

                    >
                        {copied && (
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: -15,
                                    fontSize: 16,
                                    textAlign: 'right',
                                    width: '100%'
                                }}
                            >
                                Copied!
                            </Typography>
                        )}
                        <Box position="absolute" top={10} right={10} style={{ cursor: 'pointer' }} onClick={handleCopyToClipboard}>
                            <MdContentCopy fontSize={20} />
                        </Box>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={6}
                            style={{ minHeight: '100vh' }}
                        >
                            <Grid item>
                                <Typography sx={{ fontSize: 20 }}>{UUID}</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={handleUpdateUuid} >
                                    Generate UUID <MdOutlineRefresh fontSize={20} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid >

            </Grid >

        </>
    );
}

export default Uuid;
