import React from 'react';
import Sdata from './Sdata';
import { Card } from './Cards';

const Netflix = () => {
return (
    <Card
    key = {Sdata[0].id} 
    imgSrc={Sdata[0].imgSrc}
    title = {Sdata[0].title}
    sname = {Sdata[0].sname}
    link= {Sdata[0].link}
    />
    );
}

export default Netflix;