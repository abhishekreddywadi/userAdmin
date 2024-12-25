import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Circularprogress.css';

class Circularprogress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const percentage = 66;
        return (
            <CircularProgressbar value={percentage} style={{maxWidth:50}} styles={buildStyles({
                rotation: 0.25,
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

export default Circularprogress;