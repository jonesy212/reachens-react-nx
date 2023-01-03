import styled from 'styled-components';

import { Link, Navigate, Route, useNavigate } from 'react-router-dom';

import { BooksFeature } from '@reachens/books/feature';

import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList
} from '@reachens/ui';

const StyledApp = styled.div`
  // Your style here
`;

export const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/bookstore/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Route path="bookstore/books" element={<BooksFeature />} />
        <Route path="/books" element={<Navigate to="/bookstore/books" />} />
      </Main>
     </>
  );
};

export default App;











 // <StyledApp>
        {/* START: routes 
        These routes and navigation have been generated for you
        Feel free to move and update them to fit your needs 

         <div role="navigation">
        <ul>
          <li>
            <Link to="/bookstore">Books Home</Link>
          </li>
          <li>
            <Link to="/bookstore/books">My Books</Link>
          </li>
          <li>
            <Link to="/bookstore/feature">Featured Books</Link>
          </li>
          <li>
            <Link to="/bookstore/page-2">page 2</Link>
          </li>
          <li>
            <Link to="/bookstore/page-3">page 3</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root. {' '}<Link to="/bookstore/page-2">page 2</Link>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              This is the generated root. {' '}<Link to="/page-3">page 3</Link>
            </div>
          }
        />
        <Route path="/bookstore/feature" element={<BooksFeature />} />

        <Route
          path="/"
          element={
            <div>
              Should show up<Link to="/bookstore">Click here to go back </Link>
          </div>
            }
        />
      </Routes> 
        END OF ROUTES */}
      // </StyledApp>