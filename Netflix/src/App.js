import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = "netflix";

const FavS = () => {
    if(favSeries === "netflix") {
        return <Netflix />
    }
    else {
        return <Amazon/>
    }
}

const App = () => (
    <React.Fragment>

    <h1 className="heading-style">List of top 6 Netflix Series</h1>
    <FavS/>
</React.Fragment>
);
export default App; 