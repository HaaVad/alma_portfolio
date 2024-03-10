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
    const lastFourChars = ref.substring(ref.length - 4);
    const trimmedRef = ref.substring(6, ref.length - 4) + lastFourChars.replace(/-/g, '.');
    return `https://cdn.sanity.io/images/5yt3vrht/production/${trimmedRef}`;
  }

  export {getImageUrl}

  // https://cdn.sanity.io/images/5yt3vrht/production/16d85352a063b3dc81fbedb4245dbb3a1391fabc-1125x1409.jpg
  // https://cdn.sanity.io/images/5yt3vrht/production/16d85352a063b3dc81fbedb4245dbb3a1391fabc.1125x1409.jpg