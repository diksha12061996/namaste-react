import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("div", { id: "Parent" }, [React.createElement("div", { id: "child" },
//     React.createElement("h1", { id: "h1" }, "Hello world")),
// React.createElement("h2", { id: "h2" }, "Hello world2")]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//React element
//const heading= React.createElement("h1",{id:"heading"},"Namaste 🙏")
// const JsxHeading = () => (
//     <h1 id='heading'
//         className='heading' tabIndex='1'>
//         React from JSX
//     </h1>)

// const HeadingComponent = () => (
//     // <React.Fragment>
//     <>
//         <div id='container'>
//             <JsxHeading />
//             <h1 className='heading'>This is React Functional component</h1>
//         </div>
//         <div id='container2'>This is React Functional component1</div>
//     </>
//     // </React.Fragment>
// );


//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING /// Swiggy api
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cjb-BAVSofW0aUBbaO-pB4G3VzLFulx5vw&usqp=CAU' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const styleCard = {
    backgroundColor: "#f0f0f0" // for inline style
}

const resList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "65797",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "uuid": "2ecdca25-3954-4f2e-8d50-4e13e2faf73e",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "r4ufflqojich0r29efvc",
            "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "slaString": "20 MINS",
            "lastMileTravel": 1.2999999523162842,
            "slugs": {
                "restaurant": "leon-grill-koramangala-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
            "locality": "Koramangala",
            "parentId": 371281,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7072319~p=1~eid=00000188-a649-0bca-1062-994100cc012f",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "65797",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "lastMileTravel": 1.2999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "229",
            "name": "Meghana Foods",
            "uuid": "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian",
                "Chinese",
                "Seafood"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 17,
            "minDeliveryTime": 17,
            "maxDeliveryTime": 17,
            "slaString": "17 MINS",
            "lastMileTravel": 1.2999999523162842,
            "slugs": {
                "restaurant": "meghana-foods-5th-block-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
            "locality": "5th Block",
            "parentId": 635,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "229",
                "deliveryTime": 17,
                "minDeliveryTime": 17,
                "maxDeliveryTime": 17,
                "lastMileTravel": 1.2999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "121603",
            "name": "Kannur Food Point",
            "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
            "city": "1",
            "area": "Tavarekere",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
            "cuisines": [
                "Kerala",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "kannur-food-point-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
            "locality": "SG Palya",
            "parentId": 20974,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "121603",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "428",
            "name": "Biryani Pot",
            "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
            "city": "1",
            "area": "Btm Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
            "cuisines": [
                "North Indian",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "slaString": "18 MINS",
            "lastMileTravel": 1.7999999523162842,
            "slugs": {
                "restaurant": "biryani-pot-madiwala-junction-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
            "locality": "Maruti Nagar",
            "parentId": 21798,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "428",
                "deliveryTime": 18,
                "minDeliveryTime": 18,
                "maxDeliveryTime": 18,
                "lastMileTravel": 1.7999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "59593",
            "name": "Al Daaz",
            "uuid": "c189b92c-d842-4595-9a1f-ff85bd67bc2a",
            "city": "1",
            "area": "Hsr Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "rxsvhvcdip9dbfdijzk9",
            "cuisines": [
                "American",
                "Arabian",
                "Chinese",
                "Desserts",
                "Mughlai",
                "North Indian"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 41,
            "minDeliveryTime": 41,
            "maxDeliveryTime": 41,
            "slaString": "41 MINS",
            "lastMileTravel": 4.400000095367432,
            "slugs": {
                "restaurant": "al-daaz-hsr-hsr",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102",
            "locality": "HSR",
            "parentId": 21640,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "59593",
                "deliveryTime": 41,
                "minDeliveryTime": 41,
                "maxDeliveryTime": 41,
                "lastMileTravel": 4.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "295",
            "name": "Kumarakom",
            "uuid": "e1c5475c-e472-4086-a7b0-1f80269f7895",
            "city": "1",
            "area": "HSR Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "xlspjbmytyr5vey0ziot",
            "cuisines": [
                "Kerala",
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 4.599999904632568,
            "slugs": {
                "restaurant": "kumarakom-sector-4-hsr",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Kumarakom The Restaurant No 47, ground floor ,Nanda Nilaya, Near mustard food court,18th Main Road, HSR layout - 560102",
            "locality": "3rd sector",
            "parentId": 576,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7058860~p=7~eid=00000188-a649-0bca-1062-994300cc0700",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "295",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 4.599999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "337335",
            "name": "Kannur food kitchen",
            "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
            "city": "1",
            "area": "BTM Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "a27weqanhnszqiuzsoik",
            "cuisines": [
                "Kerala",
                "Biryani",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 2.5,
            "slugs": {
                "restaurant": "kannur-food-kitchen-btm-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
            "locality": "1st  Stage",
            "parentId": 114756,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "337335",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 2.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "425",
            "name": "Hotel Empire",
            "uuid": "ca14df67-0cfd-482c-a5a5-d0437a2aecce",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 1.2999999523162842,
            "slugs": {
                "restaurant": "hotel-empire-5th-block-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
            "locality": "Koramangala",
            "parentId": 475,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "425",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "lastMileTravel": 1.2999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "418389",
            "name": "Auntie Fung's",
            "uuid": "49b76eeb-4daa-420a-9323-120673a39310",
            "city": "1",
            "area": "Indiranagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "rwwc0xufjuiityzgpfme",
            "cuisines": [
                "Chinese",
                "Thai",
                "Asian"
            ],
            "tags": [],
            "costForTwo": 60000,
            "costForTwoString": "₹600 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 5,
            "slugs": {
                "restaurant": "auntie-fung’s-indiranagar-indiranagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO.4009, 1ST FLOOR, 100FT ROAD, HAL 2ND STAGE, INDIRANAGAR BANGALORE, INDIA, Sarvagna Nagar , B.B.M.P East, Karnataka-560008",
            "locality": "HAL 2nd Stage",
            "parentId": 1290,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5500,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5500,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5500",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7085289~p=10~eid=00000188-a649-0bca-1062-994400cc0a06",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "418389",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "56589",
            "name": "Roti-Wala",
            "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
            "city": "1",
            "area": "BTM Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
            "cuisines": [
                "North Indian",
                "Home Food",
                "Thalis",
                "Chinese",
                "Punjabi",
                "South Indian",
                "Ice Cream"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 4,
            "slugs": {
                "restaurant": "roti-wala-lavelle-road-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
            "locality": "2nd Stage",
            "parentId": 415860,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "56589",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 4,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "717421",
            "name": "Paris Panini - Gourmet Sandwiches",
            "uuid": "53979be4-5ee4-43d2-9706-69d08749280b",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "c27da4b0bab4ca71460bdf082cf58ad4",
            "cuisines": [
                "Continental",
                "Pastas",
                "Salads",
                "Desserts",
                "Snacks",
                "Fast Food",
                "French"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
                "restaurant": "paris-panini-–-gourmet-sandwiches-koramangala-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO 35, 4TH B CROSS, KORAMANGALA 5TH BLOCK, BANGALORE, BTM Layout , B.B.M.P South, Karnataka-560095",
            "locality": "BTM Layout",
            "parentId": 21019,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7068637~p=13~eid=00000188-a649-0bca-1062-994500cc0d17",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "717421",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 1.600000023841858,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.6",
            "totalRatings": 20,
            "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "94703",
            "name": "Sri Punjabi Dhaba",
            "uuid": "244943ac-cb6b-439f-9a09-687af66615b1",
            "city": "1",
            "area": "BTM Layout",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "i53hrycmcn2oehrojag0",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Chinese",
                "Kebabs"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 2.5,
            "slugs": {
                "restaurant": "sri-punjabi-dhaba-bangalore-btm",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
            "locality": "Cashier Layout",
            "parentId": 21426,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "94703",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "lastMileTravel": 2.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.1",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "718430",
            "name": "The Pizza Bakery",
            "uuid": "03213eb8-ddf8-4222-a390-49ee5e328d3d",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "36e17e8301598c894fee300b85ed1c7f",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Continental",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 70000,
            "costForTwoString": "₹700 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
                "restaurant": "the-pizza-bakery-koramangala-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "NO 35, 4TH B CROSS, KORAMANGALA 5TH BLOCK, BANGALORE, BTM Layout , B.B.M.P South, Karnataka-560095",
            "locality": "BTM Layout",
            "parentId": 11108,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7068617~p=16~eid=00000188-a649-0bca-1062-994600cc1038",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "718430",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 1.600000023841858,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 20,
            "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "5934",
            "name": "Burger King",
            "uuid": "ac56f2ac-71d3-4978-9513-b3aa68e25463",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "slaString": "21 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
                "restaurant": "burger-king-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Unit No. 1, Davar Atrium, Corporation No. 118, Koramangala Industrial Area 7th Block, Bangalore 560095",
            "locality": "7th Block",
            "parentId": 166,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "5934",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "lastMileTravel": 1.600000023841858,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "223",
            "name": "Truffles",
            "uuid": "8250cc38-4752-4f42-928b-4da5f01e5cbe",
            "city": "1",
            "area": "Koramangala",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "cuisines": [
                "American",
                "Continental",
                "Desserts",
                "Italian"
            ],
            "tags": [],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
                "restaurant": "truffles-ice-spice-5th-block-koramangala",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
            "locality": "5th Block",
            "parentId": 218065,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "223",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 1.600000023841858,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    }]


const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData.data;
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo'
                alt='res-logo' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} </h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>search</div>
            <div className='res-container'>
            {
                resList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
            }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)