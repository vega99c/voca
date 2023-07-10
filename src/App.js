//App.js
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateDay from "./component/CreateDay";

// 함수형 컴포넌트
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header>
        </Header>
        <Routes>
          <Route path="/" element={<DayList/>}/>            
          <Route path="/day/:day" element={<Day/>}/>            
          <Route path="/create_word" element={<CreateWord/>}/>
          <Route path="/create_day" element={<CreateDay/>}/>
          <Route path="*" element={<EmptyPage/>}/>
        </Routes>        
                
      </div>
    </BrowserRouter>
  );
}

export default App;