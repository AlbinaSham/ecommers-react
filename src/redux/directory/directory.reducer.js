const INITIAL_STATE ={
    sections: [
      {
        title: 'rings',
        imageUrl: 'image/ring1.jpg',
        imageUrl2: 'image/ring11.jpg',
        id: 1,
        linkUrl: 'shop/rings'
      },
      {
        title: 'earings',
        imageUrl: 'image/earings1.jpg',
        imageUrl2: 'image/earings11.jpg',
        id: 2,
        linkUrl: 'shop/earings'
      },
      {
        title: 'neckplace',
        imageUrl: 'image/necklace1.jpg',
        imageUrl2: 'image/necklace11.jpg',
        id: 3,
        linkUrl: 'shop/neckplace'
      }
 
    ]
  };



  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;