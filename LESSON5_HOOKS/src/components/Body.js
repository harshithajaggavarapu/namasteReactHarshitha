import { useState } from "react";
import { resList } from "../utils/mockData";
import ResContainer from "./ResContainer";
const Body = () => {
    /// normal js variable 
    let restaurentsList = [
        {
            "info": {
                "id": "709828",
                "name": "Rajahmundry Ruchulu",
                "cloudinaryImageId": "4ff50601cfb33331acb57d06f7ddcae3",
                "locality": "Venkataramana Colony",
                "areaName": "Kukatpally",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "South Indian"
                ],
                "avgRating": 3.7,
                "parentId": "253324",
                "avgRatingString": "3.7",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 47,
                    "lastMileTravel": 7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "7.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-15 09:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {

                        },
                        "imageBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=709828",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "762870",
                "name": "Bells N Pepper",
                "cloudinaryImageId": "36ff50e388b6125f8022f68008e17d43",
                "locality": "Kukatpally Circle No 24",
                "areaName": "Miyapur",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Fast Food",
                    "Pizzas",
                    "Burgers",
                    "Snacks"
                ],
                "avgRating": 3.9,
                "parentId": "443366",
                "avgRatingString": "3.9",
                "totalRatingsString": "20+",
                "sla": {
                    "deliveryTime": 65,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "60-65 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-15 07:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {

                        },
                        "imageBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=762870",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "439120",
                "name": "Hotel Swagath Grand - Dhanturi Group of Hotels",
                "cloudinaryImageId": "padaszixbtkymakkbqpr",
                "locality": "Kukatpally",
                "areaName": "Kukatpally",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Tandoor",
                    "Chinese",
                    "Seafood",
                    "Beverages",
                    "Desserts"
                ],
                "avgRating": 4,
                "parentId": "351556",
                "avgRatingString": "4.0",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 64,
                    "lastMileTravel": 6.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "60-65 mins",
                    "lastMileTravelString": "6.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-05-15 11:30:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textExtendedBadges": {

                        },
                        "textBased": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹75 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.6",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
                "link": "swiggy://menu?restaurant_id=439120",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        }
    ];

    // using hooks ( hooks are nothing but normal js utility functions)

    const [restaurentsListHook, setRestaurentsListHook] = useState(resList);
    return (
        <div className="body-container">
            <button className="filter-btn" onClick={() => {
                const filteredList = restaurentsListHook.filter(res => res.info.avgRating > 4)
                setRestaurentsListHook(filteredList)
            }}> Top Rated Restaurents</button>

            <div className="body-res-containers">
                {restaurentsListHook.map((rest) => (<ResContainer key={rest?.info?.id} resData={rest} />))}
            </div>
        </div>)


}

export default Body;