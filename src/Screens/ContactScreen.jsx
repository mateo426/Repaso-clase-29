import React, { useEffect, useState } from 'react'
import { contacts } from '../data/whatsappData'
import { Link, useNavigate, useParams} from 'react-router-dom'

const ContactsScreen = () => {
    const {contact_id} = useParams()
    const contact_found  = contacts.find(contact => contact.id === Number(contact_id))
    //useNavigate nos devuelve una funcion que nos permite navegar
    const navigate = useNavigate()

    const [counter, setCounter] = useState(1)

    const incrementar = () => {
        setCounter((prevStateCounter) => {
            return prevStateCounter + 1
        } )
    }
    const saludar = () => {
        alert('hola')
    }

    //useEffect nos permite controlar cuando se ejecuta una funcionalidad
    //Es una funcion que recibe 2 parametros
    //1) El efecto o accion, es una funcion que tendra la accion que quedremos controlar
    //2) El array/lista de dependencias (si esta vacio es que solo se ejecuta 1 vez)

    useEffect(
        () => {

            if(!contact_found){
                //SI NO ENCONTRO NINGUN CONTACTO redirecciono a la vista del primer contacto
                //Esto lo hacen si quieren que se carge un contacto al iniciar
            
                navigate(`/contacts/${contacts[0].id}`)
            }
        },
        []
    )
    
    console.log(contact_found)
    
    const goBack = () => {
        navigate(-1)
    }
    const goForward = () => {
        navigate(1)
    }
    return (
        <div>
            <button onClick={goBack}>Back</button>
            <button onClick={goForward}>Ir adelante</button>
            <h1>Lista de contactos</h1>
            <button onClick={incrementar}>incrementar</button>
            <img src='/images/auto-rojo.avif'/>
            <div>
                {
                    contacts.map((contact) => {
                        return (
                            <>
                                <img src={contact.avatar} alt={contact.nombre} width={50} />
                                <Link key={contact.id} to={'/contacts/' + contact.id}>{contact.nombre}</Link>
                                <br/>
                                <hr/>
                            </>
                            
                        )
                    })
                }
            </div>
            <div>
                {
                    contact_found &&
                    <>
                        <h1>Mensajes con {contact_found.nombre}</h1>
                        <div>
                            {
                                contact_found.mensajes.map(mensaje => {
                                    return (
                                        <div>
                                            <h3>{mensaje.emisor}</h3>
                                            <p>{mensaje.texto}</p>
                                            <hr/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default ContactsScreen