const Card = ({ image, title, subtitle, link}) => {
  return (
    <a href={link} className="m-4 block max-w-sm overflow-hidden rounded-lg">
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb-2 text-2xlfont-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium">{subtitle}</p>
        </div>
      </div>
    </a>
  )
}

export default Card