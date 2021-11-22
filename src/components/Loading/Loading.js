import React, { useState } from 'react';
import { ClipLoader, GridLoader, PropagateLoader, RingLoader } from 'react-spinners';

const Loading = () => {

    let [color, setColor] = useState("#ffffff");

    return (

        // <div className="d-flex justify-content-center align-items-center my-3 py-5">
        //     <div className="spinner-border text-secondary" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>
        <div className="d-flex justify-content-center align-items-center my-3 py-5">
            <PropagateLoader size={15} />
        </div>

    );
};

export default Loading;