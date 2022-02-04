import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function LocationDetail(props) {
    const { id } = useParams();
    console.log(props);
    const [location, setLocation] = useState();
    console.log(id);

    const fetchLocation = async () => {
        return await fetch("http://localhost:3000/api/v1/locations/"+id)
          .then((res) => {res.json()})
      };

      useEffect(() => {
        const loc = fetchLocation() ;
        console.log(loc);
        setLocation(loc);
        console.log(location);
      }, []);
      


    return (
        <div>
        </div>
    )
}