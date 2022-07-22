import { Like, PlayerMusic, Visit } from "../../../Icons/Icons";
import { ListPlayer } from "./PlayerStyles";

const ListPlayers = ({ data }) => {
  return (
    <ListPlayer>
      <ul>
        {data.map((e, i) => (
          <li key={i}>
            <div className="text-list">
              <h5>قیمت میلگرد</h5>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی </p>
              <div className="div-likes">
                <span>
                  109 نظر
                  <Like />
                </span>
                <span>
                  109 بازدید
                  <Visit />
                </span>
              </div>
            </div>
            <button className="play-list">
              <PlayerMusic />
            </button>
          </li>
        ))}
      </ul>
    </ListPlayer>
  );
};

export default ListPlayers;
