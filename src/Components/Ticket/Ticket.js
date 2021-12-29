import React from 'react';
import HalfTicket from './HalfTicket/HalfTicket';
import styles from './Ticket.module.scss'

export default function Ticket(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blueHeader}>
                <p className={styles.price}>{props.item.price}</p>
                <p className={styles.underPriceText}>стоимость для одного взрослого пассажира</p>
            </div>
            <HalfTicket item={props.item.forwardTicket}/>
            <HalfTicket item={props.item.backTicket}/>
        </div>
    )
}
