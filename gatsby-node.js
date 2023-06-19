const axios = require("axios");

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  try {
    const response = await axios.get("https://www.soulbusinessapp.com/api/v1/get_offers");
    const offers = response.data.data;

    offers.forEach((offer) => {
      const offerNode = {
        ...offer,
        id: offer.id.toString(),
        parent: null,
        children: [],
        internal: {
          type: "Offer",
          content: JSON.stringify(offer),
          contentDigest: offer.id.toString()
        }
      };

      createNode(offerNode);
    });

    const bannerResponse = await axios.get("https://www.soulbusinessapp.com/api/v1/get_banner");
    const banners = bannerResponse.data.data;

    console.log(">>>>>>>>>>", banners);

    banners.forEach((banner) => {
      const bannerNode = {
        ...banner,
        id: banner.id.toString(),
        parent: null,
        children: [],
        internal: {
          type: "Banner",
          content: JSON.stringify(banner),
          contentDigest: banner.id.toString()
        }
      };

      createNode(bannerNode);
    });
  } catch (error) {
    console.error(error);
  }
};
