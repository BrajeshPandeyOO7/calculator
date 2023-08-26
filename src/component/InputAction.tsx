import '../sass/input-data.scss'

const InputAction = (
    {
        data,
        handleInputAction,
        dynamic_class
    }:{
        data: string | number,
        handleInputAction: (e: string | number) => void,
        dynamic_class: string
    }
) => {
  return (
    <div className={`input-data-container ${dynamic_class}`} onClick={() => handleInputAction(data)}>
      <span>{data}</span>
    </div>
  )
}

export default InputAction