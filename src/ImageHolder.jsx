export default function ImageHolder({ selected, image }) {
  return (
    <img src={URL.createObjectURL(image)} alt={image.name} className={`aspect-video object-contain rounded-lg ${selected ? "scale-[85%]" : "scale-100"} duration-[250ms] transition-transform ease-in-out`} />
  )
}