const data = {
  images: [],
  getImages: () => {
    return this.images;
  },
  getImage: (id) => {
    return this.images[id];
  },
  addImage: (image) => {
    this.images = [...this.images, image];
  },
};

export default data;
