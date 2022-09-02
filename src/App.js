import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import Layout from "./component/Layout";
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const themeOne = createTheme({
  palette: {
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand'
  }
})
function App() {
  return (
    <ThemeProvider theme={themeOne}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
