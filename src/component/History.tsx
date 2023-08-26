import { selecetdInputArray } from '../constant'
import { image } from '../config/image-configure';
import '../sass/history.scss'
import { useContext, useEffect } from 'react';
import { DayNightContext } from './DayNightMode';

const History = (
    {
        data,
        openClose,
        popupStatus,
        handlePreviousAction
    }: {
        data: [{
            question: selecetdInputArray,
            ans: number
        }] | [],
        openClose: (val: ((prev:boolean) => boolean) | boolean ) => void,
        popupStatus: boolean,
        handlePreviousAction: (data:selecetdInputArray) => void
    }
) => {

    const [day_night] = useContext(DayNightContext);

    useEffect(() => {
        let is_mouse_in = false;
        const element = document.getElementById('_history-box');
        const commonF =(val:boolean) => {
            is_mouse_in = val;
        }
        const clickListner = () => {
            setTimeout(() => {
                if(!is_mouse_in && popupStatus){
                    openClose(false)
                }
            },0)
        }
        const mouseEnterListner = () => {
            commonF(true)
        }
        const mouseLeaveListner = () => {
            commonF(false)
        }
        if(element) {
            element.addEventListener('mouseenter', mouseEnterListner);
            element.addEventListener('mouseleave', mouseLeaveListner);
            addEventListener('click', clickListner);
        }
        return () => {
            removeEventListener('click', clickListner);
            removeEventListener('mouseenter', mouseEnterListner);
            removeEventListener('mouseleave', mouseLeaveListner);
        }
    });

    const { prev_action } = image;
    const is_nigt_mode = day_night?.background === 'black';
    
    return (
    <div className={`history-container ${is_nigt_mode ? 'daryk-mode' : ''} `} id='_history-box'>
        <img src={prev_action} alt="previous action" />
        <div className='history'>
            {
                data.length > 0 && data.map(({question, ans}, index) => {
                    return <div key={index} className='hisotry-row'>
                            <div onClick={() => {
                                openClose(prev => !prev)
                                handlePreviousAction(question)
                            }}>
                                {
                                    question.map(
                                        (item: string | number, ind) => {
                                            return <span key={ind}>{item}</span>
                                    })
                                }
                            </div>
                            <span> = </span>
                            <div onClick={() => {
                                openClose(prev => !prev)
                                handlePreviousAction([ans])
                            }}>
                                {ans}
                            </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default History