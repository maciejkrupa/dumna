import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import przedstawienia_01 from '../../static/gallery/przedstawienia_01.jpg';
import przedstawienia_02 from '../../static/gallery/przedstawienia_02.jpg';
import przedstawienia_03 from '../../static/gallery/przedstawienia_03.jpg';
import przedstawienia_04 from '../../static/gallery/przedstawienia_04.jpg';

const  photos = [
  { src: przedstawienia_01, width: 1, height: 2 },
  { src: przedstawienia_02, width: 3, height: 2 },
  { src: przedstawienia_03, width: 3, height: 2 },
  { src: przedstawienia_04, width: 3, height: 2 },
];


class GalleryPostSix extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default GalleryPostSix;

// import React from "react";
// import Gallery from 'react-photo-gallery';

// class ExampleBasic extends React.Component {
//   render(){
//     const photos = [
//       {
//         src: 'https://i.imgur.com/NhRUoOD.jpg',
//         width: 4,
//         height: 3
//       },
//       {
//         src: 'https://i.imgur.com/NhRUoOD.jpg',
//         width: 1,
//         height: 1
//       }
//     ];
//     return (
//       <Gallery photos={photos} />
//     );
//   }
// }

// export default ExampleBasic;