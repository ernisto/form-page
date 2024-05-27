import { Col, Row, Form } from 'react-bootstrap'
import { Field } from './Field'
import { useState } from 'react'

// config
const fields = [
    { key: 'uf',            name: 'estado',         type: 'string' },
    { key: 'localidade',    name: 'cidade',         type: 'string' },
    { key: 'bairro',        name: 'bairro',         type: 'string' },
    { key: 'logradouro',    name: 'rua/avenida',    type: 'string' },
    {                       name: 'numero',         type: 'number', label: 'numero residencial' },
    {                       name: 'complemento',    type: 'string', tip: 'Requirido caso o endereço corresponda à algum prédio/apartamento' },
]

// component
export const LocationForm = () => {

    const [cep, setCEP] = useState('')
    let fieldStates = fields.map(field => {
        const [value, setValue] = useState('')
        const [isLocked, setIsLocked] = useState(false)
        const onChange = (event: any) => setValue(event.target.value)
        const toComponent = () => Field({value, isLocked, onChange, ...field})
        return { toComponent, value, setValue, isLocked, setIsLocked, ...field }
    })

    const verifyCEP = async () => {

        let result = await fetch(`https://viacep.com.br/ws/${cep}/json/`, { method: 'GET' })
        let data = await result.json()
        
        for (let { key, setValue, setIsLocked } of fieldStates) {
            if (!key) continue
            if (data[key]?.length == 0) return
            setValue(data[key]); setIsLocked(true)
        }
    }
    const onCEPChanged = (event: any) => {
        setCEP(event.target.value)
        for (let { setIsLocked } of fieldStates) setIsLocked(false)
    }
    const toComponent = () => <Form className="flex-column">
        <Row>
            <Col><Field name='nome' type='string'/></Col>
            <Col><Field name='cep' type='zip' onChange={onCEPChanged} tip='Não compartilhe seu endereço com ninguém'/></Col>
        </Row>
        <Row>
            <Col>{fieldStates[0].toComponent()}</Col>
            <Col>{fieldStates[1].toComponent()}</Col>
        </Row>
        <Row>
            <Col>{fieldStates[2].toComponent()}</Col>
            <Col>{fieldStates[3].toComponent()}</Col>
        </Row>
        <Row>
            <Col>{fieldStates[4].toComponent()}</Col>
            <Col>{fieldStates[5].toComponent()}</Col>
        </Row>
    </Form>
    return {toComponent, verifyCEP}
}