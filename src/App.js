import React from 'react';
import Sidebar from './Sidebar';
import NavBar from './Nav';
import { Route } from 'react-router-dom';
import User from './Users';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './containers/Home';
import Repositorio from './Repositorio';
import { Col, Container, Row } from 'react-bootstrap';
import Bars from './Bars'

function App() {

  return (
    <Provider store={store}>
      <Bars>
        <Route exact path='/' component={Home} />
        <Route path='/:nameUser' exact component={User} />
        <Route path='/repositories/:repoQuery' exact component={Repositorio} />
      </Bars>

      {/* <Container fluid={true}> */}
        {/*<Row>*/}
        {/*<Col md={12} style={{background: 'red'}}>Nav</Col>*/}
        {/*</Row>*/}
        {/* <Row>
          <div style={{ height: '100%', position: 'absolute' }}>
            <Sidebar />
          </div>
        </Row> */}
      {/* </Container> */}
      {/*/!*<NavBar />*!/*/}
      {/*<div*/}
      {/*style={{*/}
      {/*display: 'flex',*/}
      {/*height: '90vh'*/}
      {/*}}*/}
      {/*>*/}

      
      {/*</div>*/}
    </Provider>
  );
}

export default App;
