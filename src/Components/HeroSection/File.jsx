import React, { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';
import axios from 'axios';

const FileUploadExample = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState({ name: '', numberPlate: '' });

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const uploadFile = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('http://localhost:3000/upload', formData);

                // Update the state with the received data
                setData({
                    name: response.data.lastTwoValues[0],
                    numberPlate: response.data.lastTwoValues[1],
                });
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            alert('Please choose a file before uploading.');
        }
    };

    return (
        <div>
            <Input type="file" id="fileInput" onChange={handleFileChange} />
            <Button variant="contained" onClick={uploadFile}>
                Upload
            </Button>
            <Typography variant="body1">
                {data.name && `Name: ${data.name}`}
            </Typography>
            <Typography variant="body1">
                {data.numberPlate && `Number Plate: ${data.numberPlate}`}
            </Typography>
        </div>
    );
};

export default FileUploadExample;
