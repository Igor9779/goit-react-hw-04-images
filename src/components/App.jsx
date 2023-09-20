import { useEffect, useState } from "react";
import { fetchPhotos } from "./services/api";
import { animateScroll } from "react-scroll";
import {SearchBar} from "./Searchbar/Searchbar";
import {Loader} from "./Loader/Loader";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import {Button} from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { AppContainer } from "./App.styled";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [id, setId] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(12);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    if (searchQuery === '' || page === 0) return;

    const getPhotos = async () => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await fetchPhotos(searchQuery, page);
        setImages(prevImg => [...prevImg, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / per_page));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [searchQuery, page, per_page]);

  const formSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
    setLoadMore(false);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    scrollOnMoreBtn();
  };

  const scrollOnMoreBtn = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: 'linear',
    });
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => setShowModal(false);

  return (
    <AppContainer>
      <SearchBar onSubmit={formSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loadMore && <Button onLoadMore={onLoadMore} page={page} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </AppContainer>
  );
};

