import axios from "axios";
export const teamMembersData = () => {
  axios
    .get(
      "https://neend-app-content.s3.ap-south-1.amazonaws.com/content/hi/stories_hi.json"
    )
    .then((resp) => console.log("resp", resp))
    .catch((err) => console.log("err", err));
};
