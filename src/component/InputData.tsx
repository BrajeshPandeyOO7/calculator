import '../sass/input-data.scss'

const InputData = ({data, handleInput}:{data: string | number, handleInput: (e: string | number) => void}) => {
  return (
    <div className="input-data-container" onClick={() => handleInput(data)}>
      <span>{data}</span>
    </div>
  )
}

export default InputData