import { API, Auth } from "aws-amplify";

import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";

export const hookAddSubscribersNew = async (SubscribersNewToAdd) => {
  console.log(" hookAddSubscribersNew : ", SubscribersNewToAdd);
  try {
    const result = await API.graphql({
      query: mutations.createSubscribersNew,
      variables: {
        input: SubscribersNewToAdd,
      },
    });
    console.log(" hookAddSubscribersNew result: ", result);
    return result?.data?.createSubscribersNew;
  } catch (err) {
    console.log("CATCH ERROR hookAddSubscribersNew result: ", err);
    return null;
  }
};
