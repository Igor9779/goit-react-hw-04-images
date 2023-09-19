import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import { GalleryList } from "./ImageGallery.styled"

export const ImageGallery = ({images, openModal}) => {
    return (
        <GalleryList>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    alt={tags}
                    openModal={openModal}
                    largeImageURL={largeImageURL}
                />
            ))}
        </GalleryList>
    )
}
