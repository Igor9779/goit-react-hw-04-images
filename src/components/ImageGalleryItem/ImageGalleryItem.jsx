import { ListItem, Photo } from "./ImageGalleryItem.styled"

const ImageGalleryItem = ({src, alt, largeImageURL, openModal}) => {
    return (
            <ListItem onClick={()=> openModal(largeImageURL)}>
                <Photo src={src} alt={alt} />
            </ListItem>
    ) 
}

export default ImageGalleryItem
