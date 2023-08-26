import '../sass/screen.scss'
import { image } from '../config/image-configure';
import { selecetdInputArray } from '../constant';
import { useContext } from 'react';
import { DayNightContext } from './DayNightMode';

const Screen = ({selectedData, answer}: {selectedData: selecetdInputArray, answer: number}) => {
    const { prev_action } = image;
    const [day_night] = useContext(DayNightContext)

    const is_nigt_mode = day_night?.background === 'black'

    return (
        <div className={`screen-container ${is_nigt_mode ? 'night-mode-on' : ''}`}>
            <div className='completed-section-ans'>
            <img src={prev_action} alt="previous action" />
            <div>Ans = {answer}</div>
            </div>
            <div className='selected-data'>
                {
                    selectedData.map(
                        (item: string | number) => {
                            return item;
                    })
                }
            </div>
        </div>
    )
}

export default Screen