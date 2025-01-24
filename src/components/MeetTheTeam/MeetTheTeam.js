import React from "react";
import "./MeetTheTeam.css";
import dm from "../../assets/chief.png";


const MeetTheTeam = () => {
  const team = [
  {
    name: "Devinah Manyasi",
    photo: dm,
    role: "Founder & Lead Advocate",
    bio: "Devinah brings years of expertise in media law, corporate governance, and advocacy for justice."
  },
];
  return (
    <section className="meet-the-team">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            photo={member.photo}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </div>
    </section>
  );
};

const TeamMemberCard = ({ name, photo, role, bio }) => {
  return (
    <div className="team-member-card">
      <img src={photo} alt={`${name}'s`} className="member-photo" />
      <h3>{name}</h3>
      <p className="member-role">{role}</p>
      <p className="member-bio">{bio}</p>
    </div>
  );
};

export default MeetTheTeam;
