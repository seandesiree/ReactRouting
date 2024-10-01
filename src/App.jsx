import CharacterList from "./characterList";

import CharacterDetails from "./CharacterDetails";
import {Routes, Route} from 'react-router-dom';
import NavigationBar from "./NavigationBar";
import HomePage from "./homePage";
import NotFound from "./NotFound";
import Comic from "./comic";
import "./Appstyles.css";
import CharacterDetailsWrapper from "./characterDetailsWrapper";


function App() {

  
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/comic" element={<Comic/>}/>
        <Route path="/characters" element={<CharacterList/>}/>
        <Route path="/characterdetail/:id" element={<CharacterDetailsWrapper/>} />
        <Route path="/characterdetails" element={<CharacterDetails/>}/>
      </Routes>
      
    </div>
  )
}

export default App