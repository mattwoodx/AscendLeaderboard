import React from 'react';
import logo from './images/ascend_logo.png';
import packlogo from './images/packlife_fav.png'
import './App.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import getTeams, { Team } from './REST/GetRequest';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import TableHead from '@mui/material/TableHead';



function App() {

  const [division, setDivision] = React.useState('HEATS');


  function BasicSelect() {
    const handleChange = (event: SelectChangeEvent) => {
      setDivision(event.target.value as string);
    };
    const style = {dropdownStyle: 
      {
        border: "1px solid black",
        borderRadius: "5%",
        backgroundColor:'lightgrey',
      },
    };


    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{backgroundColor:"rgba(0, 0, 0, 0.7)", minWidth: 150, marginTop: 3, padding: 0, borderRadius: 4,}}>
          <InputLabel sx={{backgroundColor:'rgba(0, 0, 0, 0)', color:'rgb(215, 23, 115)',padding:0, }} id="demo-simple-select-label">Division</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
            value={division}
            sx={{'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgb(215, 23, 115)',
              color: 'rgb(215, 23, 115)',
              borderRadius: 4,
            },
            '.MuiSvgIcon-root ': {
              color: "rgb(215, 23, 115)",
            },
            color:'rgb(215, 23, 115)',
            borderRadius: 4,
            

          }} 
            label="Division"

            MenuProps={{
              PaperProps: {
                sx: {
                  "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: "rgb(215, 23, 115)",
                    color: 'black'
                  },
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "pink"
                  },
                  "& .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: "rgba(215, 23, 115, 0.7)"
                  },
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'

                }
              }
            }}
            onChange={handleChange}
          >
            <MenuItem sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'rgb(215, 23, 115)', margin: 0}} value={'HEATS'}>Heats</MenuItem>
            <MenuItem sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'rgb(215, 23, 115)', margin: 0}} value={'ACE_MALE'}>Ace: Male</MenuItem>
            <MenuItem sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)',color: 'rgb(215, 23, 115)', margin: 0}} value={'ACE_FEMALE'}>Ace: Female</MenuItem>
            <MenuItem sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'rgb(215, 23, 115)', margin: 0}} value={'ROOKIE_MALE'}>Rookie: Male</MenuItem>
            <MenuItem sx={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'rgb(215, 23, 115)', margin: 0}} value={'ROOKIE_FEMALE'}>Rookie: Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
  if (division === 'HEATS') {
    return (
      <div className="App">
        <img src={packlogo} alt="Logo" width={49} />
        <img src={logo} alt="Logo" width={150} />
        <BasicSelect />
        <TableContainer component={Paper} className="Table-Cell" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', paddingBottom: 10}}>
        <Table sx={{ minWidth: 20, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginTop: 2, maxWidth: 500}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}}>Heat 1</TableCell>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}} align="left">08:00</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'IMPI'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'DZADDY\'S DUMBBELLS'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Wod and Wine'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Helle'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Red Hot Chili Poitjies'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Just the 2 of us'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Worst pace scenario'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'All Bull'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'5am Warriors'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'J&L'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Last minute dot com'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Just the two of them'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}}>Heat 2</TableCell>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}} align="left">09:00</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Run like the winded'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Boat Carriers'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'HIS AND HERS'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'The Rookies'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'The heavy weights'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Mums on the run'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Pack Life Energy'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Coachellas'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Sasquatchnatch'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Out of my whey'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Rebel Rebels'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Ballies'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}}>Heat 3</TableCell>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}} align="left">10:00</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'CrossFit Confectioners'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Four-P-Emmers'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Ozuo Pals'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'PB & Jelly Legs'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'The Misfits'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Rebel bombers'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Ebony and ivory'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Lethal WOD'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Amino Disrespect'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'The Swareez'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Step Brothers'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Stage 6 load shredding'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}}>Heat 4</TableCell>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}} align="left">11:00</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Likely to walk'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'No mo FOMO'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Not Fast Just Furious'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'The Sassy Margaritas'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'The Howlers'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Twos Peas in a WOD'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Pinky & The Brain'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Team Bad Backs'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Hustle For The Muscle'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Law and Order'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Harry Spotters'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Flex Appeal'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}}>Heat 5</TableCell>
              <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontWeight: 'bold'}} align="left">12:00</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'The Vans'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Kettlebell Kens'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Barbell Barbies'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Jenny & Daitin'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Shelly & Alicia'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Vertical vixens'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Too Tall Too Short'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Shirtless Santas'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'Brotherly Love'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
              <TableRow
                key={'heat'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12}} align="left">
                  {'APEX Angels'}
                </TableCell>
                <TableCell sx={{ color: 'white', borderColor: "#5d5d5d", fontSize: 12 }} align="left" >{''}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );

  } else if (division === 'ACE_MALE'){
    return (
      <div className="App">
        <img src={packlogo} alt="Logo" width={49} />
        <img src={logo} alt="Logo" width={150} />
        <BasicSelect />
        <DenseTable division={division} />
      </div>
    );
  } else if (division === 'ACE_FEMALE') {
    return (
      <div className="App">
        <img src={packlogo} alt="Logo" width={49} />
        <img src={logo} alt="Logo" width={150} />
        <BasicSelect />
        <DenseTable division={division} />
      </div>
    );
  } else if (division === 'ROOKIE_MALE') {
    return (
      <div className="App">
        <img src={packlogo} alt="Logo" width={49} />
        <img src={logo} alt="Logo" width={150} />
        <BasicSelect />
        <DenseTable division={division} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <img src={packlogo} alt="Logo" width={49} />
        <img src={logo} alt="Logo" width={150} />
        <BasicSelect />
        <DenseTable division={division} />
      </div>
    );
  }
  
function DenseTable(props: { division: string}) {

      const [teams, setTeams] = React.useState<Team[]>();

      useEffect(() => {
        getTeams(division).then((team) => {
          setTeams(team);
          console.log(team)
        })
      }, []);
      const first = <FontAwesomeIcon icon={faMedal} style={{ color: 'gold'}}  />
      const second = <FontAwesomeIcon icon={faMedal} style={{ color: 'silver'}}  />
      const third = <FontAwesomeIcon icon={faMedal} style={{ color: 'rgb(205, 127, 50)'}}  />

      if (teams !== undefined) {
        return (
          <TableContainer component={Paper} className="Table-Cell" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}>
            <Table sx={{ minWidth: 20, backgroundColor: 'rgba(0, 0, 0, 0.7)', marginTop: 2, maxWidth: 500}} size="small" aria-label="a dense table">
              <TableBody >
                {teams?.map((team) => (
                  <TableRow
                    key={team.teamName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ color: 'white', borderColor: "#5d5d5d"}} align="left">
                      {(team.position === 1)? first : (team.position === 2) ? second : (team.position === 3) ? third : team.position}
                    </TableCell>
                    <TableCell sx={{ color: 'white', borderColor: "#5d5d5d" }} align="left" >{team.teamName}</TableCell>
                    <TableCell sx={{ color: 'white', borderColor: "#5d5d5d" }} align="left">{(team.minutes >=0) ? team.minutes : '--'}:{ (team.seconds >= 0) ? ((team.seconds < 10) ? ('0' + team.seconds) : (team.seconds)) : '--'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      } else {
        return (
          <CircularColor />
        )
      }
  }
}
function CircularColor() {
  return (
      <CircularProgress sx={{color: 'rgb(215, 23, 115)', marginTop: 15}} />
  );
}

export default App;

