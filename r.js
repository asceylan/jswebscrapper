const axios = require('axios');
const cheerio = require('cheerio');

axios('https://www.peynircibaba.com/bal/')
  .then((response) => {
    const $ = cheerio.load(response.data);
    
    
    const urls0 = $('.one-product .inner .product-info .product-name').each(function(index, value){
        console.log(JSON.stringify(+index+': '+$(value).text()))
      })

      const urls2 = $('.one-product .inner .product-foot .price ').each(function(index, value){
        console.log(JSON.stringify(+index+': '+$(value).text()))
      })

    

  })

  .catch(() => console.log('something went wrong!'))