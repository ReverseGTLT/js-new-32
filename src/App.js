import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users/Users";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Users />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
