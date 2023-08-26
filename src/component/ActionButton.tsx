import '../sass/input-data.scss'

const ActionButton = ({
  data, action,
  dynamic_class
}:{
  data: string | number,
  action: () => void,
  dynamic_class: string
}) => {
  return (
    <div  className={`input-data-container ${dynamic_class}`} onClick={action}>
      <span>{data}</span>
    </div>
  )
}

export default ActionButton