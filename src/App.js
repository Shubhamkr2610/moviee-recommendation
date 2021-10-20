import "./styles.css";
import React, { useState } from "react";
// import ReactDOM from "react-dom";

const buttons = ["Comedy", "Action", "Romance"];

const movies = {
  Comedy: {
    movieName: ["PagalPanti", " Ludo", "Dhamal"],
    rating: ["5*", "4.98*", "4.75*", "4.9*"],
    description: [
      " Pagalpanti is a 2018 Indian Gujarati-language comedy film directed by Jakee Patel featuring Rahul Dev, Mukul Dev, Ali Asgar and Purva Rana.[1] The film was released on 1 Jun, 2018. Foram Mehta and Dinesh Lamba play supporting roles in the film.",
      " Ludo is a 2020 Indian anthology black comedy crime film written and directed by Anurag Basu. It is produced by Bhushan Kumar, Divya Khosla Kumar, Krishan Kumar, Anurag Basu, Tani Basu and Deepshika Bose under the banners of T-Series, Anurag Basu Productions and Ishana Movies.",
      " Dhamaal is a 2007 Indian comedy film directed by Indra Kumar and produced by Ashok Thakeria. The film stars Sanjay Dutt, Ritesh Deshmukh, Arshad Warsi, Aashish Chaudhary and Javed Jaffrey in the lead roles while Asrani, Sanjay Mishra, Vijay Raaz, Manoj Pahwa, Tiku Talsania and Prem Chopra are featured in supporting roles"
    ]
  },
  Action: {
    movieName: ["Bahubali", "Shershah", "Drive"],
    rating: ["5*", "4.9*", "4.5*"],
    description: [
      " Baahubali is a 2015 Indian epic fantasy action film directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works.The film features an ensemble cast including Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah, Ramya Krishna, Sathyaraj, and Nassar.",
      "Shershaah  is a 2021 Indian Hindi-language biographical war film directed by Vishnuvardhan  and written by Sandeep Shrivastava. The film follows the life of Param Vir Chakra-awardee Captain Vikram Batra, from his first posting in the army to his death in the Kargil War. ",
      "Drive is a 2019 Indian Hindi-language action thriller heist film written, edited and directed by Tarun Mansukhani and produced by Hiroo Yash Johar, Karan Johar and Apoorva Mehta under Dharma Productions. Starring Sushant Singh Rajput, Jacqueline Fernandez, Vikramjeet Virk and Sapna Pabbi, the story of the film revolves around the manhunt for an infamous 'King' for a robbery of 300 kilograms of gold"
    ]
  },
  Romance: {
    movieName: ["kabir Singh", "Aashiqui2", "Ramleela"],
    rating: ["4.1*", "4.5*", "4.1*"],
    description: [
      "Kabir Singh is a 2019 Indian Hindi-language romantic drama film written and directed by Sandeep Reddy Vanga and jointly produced by Bhushan Kumar and Krishan Kumar under T-Series Films. A remake of Vanga's own debut Telugu film Arjun Reddy (2017), it stars Shahid Kapoor in the titular role as a surgeon who spirals into self-destruction when his girlfriend, Preeti, played by Kiara Advani, marries someone else.",
      "Aashiqui 2 is a 2013 Indian Hindi-language romantic musical drama film directed by Mohit Suri and produced by Mukesh Bhatt, Bhushan Kumar and Krishan Kumar under the Vishesh Films and T-Series Films.",
      "Ram Leela is a 2013 Indian Hindi-language tragic romance film written and directed by Sanjay Leela Bhansali. The film was jointly produced by Bhansali and Eros International's Kishore Lulla; it stars Deepika Padukone and Ranveer Singh. "
    ]
  }
};
export default function App() {
  const [bikesTypes, setbikesTypes] = useState("Comedy");
  return (
    <div className="Apps">
      <div className="topsItems">
        <span className="bikes">Types of Movies</span>
        <p>
          <span className="first">Some Bollywood Movies </span>
          <span className="middle"> on the basis of </span>{" "}
          <span className="first">Rating</span>
        </p>
      </div>
      <hr></hr>

      <main>
        <div className="firstColm">
          {buttons.map((item, index) => {
            return (
              <button
                className="buttons"
                key={index}
                onClick={() => setbikesTypes(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="listArrangement">
          <ul>
            {movies[bikesTypes].movieName.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <span> {movies[bikesTypes].rating[index]} </span>
                  <hr></hr>
                  <p> {movies[bikesTypes].description[index]}</p>
                  <hr></hr>
                </li>
              );
            })}
          </ul>
          <small>
            Note: *ratings are given under overall <strong>5.</strong>
          </small>
        </div>
      </main>
    </div>
  );
}
