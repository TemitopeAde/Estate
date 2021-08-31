import React, {useEffect, useState} from 'react';
import ProductHero from '../components/ProductHero';
import ProductSlider from '../components/ProductSlider';
import DetailContent from '../components/DetailsComponent/DetailContent';
import { useParams } from 'react-router';
import { useGlobalContext } from '../Context';
import properties from '../Data/Properties';


const PropertyDetails = () => {
    
    const {
        setState,
        setFloorPlan,
        setImage,
        setArea,
        state,
        area,
        image,
        floorPlan,
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
        amenities,
        setRooms,
        rooms,
        price,
        setPrice
    } = useGlobalContext();

    const {id} = useParams();

    useEffect(() => {
        const newProperty = properties.find((item) => item.id === parseInt(id))
        setState(newProperty.state)
        setFloorPlan(newProperty.floorplan)
        setImage(newProperty.image)
        setArea(newProperty.area)
        setDescription(newProperty.description)
        setLocation(newProperty.location)
        setAmenities(newProperty.amenities)
        setBed(newProperty.bed)
        setFeatures(newProperty.features)
        setpropertyId(newProperty.propertyId)
        setVideo(newProperty.video)
        setCategory(newProperty.category)
        setTitle(newProperty.title)
        setyearBuilt(newProperty.yearBuilt)
        setBath(newProperty.bath)
        setStatus(newProperty.status)
        setDate(newProperty.date)
        setRooms(newProperty.rooms)
        setPrice(newProperty.price)
    },[])

    const propertyDetails = {
        newState: state,
        newArea: area,
        newImage: image,
        newFloorPlan: floorPlan,
        newBed: bed,
        newBath: bath,
        newDescription: description,
        newLocation: location,
        newAmenities: amenities,
        newFeatures: features,
        newCategory: category,
        newDate: date,
        newStatus: status,
        newTitle: title,
        newYearBuilt: yearBuilt,
        newId: propertyId,
        newVideo: video,
        newRooms: rooms,
        newPrice: price
    }

    
    return (
        <div className="details-container">
            <ProductHero />

            <ProductSlider />

            

            <DetailContent {...propertyDetails}  />

        </div>
    )
}

export default PropertyDetails
