// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {detailsList, activePic, isActive} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = detailsList

  const activeStatus = () => {
    activePic(id)
  }

  const tempImg = isActive ? (
    <img
      src={detailsList.imageUrl}
      className="smallImage"
      alt={detailsList.imageAltText}
    />
  ) : (
    <img
      src={detailsList.thumbnailUrl}
      className="smallImageT"
      alt={detailsList.thumbnailAltText}
    />
  )

  return (
    <li className="listItem" onClick={activeStatus}>
      <button type="button" className="btn">
        {/* <img src={imageUrl} className="smallImage" alt={imageAltText} /> */}
        {tempImg}
      </button>
    </li>
  )
}

export default Thumbnail
