import React, {useEffect}from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize";
import './App.css';
import SearchBar from "./components/layout/SearchBar"
import Logs from "./components/logs/Logs"
import AddButton from "./components/layout/AddBtn"
import AddLogModal from "./components/logs/AddLogsModal"
import EditLogModal from "./components/logs/EditLogModal"
import AddTechModal from "./components/techs/addTechModal"
import TechListModal from "./components/techs/TechPeople"
const App = () =>{
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <>
      <SearchBar></SearchBar>
      <div className="container">
        <AddButton></AddButton>
        <AddLogModal></AddLogModal>
        <EditLogModal></EditLogModal>
        <AddTechModal></AddTechModal>
        <TechListModal></TechListModal>
      <Logs></Logs>
      </div>
    
    </>
  );
}

export default App;
