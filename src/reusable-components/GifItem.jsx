import './Gifitem.css'

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  )
}
