import React, {useState, useContext} from 'react';
import properties from './Data/Properties'

const AppContext = React.createContext();



const AppProvider = ({children}) => {

    const [property,setProperty] = React.useState(properties);
    const [state,setState] = useState('states')
    const [area,setArea] = useState('area')
    const [floorPlan,setFloorPlan] = useState(['temi', 'test'])
    const [image,setImage] = useState('')
    const [description,setDescription] = useState('initial')
    const [propertyId,setpropertyId] = useState('23df')
    const [bath,setBath] = useState(1)
    const [yearBuilt,setyearBuilt] = useState(1000)
    const [bed,setBed] = useState(4)
    const [status,setStatus] = useState('rent')
    const [date,setDate] = useState('may 1, 2015')
    const [video,setVideo] = useState('www.youtube.com')
    const [title,setTitle] = useState('title')
    const [category,setCategory] = useState(['test','mean'])
    const [features,setFeatures] = useState(['test','mean'])
    const [location,setLocation] = useState('abuja')
    const [amenities,setAmenities] = useState(['test', 'mean'])
    const [rooms,setRooms] = useState('room')
    const [price,setPrice] = useState(0)
    
    return (
        <AppContext.Provider
            value={{
                setDescription,
                setpropertyId,
                setBath,
                setyearBuilt,
                setBed,
                setStatus,
                setDate,
                setVideo,
                setTitle,
                setCategory,
                setFeatures,
                setLocation,
                setAmenities,
                setState,
                setArea,
                setFloorPlan,
                setImage,
                setRooms,
                price,
                setPrice,
                rooms,
                state,
                area,
                floorPlan,
                image,
                property,
                description,
                propertyId,
                bath,
                yearBuilt,
                bed,
                status,
                date,
                video,
                title,
                category,
                features,
                location,
                amenities
            }}
        
        >
            {children}
        </AppContext.Provider>
    )
};


export const useGlobalContext = () => {
    return useContext(AppContext)
};

export {AppContext, AppProvider}


