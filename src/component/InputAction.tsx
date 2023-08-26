import '../sass/input-data.scss'

const InputAction = (
    {
        data,
        handleInputAction
    }:{
        data: string | number,
        handleInputAction: (e: string | number) => void
    }
) => {
  return (
    <div className="input-data-container" onClick={() => handleInputAction(data)}>
      <span>{data}</span>
    </div>
  )
}

export default InputAction