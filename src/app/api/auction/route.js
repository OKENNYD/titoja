import { NextResponse } from 'next/server';

export async function GET() {
  let auctions = [
    {
      "bidId": "BID001",
      "name": "Vintage Watch",
      "productId": "PROD123",
      "userId": "USER456",
      "bidAmount": 150.50,
      "currency": "NGN",
      "bidTime": "2023-10-01T12:34:56Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-08T12:34:56Z",
      "paymentMethodId": "PAY123",
      "shippingAddressId": "SHIP456",
      "metadata": {
        "notes": "Interested in the vintage design."
      }
    },
    {
      "bidId": "BID002",
      "name": "Smartphone",
      "productId": "PROD789",
      "userId": "USER789",
      "bidAmount": 450.00,
      "currency": "NGN",
      "bidTime": "2023-10-02T09:12:34Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 500.00,
      "bidIncrement": 10.00,
      "bidExpiry": "2023-10-09T09:12:34Z",
      "paymentMethodId": "PAY789",
      "shippingAddressId": "SHIP789",
      "metadata": {
        "notes": "Auto-bid enabled for this product."
      }
    },
    {
      "bidId": "BID003",
      "name": "Leather Jacket",
      "productId": "PROD101",
      "userId": "USER101",
      "bidAmount": 120.00,
      "currency": "NGN",
      "bidTime": "2023-10-03T14:22:10Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-10T14:22:10Z",
      "paymentMethodId": "PAY101",
      "shippingAddressId": "SHIP101",
      "metadata": {
        "notes": "Gift for a friend."
      }
    },
    {
      "bidId": "BID004",
      "name": "Art Painting",
      "productId": "PROD202",
      "userId": "USER202",
      "bidAmount": 1200.00,
      "currency": "NGN",
      "bidTime": "2023-10-04T16:45:30Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 1500.00,
      "bidIncrement": 50.00,
      "bidExpiry": "2023-10-11T16:45:30Z",
      "paymentMethodId": "PAY202",
      "shippingAddressId": "SHIP202",
      "metadata": {
        "notes": "Limited edition artwork."
      }
    },
    {
      "bidId": "BID005",
      "name": "Gaming Console",
      "productId": "PROD303",
      "userId": "USER303",
      "bidAmount": 300.00,
      "currency": "NGN",
      "bidTime": "2023-10-05T10:15:20Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-12T10:15:20Z",
      "paymentMethodId": "PAY303",
      "shippingAddressId": "SHIP303",
      "metadata": {
        "notes": "For personal use."
      }
    },
    {
      "bidId": "BID006",
      "name": "Designer Handbag",
      "productId": "PROD404",
      "userId": "USER404",
      "bidAmount": 800.00,
      "currency": "NGN",
      "bidTime": "2023-10-06T18:30:45Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 1000.00,
      "bidIncrement": 25.00,
      "bidExpiry": "2023-10-13T18:30:45Z",
      "paymentMethodId": "PAY404",
      "shippingAddressId": "SHIP404",
      "metadata": {
        "notes": "Limited edition handbag."
      }
    },
    {
      "bidId": "BID007",
      "name": "Antique Chair",
      "productId": "PROD505",
      "userId": "USER505",
      "bidAmount": 250.00,
      "currency": "NGN",
      "bidTime": "2023-10-07T11:11:11Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-14T11:11:11Z",
      "paymentMethodId": "PAY505",
      "shippingAddressId": "SHIP505",
      "metadata": {
        "notes": "For home decoration."
      }
    },
    {
      "bidId": "BID008",
      "name": "Smartwatch",
      "productId": "PROD606",
      "userId": "USER606",
      "bidAmount": 200.00,
      "currency": "NGN",
      "bidTime": "2023-10-08T13:45:00Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 250.00,
      "bidIncrement": 5.00,
      "bidExpiry": "2023-10-15T13:45:00Z",
      "paymentMethodId": "PAY606",
      "shippingAddressId": "SHIP606",
      "metadata": {
        "notes": "For fitness tracking."
      }
    },
    {
      "bidId": "BID009",
      "name": "Rare Coin",
      "productId": "PROD707",
      "userId": "USER707",
      "bidAmount": 500.00,
      "currency": "NGN",
      "bidTime": "2023-10-09T15:20:30Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-16T15:20:30Z",
      "paymentMethodId": "PAY707",
      "shippingAddressId": "SHIP707",
      "metadata": {
        "notes": "Collector's item."
      }
    },
    {
      "bidId": "BID010",
      "name": "Luxury Perfume",
      "productId": "PROD808",
      "userId": "USER808",
      "bidAmount": 100.00,
      "currency": "NGN",
      "bidTime": "2023-10-10T17:55:10Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 120.00,
      "bidIncrement": 5.00,
      "bidExpiry": "2023-10-17T17:55:10Z",
      "paymentMethodId": "PAY808",
      "shippingAddressId": "SHIP808",
      "metadata": {
        "notes": "Gift for a loved one."
      }
    },
    {
      "bidId": "BID011",
      "name": "Drone",
      "productId": "PROD909",
      "userId": "USER909",
      "bidAmount": 350.00,
      "currency": "NGN",
      "bidTime": "2023-10-11T19:30:45Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-18T19:30:45Z",
      "paymentMethodId": "PAY909",
      "shippingAddressId": "SHIP909",
      "metadata": {
        "notes": "For aerial photography."
      }
    },
    {
      "bidId": "BID012",
      "name": "Vintage Camera",
      "productId": "PROD010",
      "userId": "USER010",
      "bidAmount": 400.00,
      "currency": "NGN",
      "bidTime": "2023-10-12T20:15:00Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 450.00,
      "bidIncrement": 10.00,
      "bidExpiry": "2023-10-19T20:15:00Z",
      "paymentMethodId": "PAY010",
      "shippingAddressId": "SHIP010",
      "metadata": {
        "notes": "For photography collection."
      }
    },
    {
      "bidId": "BID013",
      "name": "Designer Shoes",
      "productId": "PROD111",
      "userId": "USER111",
      "bidAmount": 180.00,
      "currency": "NGN",
      "bidTime": "2023-10-13T21:00:00Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-20T21:00:00Z",
      "paymentMethodId": "PAY111",
      "shippingAddressId": "SHIP111",
      "metadata": {
        "notes": "For personal use."
      }
    },
    {
      "bidId": "BID014",
      "name": "Electric Scooter",
      "productId": "PROD212",
      "userId": "USER212",
      "bidAmount": 600.00,
      "currency": "NGN",
      "bidTime": "2023-10-14T22:45:30Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 700.00,
      "bidIncrement": 20.00,
      "bidExpiry": "2023-10-21T22:45:30Z",
      "paymentMethodId": "PAY212",
      "shippingAddressId": "SHIP212",
      "metadata": {
        "notes": "For daily commute."
      }
    },
    {
      "bidId": "BID015",
      "name": "Luxury Watch",
      "productId": "PROD313",
      "userId": "USER313",
      "bidAmount": 1200.00,
      "currency": "NGN",
      "bidTime": "2023-10-15T23:30:15Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-22T23:30:15Z",
      "paymentMethodId": "PAY313",
      "shippingAddressId": "SHIP313",
      "metadata": {
        "notes": "For investment purposes."
      }
    },
    {
      "bidId": "BID016",
      "name": "Vintage Record Player",
      "productId": "PROD414",
      "userId": "USER414",
      "bidAmount": 300.00,
      "currency": "NGN",
      "bidTime": "2023-10-16T10:00:00Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 350.00,
      "bidIncrement": 10.00,
      "bidExpiry": "2023-10-23T10:00:00Z",
      "paymentMethodId": "PAY414",
      "shippingAddressId": "SHIP414",
      "metadata": {
        "notes": "For music collection."
      }
    },
    {
      "bidId": "BID017",
      "name": "Designer Sunglasses",
      "productId": "PROD515",
      "userId": "USER515",
      "bidAmount": 150.00,
      "currency": "NGN",
      "bidTime": "2023-10-17T11:45:00Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-24T11:45:00Z",
      "paymentMethodId": "PAY515",
      "shippingAddressId": "SHIP515",
      "metadata": {
        "notes": "For summer use."
      }
    },
    {
      "bidId": "BID018",
      "name": "Smart Home Hub",
      "productId": "PROD616",
      "userId": "USER616",
      "bidAmount": 200.00,
      "currency": "NGN",
      "bidTime": "2023-10-18T12:30:00Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 250.00,
      "bidIncrement": 5.00,
      "bidExpiry": "2023-10-25T12:30:00Z",
      "paymentMethodId": "PAY616",
      "shippingAddressId": "SHIP616",
      "metadata": {
        "notes": "For home automation."
      }
    },
    {
      "bidId": "BID019",
      "name": "Leather Wallet",
      "productId": "PROD717",
      "userId": "USER717",
      "bidAmount": 50.00,
      "currency": "NGN",
      "bidTime": "2023-10-19T13:15:00Z",
      "bidStatus": "active",
      "autoBid": false,
      "maxBidAmount": null,
      "bidIncrement": null,
      "bidExpiry": "2023-10-26T13:15:00Z",
      "paymentMethodId": "PAY717",
      "shippingAddressId": "SHIP717",
      "metadata": {
        "notes": "For everyday use."
      }
    },
    {
      "bidId": "BID020",
      "name": "Wireless Earbuds",
      "productId": "PROD818",
      "userId": "USER818",
      "bidAmount": 120.00,
      "currency": "NGN",
      "bidTime": "2023-10-20T14:00:00Z",
      "bidStatus": "active",
      "autoBid": true,
      "maxBidAmount": 150.00,
      "bidIncrement": 5.00,
      "bidExpiry": "2023-10-27T14:00:00Z",
      "paymentMethodId": "PAY818",
      "shippingAddressId": "SHIP818",
      "metadata": {
        "notes": "For gym use."
      }
    }
  ]
  try {
    return NextResponse.json(auctions);
  } catch (error) {
    console.error('Error fetching auctions:', error);
    return NextResponse.json({ error: 'Failed to fetch auctions' }, { status: 500 });
  }
}