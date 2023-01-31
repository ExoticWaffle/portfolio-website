import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic destinations!</h1>
            <div className='cards__containter'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-9.jpg' 
                        text='Explore the hidden waterfall inside my ass'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-2.jpg' 
                        text='Travel through my digestive system on the magic school bus'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;