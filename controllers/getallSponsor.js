// import Sponsor from "../controllers/sponsorcontroller";
import Sponsor from "../models/sponsor.js";

const getAllSponsors = async (req, res) => {
    try {
      const sponsors = await Sponsor.find(); // Fetch all matches from the database
  
      if (sponsors.length === 0) {
        return res.status(404).json({ msg: 'No sponsors found' });
      }
  
      res.status(200).json(sponsors); // Return all matches
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  };

export default getAllSponsors ;