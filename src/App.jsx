import { Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/LeftMenu'
import Navbar from './components/Navbar'
import Box from '@mui/material/Box';

function App() {

  return (
    <>
      <Navbar/>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"menu page page page page"`,
        }}
      >
        <Box sx={{ gridArea: 'menu'}}>
          <Menu/>
        </Box>
        <Box sx={{ gridArea: 'page'}}>
          hola
          <Routes >
              
          </Routes>
          
        </Box>
      
      </Box>
    </>
  )
}

export default App
