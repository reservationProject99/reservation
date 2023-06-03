import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { indigo } from '@mui/material/colors';

export default function AddressForm({ handleNext }) {
    const [formData, setFormData] = useState({
        startLocation: '',
        finalLocation: '',
        startDate: '',
        finalDate: '',
    });
    const [formErrors, setFormErrors] = useState({
        startLocation: '',
        finalLocation: '',
        startDate: '',
        finalDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Proceed to the next step or perform other actions
            handleNext();
        }
    };

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        // Validate startLocation
        if (!formData.startLocation.trim()) {
            errors.startLocation = 'First name is required';
            isValid = false;
        }

        // Validate finalLocation
        if (!formData.finalLocation.trim()) {
            errors.finalLocation = 'Last name is required';
            isValid = false;
        }


        // Validate startDate
        if (!formData.startDate.trim()) {
            errors.startDate = 'startDate is required';
            isValid = false;
        }

        // Validate finalDate
        if (!formData.finalDate.trim()) {
            errors.finalDate = 'finalDate code is required';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    return (
        <React.Fragment>
            <Typography variant="h6" color={indigo[900]} gutterBottom>
                Your Information
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="startLocation"
                            name="startLocation"
                            label="Start Location"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            value={formData.startLocation}
                            onChange={handleChange}
                            error={!!formErrors.startLocation}
                            helperText={formErrors.startLocation}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="finalLocation"
                            name="finalLocation"
                            label="Final Location"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                            value={formData.finalLocation}
                            onChange={handleChange}
                            error={!!formErrors.finalLocation}
                            helperText={formErrors.finalLocation}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="startDate"
                            name="startDate"
                            // label="Start Date"
                            type='date'
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                            value={formData.startDate}
                            onChange={handleChange}
                            error={!!formErrors.startDate}
                            helperText={formErrors.startDate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="finalDate"
                            name="finalDate"
                            // label="Final Date"
                            type='date'
                            fullWidth
                            autoComplete="shipping postal-code"
                            variant="standard"
                            value={formData.finalDate}
                            onChange={handleChange}
                            error={!!formErrors.finalDate}
                            helperText={formErrors.finalDate}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit" sx={{ mt: 3, ml: 1 }}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}
