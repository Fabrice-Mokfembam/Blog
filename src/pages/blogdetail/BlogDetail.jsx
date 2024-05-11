import React from "react";
import "./BlogDetail.scss";
import img from "../../assets/remix1.jpg";
import img3 from "../../assets/idea.jpg";

import { FaHeart, FaUser, FaComment } from "react-icons/fa";

function BlogDetail() {
  return (
    <div className="blog_detail_container">
      <h1>
        Rumour Has It: Barcelona, Madrid among seven clubs who want Havertz
      </h1>
      <div className="author_details">
        <img src={img} alt="" />
        <div>
          <h3>Davinci Code</h3>
          <h4>12/03/2024</h4>
        </div>
      </div>

      <img src={img3} alt="" />

      <p>
        Kai Havertz is reportedly wanted by seven of Europe's biggest clubs. The
        Germany and Bayer Leverkusen midfielder has impressed in the Bundesliga,
        sparking interest from numerous clubs. Havertz, 20, is contracted at
        Leverkusen until 2022, but that does not seem to be stopping Europe's
        best and biggest. TOP STORY – BARCELONA, MADRID AMONG SEVEN CLUBS WHO
        WANT HAVERTZ LaLiga giants Barcelona and Real Madrid are two of seven
        clubs who want Kai Havertz, according to Sport Bild. Bayern Munich,
        Liverpool, Chelsea, Manchester City and Manchester United are the other
        clubs interested in Havertz. Havertz made his senior debut at Leverkusen
        in 2016 and has already amassed 121 appearances for the club. ROUND-UP -
        Talks between Zlatan Ibrahimovic and Milan are continuing. Sport
        Mediaset reports the striker wants €3million net until June, while Milan
        are offering €2m, with Ibrahimovic hoping to arrive at his next club by
        mid-December. - Arsenal have started looking at potential replacements
        for under-fire head coach Unai Emery, according to The Daily Telegraph.
        Emery is under pressure after a run of six games without a win at
        Arsenal. Mauricio Pochettino, Massimiliano Allegri and Nuno Espirito
        Santo are reported candidates. - Edinson Cavani is out of contract at
        Paris Saint-Germain at the end of the season and the Uruguayan could be
        set for an MLS move. Cavani's representatives met with LA Galaxy last
        week regarding a potential switch, according to Le10Sport. - Arsenal and
        Lyon are interested in Barcelona defender Samuel Umtiti, reports
        Tuttomercatoweb. The 26-year-old France international has made just
        three LaLiga appearances this season after dealing with injuries. - Out
        of contract at the end of the season, Jan Vertonghen is keen to discuss
        a new deal with Tottenham, according to Sky Sports News. The centre-back
        is reportedly a target for Roma and Bayer Leverkusen. - Inter Miami are
        still eyeing their first coach ahead of their inaugural MLS season in
        2020. The Telegraph reports David Beckham is lining up Nice boss Patrick
        Vieira.
      </p>

      <div className="detail_icons">
        <div>
          <FaHeart className="d_icon" />
        </div>
        <div>
          <FaUser className="d_icon" />
        </div>
        <div>
          <FaComment className="d_icon" />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
