import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   });
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <div class="card" style={{ width: "20rem" }}>
          <div className="m-3">
            <img
              src={data.avatar_url}
              class="card-img-top shadow-lg rounded-circle p-3"
              alt="Git profile picture"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{data.name}</h5>
            <p class="card-text">{data.bio}</p>
            <Link href="#" class="btn btn-outline-primary">
              Followers: {data.followers}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}