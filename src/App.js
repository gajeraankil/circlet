import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MedicineData from './Components/MedicineData'
import EmployeeData from './Components/EmployeeData'
import Data from './Components/Data'

const App = () => {
  return (
    <>
      <MedicineData />
      <EmployeeData />
      <Data />
    </>
  )
}

export default App