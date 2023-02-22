import React from 'react'
import Map from './Map'
import '../components/Map.css'

const Info = () => {
    const routePoints = [
        {
          position: [41.7486, -8.8498],
          title: 'Point A',
          description: 'This is the first point'
        },
        {
          position: [41.749, -8.850],
          title: 'Point B',
          description: 'This is the second point'
        },
        // add more points as needed
      ];

  return (
    <div className='Info-wrapper'>
        <div className="Info-header">
            <h1>THE ROUTE</h1>
        </div>
        <div  className='MapContainer' >

            <Map routePoints={routePoints}/>
        </div>
    </div>
  )
}

export default Info