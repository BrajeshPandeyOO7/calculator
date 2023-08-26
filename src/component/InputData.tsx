import '../sass/input-data.scss'

const InputData = ({
  data,
  handleInput,
  dynamic_class
}:{
    data: string | number,
    handleInput: (e: string | number) => void,
    dynamic_class: string
}) => {
  return (
    <div className={`input-data-container ${dynamic_class}`} onClick={() => handleInput(data)}>
      <span>{data}</span>
    </div>
  )
}

export default InputData