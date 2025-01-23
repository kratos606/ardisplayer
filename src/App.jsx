import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './App.css'

function IdPage() {
  const params = useParams();
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ardisplay-viewer src={params.id}></ardisplay-viewer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<IdPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
