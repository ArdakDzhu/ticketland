import React from 'react';
import styles from './HalfTicket.module.scss'

export default function HalfTicket(props) {
    console.log(props.item)
    return (
        <div className={styles.wrapperOfHalf}>
            <div className={styles.departureAndarrival}>
                <div className={styles.departure}>
                    <p>{props.item.cityDep}</p>
                    <p>, {props.item.airportDep}</p>
                </div>
                <div className={styles.arrival}>
                    <p>{props.item.cityArrival}</p>
                    <p>{props.item.airpotArrival}</p>
                </div>
            </div>
            <div  className={styles.timeAndDate}>
                <p>{props.item.departureDate}</p>
                <p>{props.item.totalDuration / 60}</p>
                <p>{props.item.arrivalDate}</p>
            </div>
        </div>
    )
}
