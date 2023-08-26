import Screen from './component/Screen'
import '../src/sass/app.scss'
import InputData from './component/InputData'
import { useState } from 'react';
import InputAction from './component/InputAction';
import ActionButton from './component/ActionButton';
import DayNightMode, { DayNightContext } from './component/DayNightMode';
import { dayNightType, selecetdInputArray } from './constant';
import { mathameticalOperation } from './operartion';
import ShowWarning from './component/ShowWarning';
function App() {

  const [dayNight, setDayNight] = useState<dayNightType>({
    background: 'white',
    color: '#494444'
  });
  const [answer, setAnswer] = useState<number>(0);
  const [selectedData, setData] = useState<selecetdInputArray>([0]);
  const [warn, setWarn] = useState<string>('')

  const forCommonOpreation = (): [
    selecetdInputArray,
    boolean,
    string | number
  ]  => {
    const fresh_selected_data =  [...selectedData];
    const islastelementNumber = !!Number(fresh_selected_data[fresh_selected_data.length - 1]);
    const lastElement = fresh_selected_data[fresh_selected_data.length - 1];
    return [fresh_selected_data, islastelementNumber, Number(lastElement) || lastElement]
  } 

  const handleInput = (data: string | number) => {
    let [fresh_selected_data, islastelementNumber, lastElement ] = forCommonOpreation();
    if(islastelementNumber){
      data = Number(fresh_selected_data.pop() +''+ data)
    }else if(
      lastElement === 0
    ) {
      fresh_selected_data.pop();
    } else if(lastElement === ')') {
      fresh_selected_data = [...fresh_selected_data, ' x ']
    }
    setData([...fresh_selected_data, data]);
  }

  const handleInputAction = (data: string | number) => {
    const [fresh_selected_data, islastelementNumber, lastElement ] = forCommonOpreation();
    if(islastelementNumber){
      setData([...fresh_selected_data, data])
    }else if(!islastelementNumber && data === '-'){
      setData([...fresh_selected_data, data])
    }else {
      lastElement !== 0 && lastElement !== ')' && fresh_selected_data.pop();
      if(lastElement !== '(')setData([...fresh_selected_data, data])
    }
  }

  const handleActionDelete = () => {
    setData(prev => {
      prev.pop();
      return [...prev]
    })
  }

  const handleSmallBracketAction = (data: string | number) => {
    const [fresh_selected_data,, lastElement ] = forCommonOpreation();
    const openSmallBracketCount = fresh_selected_data.filter(x => x === '(').length;
    const closeSmallBracketCount = fresh_selected_data.filter(x => x === ')').length;
    if(data === '('){
      lastElement === 0 && fresh_selected_data.pop();
      setData([...fresh_selected_data, data]);
    }
    if(
        data === ')' &&
        openSmallBracketCount > closeSmallBracketCount &&
        (typeof lastElement === 'number' || lastElement === ')')
      ){
      setData([...fresh_selected_data, data]);
    }
  }

  const handleFinalAction = () => {
    const { message, result } = mathameticalOperation(selectedData)
    if(message === 'sucess_full'){
      setAnswer(result);
      setData([0])
    }else {
      setWarn('You are missing something');
      setTimeout(() => setWarn(''), 1000)
    }
  }

  const {background, color } = dayNight;
  const is_nigt_mode = dayNight?.background === 'black'
  return (
    <DayNightContext.Provider value={[dayNight,setDayNight]}>
      <div className='app-class' style={{backgroundColor: background, color}}>
        <div className='sub-content'>
          <DayNightMode />
          { 
            warn && <ShowWarning message={warn}/>
          }
        </div>
        <Screen selectedData={selectedData} answer={answer}/>
        <div className='input-field'>
            <InputAction dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={'('} handleInputAction={handleSmallBracketAction}/>
            <InputAction dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={')'} handleInputAction={handleSmallBracketAction}/>
            <InputAction dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={' % '} handleInputAction={handleInputAction}/>
            <ActionButton dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={'CE'} action={handleActionDelete}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={7} handleInput={handleInput}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={8} handleInput={handleInput}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={9} handleInput={handleInput}/>
            <InputAction dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={' \u00F7 '} handleInputAction={handleInputAction}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={4} handleInput={handleInput}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={5} handleInput={handleInput}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={6} handleInput={handleInput}/>
            <InputAction dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={' \u00D7 '} handleInputAction={handleInputAction}/>  
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={1} handleInput={handleInput}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={2} handleInput={handleInput}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={3} handleInput={handleInput}/>
            <InputAction dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={' \u2212 '} handleInputAction={handleInputAction}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={0} handleInput={handleInput}/>
            <InputData dynamic_class={is_nigt_mode ? 'numeric-act-night' : 'numeric-act'} data={'.'} handleInput={handleInput}/>
            <ActionButton dynamic_class={'submit-action'} data={'='} action={handleFinalAction}/>
            <InputAction dynamic_class={ is_nigt_mode ? 'opreator-act-night' : 'operator-act'} data={' + '} handleInputAction={handleInputAction}/>
        </div>
      </div>
    </DayNightContext.Provider>
  )
}

export default App
