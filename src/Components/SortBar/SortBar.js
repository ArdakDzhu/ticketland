import React from 'react';
import styles from './SortBar.module.scss';
import {useDispatch, useSelector} from 'react-redux'

export default function SortBar() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.mainReducer.data)
    const paginator = useSelector(state => state.mainReducer.paginator)
    const totalDuration = useSelector(state => state.mainReducer.totalDuration)

    const getSortByPriceUp = () => {
        dispatch({
            type: "PRICE_UP"
        })
    }

    const getSortByPriceDown = () => {
        dispatch({
            type: "PRICE_DOWN"
        })
    }

    const getSortByTotalDuration = () => {
        dispatch({
            type: "SORT_DURATION"
        })
    }

    const getSortByMinPrice = (value) => {
        dispatch({
            type: "MIN_PRICE",
            payload: value
        })
    }

    const getSortByMaxPrice = (value) => {
        dispatch({
            type: "MAX_PRICE",
            payload: value
        })
    }

    return (
        <div className={styles.sortWrapper}>
            <div className={styles.sortBar}>
                <h3>Сортировать</h3>
                <input onChange={getSortByPriceUp} type="radio" id="price-up" name="sort" value="price-up"/>
                <label for="price-up">- По возрастанию цены</label><br/>
                <input onChange={getSortByPriceDown} type="radio" id="price-down" name="sort" value="price-down"/>
                <label for="price-down">- По убыванию цены</label><br/>
                <input onChange={getSortByTotalDuration} type="radio" id="duration" name="sort" value="duration"/>
                <label for="duration">- По времени в пути</label>

                <h3>Фильтровать</h3>
                <input id="transfer1" type="checkbox"/>
                <label for="transfer1">- 1 пересадка</label><br/>
                <input id="transfer2" type="checkbox"/>
                <label for="transfer2">- без пересадок</label>

                <h3>Цена</h3>
                <label>От </label>
                <input onChange={(event) => getSortByMinPrice(event.target.value)} className={styles.priceInpt} type="number"/><br/>
                <label>До </label>
                <input onChange={(event) => getSortByMaxPrice(event.target.value)} className={styles.priceInpt2} type="number"/>

                <h3>Авиакомпании</h3>
                <input type="checkbox"/>
                <label> Air France - 23163</label><br/>
                <input type="checkbox"/>
                <label> KLM - 24114</label><br/>
                <input type="checkbox"/>
                <label> Аэрофлот - 31733</label><br/>
                <input type="checkbox"/>
                <label> TURK HAVA - 31587</label><br/>
                <input type="checkbox"/>
                <label> Finnair Oy - 47640</label><br/>
                <input type="checkbox"/>
                <label> Air Baltic - 21909</label><br/>
                <input type="checkbox"/>
                <label> Alitalia S - 32313</label><br/>
                <input type="checkbox"/>
                <label> Pegasus Ha - 47812</label><br/>
                <input type="checkbox"/>
                <label> Brussels A - 25491</label><br/>
                <input type="checkbox"/>
                <label> LOT Polosh - 21049</label><br/>
            </div>
        </div>
    )
}
