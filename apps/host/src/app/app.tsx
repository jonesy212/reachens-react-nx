import { loadRemoteModule } from '@reachens/load-remote-module';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import NxWelcome from './nx-welcome';

const Bookstore = lazy(() => loadRemoteModule('bookstore', './Module'));
const Dashboard = lazy(() => loadRemoteModule('dashboard', './Module'));
const Admin = lazy(() => loadRemoteModule('admin', './Module'));
const Login = lazy(() => loadRemoteModule('login', './Module'));

export function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  
  const handleGoBack = () => {
    navigate(-1); // new line
  };

  const handleGoForward = () => {
    navigate(+1); // new line
  };

  // useEffect(() => {
  //   //check if user is logged in
  //   if (!isLoggedIn) {
  //     // isLoggedIn.current = true;
  //     navigate('/login');
  //   } else {
  //     navigate('/');
  //   }
  // }, [navigate, isLoggedIn]);
  return (
    //removed null and replaced with loading div
    <Suspense fallback={<div>...Loading</div>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookstore">Bookstore</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/admin">Admin</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      {/* //nav buttons*/}
      <button onClick={handleGoBack}> {'<'} </button>
      <button onClick={handleGoForward}> {'>'} </button>

      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/bookstore" element={<Bookstore />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/login" element={<Login />} />

        {/* <Route path="*" element={<Navigate to='/' />} /> */}
      </Routes>

      {isLoggedIn || <button onClick={() => setisLoggedIn(true)}>login</button>}
    </Suspense>
  );
}

export default App;










































// import { loadRemoteModule } from '@reachens/load-remote-module';
// import { lazy, Suspense, useState, ReactNode, FunctionComponent } from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import NxWelcome from './nx-welcome';

// const Bookstore = lazy(() => loadRemoteModule('bookstore', './Module'));
// const Dashboard = lazy(() => loadRemoteModule('dashboard', './Module'));
// const Admin = lazy(() => loadRemoteModule('admin', './Module'));
// const Login = lazy(() => loadRemoteModule('login', './Module'));


// type LogInProps = {
//   isLoggedIn(): void;
//   name: string;
//   onLogIn: ReactNode;
//   onLogOut: ReactNode;
// }


// const LogIn: FunctionComponent<LogInProps> = ({ onLogIn, onLogOut })=> {
  
// }


// export function App() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setisLoggedIn] = useState(false);

  
//   const handleGoBack = () => {
//     navigate(-1); // new line
//   };

//   const handleGoForward = () => {
//     navigate(+1); // new line
//   };

//   function login() {
//     const nextIsLoggedIn = !isLoggedIn;
//     setisLoggedIn(!isLoggedIn);
//     if (nextIsLoggedIn) {
//       onLogIn()
//     } else {
//       onLogOut()
//     }
//   }
//   // useEffect(() => {
//   //   //check if user is logged in
//   //   if (!isLoggedIn) {
//   //     // isLoggedIn.current = true;
//   //     navigate('/login');
//   //   } else {
//   //     navigate('/');
//   //   }
//   // }, [navigate, isLoggedIn]);
//   return (
//     //removed null and replaced with loading div
//     <Suspense fallback={<div>...Loading</div>}>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/bookstore">Bookstore</Link>
//         </li>

//         <li>
//           <Link to="/dashboard">Dashboard</Link>
//         </li>

//         <li>
//           <Link to="/admin">Admin</Link>
//         </li>

//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//       {/* //nav buttons*/}
//       <button onClick={handleGoBack}> {'<'} </button>
//       <button onClick={handleGoForward}> {'>'} </button>

//       <Routes>
//         <Route path="/" element={<NxWelcome title="host" />} />
//         <Route path="/bookstore" element={<Bookstore />} />

//         <Route path="/dashboard" element={<Dashboard />} />

//         <Route path="/admin" element={<Admin />} />

//         <Route path="/login" element={<Login />} />

//         {/* <Route path="*" element={<Navigate to='/' />} /> */}
//       </Routes>

//       {isLoggedIn || <button onClick={() => setisLoggedIn(true)}>login</button>}
//     </Suspense>
//   );
// }

// export default App;
