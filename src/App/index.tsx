import { Button, Col, Row } from 'react-bootstrap'
import { LocationForm } from './LocationForm'

// component
export const App = () => {

    let form = LocationForm()
    return <Row className='p-4 col-md-auto'>
        <Col>
            <h3 className='mx-5'>REGISTRAR LOCALIZAÇÃO</h3>
            {form.toComponent()}
        </Col>
        <Col className='col-auto bg-light rounded-4 d-flex align-items-center flex-column p-3'>
            <h5><b>RESUMO DO PEDIDO</b></h5>
            <br/>
            <a>Total a pagar: <b>R$100,43</b></a>
            <a>Sub Total a pagar: <b>R$90,85</b></a>
            <Button onClick={form.verifyCEP}className='btn-primary mt-auto'>Verificar</Button>
        </Col>
    </Row>
}