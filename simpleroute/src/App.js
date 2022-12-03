// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// ! React Router의 주요 컴포넌트들을 이용해 주소에 따른 3가지 뷰( Home, MyPage, Dashboard )를 제공해야 합니다.
// * Home 페이지의 주소 "/"
// * MyPage 페이지의 주소 "/mypage"
// * Dashboard 페이지의 주소 "/dashboard"

function Home() {
  return <h1>Home</h1>;
}

function MyPage() {
  return <h1>MyPage</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Back() {
  const navigate = useNavigate();


  const handleGoBack = () => {
    navigate(-1);
  }

  const handleGoHome = () => {
    navigate('/');
  }

  const handleGoFront = () => {
    navigate(1)
  }

  return (
    <div>
      <button name="back" onClick={handleGoBack}>뒤로</button>
      <button name="home" onClick={handleGoHome}>홈</button>
      <button name="front" onClick={handleGoFront}>앞으로</button>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Back />
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/mypage'>MyPage</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </nav>
        {/* 주소 경로와 아까 만든 3개의 컴포넌트를 연결해 줍니다. */}
        {/* Routes 컴포넌트는 Route 컴포넌트들을 감싸고 있어야 합니다. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
