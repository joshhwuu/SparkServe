import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function Looking() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#323C58',
                height: '932px', // Adjust the height as needed
                gap: 30,
            }}
        >
            <LookingFor />
        </div>
    );
}

function LookingFor() {
    const [selectedButton, setSelectedButton] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const buttons = ['Volunteer', 'Remote Work', 'Paid Work', 'Temp. Work', 'Freelance'];

    const handleButtonClick = (index) => {
        if (selectAll) {
            setSelectAll(false);
            setSelectedButton([]);
        } else {
            if (selectedButton.includes(index)) {
                setSelectedButton(selectedButton.filter((button) => button !== index));
            } else {
                setSelectedButton([...selectedButton, index]);
            }
        }
    }

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        setSelectedButton(selectAll ? [] : buttons.map((_, index) => index));
    }

    return (
        <div>
            <StyledLookingFor>looking for...</StyledLookingFor>
            <ButtonContainer>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        variant={selectedButton.includes(index) ? 'contained' : 'outlined'}
                        onClick={() => handleButtonClick(index)}
                        style={{
                            marginRight: '0px',
                            color: '#E9E9E9',
                            borderRadius: '15px'
                        }}
                        size="small"
                    >
                        {button}
                    </Button>
                ))}
            </ButtonContainer>
            <ContinueButton variant="contained" color="primary" LinkComponent={Link} to="/open" endIcon={<ArrowRightAltIcon />}>
                Continue
            </ContinueButton>
            <SwitchContainer>
                <StyledFormControlLabel
                    control={<Switch checked={selectAll} onChange={handleSelectAllChange} />}
                    label="Select All"
                />
            </SwitchContainer>
        </div>
    );
}

const StyledLookingFor = styled.h1`
color: #E9E9E9;
font-family: Lexend;
font-size: 40.218px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const ButtonContainer = styled.div`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-left: 50px
`;

const ContinueButton = styled(Button)`
margin-top: 10px;
`;

const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
    && {
        color: #E9E9E9;
    }
`;

export default Looking;
