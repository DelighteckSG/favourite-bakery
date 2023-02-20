import { Analytics } from "@aws-amplify/analytics";

export async function recordPageView(pageLink, timeout) {
  setTimeout(() => {
    console.log("recordPageView page path   : ", pageLink);
    console.log("recordPageView page timeout   : ", timeout);

    Analytics.autoTrack("pageView", {
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
  }, timeout);
}
