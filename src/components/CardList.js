import React from 'react';
import Card from './Card';

const CardList = ({ jokes }) => {
    return(
        <div>
            {
                jokes.map((user, i) => {
                        return(
                            <Card
                                key={i}
                                id = {jokes[i].id} 
                                author={jokes[i].author} 
                                value ={jokes[i].en}  
                            />
                        );
                    })
            }
        </div>
    );
}

export default CardList;