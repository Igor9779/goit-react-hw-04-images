import { Component } from "react";
import { fetchPhotos } from "./services/api";
import { animateScroll } from "react-scroll";
import {SearchBar} from "./Searchbar/Searchbar";
import {Loader} from "./Loader/Loader";
import {ImageGallery} from "./ImageGallery/ImageGallery";
import {Button} from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { AppContainer } from "./App.styled";

export class App extends Component {
  state = {
    searchQuery: '',
    id: null,
    largeImageURL: 'largeImageURL',
    page: 1,
    per_page: 12,
    images: [],
    isLoading: false,
    loadMore: false,
    error: null,
    showModal:false,
  } 

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.getPhotos(this.state.searchQuery, this.state.page);
    }
  }

  getPhotos = async (query, page) => {
    this.setState({ isLoading: true });
    if (!query) return;
    try {
      const { hits, totalHits } = await fetchPhotos(query, page);
      console.log(hits, totalHits);
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page)
      }))
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  formSubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
      loadMore: false,
    });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    this.scrollOnMoreBtn();
  };

  scrollOnMoreBtn = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: 'linear',
    });
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
    })
  };

  closeModal = () => {
    this.setState({ showModal: false })
  };

  render() {
    const { images, isLoading, loadMore, page, showModal, largeImageURL } = this.state;
    return (
      <AppContainer>
        <SearchBar onSubmit={this.formSubmit} />
        {isLoading ? (
          <Loader />
        ) : (
            <ImageGallery images={images} openModal={this.openModal}/>
        )}
        {loadMore && <Button onLoadMore={this.onLoadMore} page={page} />}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )} 
      </AppContainer>
    );
  }
}
