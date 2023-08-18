import React from 'react';
import '../../App.css';
import './Experience.css';


export default function Experience() {
    return(
        <>
        <h1 className='experience'>EXPERIENCE</h1>

        <div style={{ textAlign: "center"}}>
            <h2 style={{ marginTop: "1em", marginBottom: "5px", fontFamily: "Raleway" }}>Software Developer</h2>
            <h4 style={{ marginBottom: "5px", fontFamily: "Raleway" }}>Proax Technologies Ltd.</h4>
            <li style={{ fontFamily: "Raleway" }}> SQL, PHP, STRAPI</li>
            <li style={{ fontFamily: "Raleway" }}>ReactJS, CSS</li>
            <li style={{ fontFamily: "Raleway" }}>ERP System</li>
            <li style={{ fontFamily: "Raleway" }}> Designed and implemented invoicing page with filtering and pagination feature</li>
            <li style={{ fontFamily: "Raleway" }}>Designed and implemented Team page with ability to add and remove users; change user permissions.</li>
            <h2 style={{ marginTop: "1em", marginBottom: "5px", fontFamily: "Raleway" }}>Product Owner</h2>
            <h4 style={{ marginBottom: "5px", fontFamily: "Raleway" }}>Plooto</h4>
            <li style={{ fontFamily: "Raleway" }}> Directed Salesforce Upgrades Project for Customer Service Team; wrote all tickets, coordinated with software developers</li>
            <li style={{ fontFamily: "Raleway" }}>Hosted daily standup, grooming sessions</li>
            <li style={{ fontFamily: "Raleway" }}>Introduced Email Preferences Feature to allow users to have control over what they receive in their inboxes.</li>
            <li style={{ fontFamily: "Raleway" }}> Performed market research and wrote product briefs for Plooto Instant feature, Email Preferences project</li>
            <li style={{ fontFamily: "Raleway" }}>Created External and Internal Feedback channel that syncs with ClickUp to allow clients and company employees to provide feedback and ideas</li>

            <h2 style={{ marginTop: "1em", marginBottom: "5px", fontFamily: "Raleway" }}>Co-Founder</h2>
            <h4 style={{ marginBottom: "5px", fontFamily: "Raleway" }}>Act 4 Impact</h4>
            <li style={{ fontFamily: "Raleway" }}>Donated over $2000 to various charitable organizations including HomesFirst Homeless Shelter, Salalek 5 Primary School of Cambodia, The George Floyd Memorial Fund, and Sunnybrook Hospital.</li>
            <li style={{ fontFamily: "Raleway" }}>Organized tournament buyouts, bubble tea sales events, and online video game tournament to raise awareness and funds for social issues.</li>
            <li style={{ fontFamily: "Raleway" }}> Volunteering at HomesFirst Homeless Shelter, Salalek 5 Primary School of Cambodia</li>

        </div>


    </>);
}