import React from 'react';
import styles from './HalfTicket.module.scss';
import clock from '../images/clock.png';

export default function HalfTicket(props) {

    const getTime = (time) => {
        return time.split("T")[1].slice(0, 5)
    }

    const getDate = (time) => {
        const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
        const months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
        const separatedDate = time.split('T')[0].split('-')
        let date = new Date(separatedDate[0], separatedDate[1]-1, separatedDate[2])
        return `${date.getDate()} ${months[date.getMonth()]} ${days[date.getDay()]}`
    }

    const getDuration = (time) => {
        return `${Math.floor(time / 60)}ч ${time % 60}мин`
    }
    
    return (
        <div className={styles.wrapperHalfTicket}>
            <div className={styles.departureAndArrival}>
                <div className={styles.departure}>
                    <p>{props.item.cityDep}</p>
                    <p>, {props.item.airportDep} <span className={styles.uidDep}>({props.item.uidDep})</span> <span className={styles.arrow}>→</span></p>
                </div>

                <div className={styles.arrival}>
                    <p>{props.item.cityArrival}</p>
                    <p>, {props.item.airpotArrival} <span className={styles.uidDep}>({props.item.uidArrival})</span></p>
                </div>
            </div>

            <hr/>

            <div className={styles.timeAndDate}>
                <p>{getTime(props.item.departureDate)}<span className={styles.blueDate}> {getDate(props.item.departureDate)}</span></p>
                <div className={styles.duration}>
                    <img className={styles.clock} src={clock}></img>
                    <p>{getDuration(props.item.totalDuration)}</p>
                </div>
                <p><span className={styles.blueDate}>{getDate(props.item.arrivalDate)} </span>{getTime(props.item.arrivalDate)}</p>
            </div>
            
            <div className={styles.timeAndDate}>
                <hr className={styles.lineMin}/>
                <p className={styles.transfer}>{props.item.transfer ? `${props.item.transfer} пересадка` : ''}</p>
                <hr className={styles.lineMin}/>
            </div>
            <p className={styles.airlines}>Рейс выполняет: {props.item.airline}</p>
        </div>
    )
}
