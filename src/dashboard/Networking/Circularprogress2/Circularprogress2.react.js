import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Circularprogress2.css';

class Circularprogress2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const percentage = 80;
        return (
            <CircularProgressbar className="CircularProgressbar2" value={percentage} style={{ width:250, marginLeft: 'auto', marginRight: 'auto' }} styles={buildStyles({
                rotation: 0.0,
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `#1FC96E `,
                textColor: '#f88',
                trailColor: 'rgba(255, 255, 255, 0.1)',
              })} />
        );
    }
}

export default Circularprogress2;