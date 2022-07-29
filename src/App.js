import Topbar from "./components/topbar";
import React from "react";
import Firstscreen from "./components/firstscreen";
import Movie from "./components/movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>

      <Topbar />
      <BrowserRouter>
			<Routes>
				<Route path="/" element={<Firstscreen />} />
        <Route path="/filme/:movieId" element={<Movie />} />
			</Routes>
		</BrowserRouter>
    
    </React.Fragment>
    
  );
}

export default App;
