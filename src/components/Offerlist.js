import React from 'react';
import Oneoffer from './Oneoffer';
import offersData from '../data/offer.json'; // Ścieżka do pliku JSON
import italyImage from '../assets/italy.jpg';
import franceImage from '../assets/france.jpg';
import greeceImage from '../assets/greece.jpg';
import australiaImage from '../assets/australia.jpg';
import japanImage from '../assets/japan.jpg';
import madagascarImage from '../assets/madagascar.jpg';

const imageMapping = {
    'italy.jpg': italyImage,
    'france.jpg': franceImage,
    'greece.jpg': greeceImage,
    'australia.jpg': australiaImage,
    'japan.jpg': japanImage,
    'madagascar.jpg': madagascarImage
};

const OffersList = () => {
    const offers = offersData.map(offer => ({
        ...offer,
        imgSrc: imageMapping[offer.imgSrc],
    }));

    return (
      <>
            {offers.map(offer => (
                <Oneoffer
                    key={offer.id}
                    title={offer.title}
                    description={offer.description}
                    imgSrc={offer.imgSrc}
                />
            ))}
        </>
    );
};

export default OffersList;
