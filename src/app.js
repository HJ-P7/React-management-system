import { Row, Col } from 'antd'
import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'
// import Home from './page/home'
import './style/common.scss'
import {renderRoutes} from 'react-router-config'
import routes from './router'

function App(){
    return (
        <div>
            <Row className='container'>
                <Col className='nav-left' span="4">
                    <Nav/>
                </Col>
                <Col className='main' span="20">
                    <Header/>
                    <Row className='content'>
                        {/* <Home/> */}
                        {renderRoutes(routes)}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        </div>
    )
}

export default App;