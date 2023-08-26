import '../sass/input-data.scss'

const ActionButton = ({data, action}:{data: string | number, action: () => void}) => {
  return (
    <div className="input-data-container" onClick={action}>
      <span>{data}</span>
    </div>
  )
}

export default ActionButton