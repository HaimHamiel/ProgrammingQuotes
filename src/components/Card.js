import React from "react";

const Card = ({ value, author, id }) => {
    return (
        <div className='pa4 ba br4 bw2'>
            <img alt="avatar" src={`https://i.pravatar.cc/150?u=${id}`} />
            <div className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                <p className="white f5 f4-m f3-l lh-copy measure mt0">{ value }</p>
                <h2 className="white f6 ttu tracked fs-normal">{ author }</h2>
            </div>
        </div>
    );
}

export default Card;