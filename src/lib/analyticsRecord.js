import { Analytics } from "@aws-amplify/analytics";

export async function recordPageView(pageLink, timeout) {
  setTimeout(async () => {
    console.log("recordPageView page path  ++ : ", pageLink);
    console.log("recordPageView page timeout   : ", timeout);

    await Analytics.autoTrack("pageView", {
      // REQUIRED, turn on/off the auto tracking
      enable: true,
      // OPTIONAL, the event name, by default is 'pageView'
      eventName: "pageView",
      attributes: {
        attr: "attr",
      },
      type: "multiPageApp",
      provider: "AWSPinpoint",
      getUrl: () => {
        // the default function
        return pageLink;
      },
    });

    console.log("recordPageView page return --   : ");
  }, timeout);
}

export async function OrderItemsNow(products) {
  const min = 0;
  const max = 1;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("OrderItemsNow number  : ", rand);

  var order = products[rand];
  console.log("OrderItemsNow order  : ", order);

  var ret = await Analytics.record(
    "_monetization.purchase",
    {
      _currency: "USD",
      _product_id: order.id,
    },
    {
      _item_price: order.price,
      _quantity: 1.0,
    }
  );

  console.log("OrderItemsNow return  Analytics.record: ", ret);
}
