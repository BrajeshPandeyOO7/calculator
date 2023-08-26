import '../sass/screen.scss'
import { image } from '../config/image-configure';
import { selecetdInputArray } from '../constant';

const Screen = ({selectedData, answer}: {selectedData: selecetdInputArray, answer: number}) => {
    const { prev_action } = image;

    return (
        <div className="screen-container">
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