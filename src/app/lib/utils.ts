interface Image {
    asset?: {
      _ref?: string;
    };
  }

  
  function getImageUrl(image: Image): string {
    if (!image || !image.asset || !image.asset._ref) {
      return ''; 
    }
  
    const ref = image.asset._ref;
    const trimmedRef = ref.substring(6, ref.length - 4);
    return `https://cdn.sanity.io/images/5yt3vrht/production/${trimmedRef}.jpg`;
  }

  export {getImageUrl}