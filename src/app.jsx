import React from 'react';
import Countdown from './countdown'

const app = () =>  (
    <div>
        <Countdown name="śniadanie" time="7:00"/>
        <Countdown name="obiad" time="15:00"/>
    </div>
)

export default app