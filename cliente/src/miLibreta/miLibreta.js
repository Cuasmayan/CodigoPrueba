import React, {useEffect, useState} from 'react';
import AppBar from '../commonComponents/AppBar';
import Lista from '../commonComponents/lista';
import Crear from '../commonComponents/crear';


export default function MiLibreta() {


    const [libreta, setLibreta] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',   
        celular: '',
        direccion: '',
        cargo: ''
    })

    const [libretas, setLibretas] = useState([])

    const [listUpdated, setListUpdated] = useState(false)

    useEffect(() => {
        const getLibreta = () =>{

            fetch('http://localhost:4000/')
            .then(function(response){
              response.json().then(function(data) {
                setLibretas(data)
              console.log(data);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});

        }
        getLibreta()
        setListUpdated(false)
    }, [listUpdated])

    return(
        <div>
            <AppBar></AppBar>
            <Lista libreta={libretas} setLibreta={setLibreta} libretas={libretas} setListUpdated={setListUpdated}>

            </Lista>

        </div>

        


    )
}

