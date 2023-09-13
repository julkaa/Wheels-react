import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './dropdown.component.scss'

import DropDownIcon from './DropdownIcon.svg'
function CustomIcon() {
    return (
        <img src={DropDownIcon} alt="" />
    )
}

export default function DropDown(props) {

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {;
        if(props.onChange){
            props.onChange(event.target.value);
        }
        setAge(event.target.value);
    };
    const items = props.items != null ?
        props.items.map(i => <MenuItem value={i.value}>{i.title}</MenuItem>) :
        <>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </>
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={CustomIcon}
            >
                <MenuItem value="">
                    { props.defaultTitle!=null?<em>{props.defaultTitle}</em>:<em>Всі</em>}
                </MenuItem>

                {items}
            </Select>
            <FormHelperText></FormHelperText>
        </FormControl>
    )
}