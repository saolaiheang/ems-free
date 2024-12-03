import Sponsor from "../models/sponsor.js";

 const updateSponsor = async (req, res) => {
    try {
      const sponsors = await Sponsor.findByIdAndUpdate(req.params.id,req.body,{new:true});
      console.log(sponsors);
      if (!sponsors)
        return res.status(404).json({ message: "Sponsor not found." });
      res.status(200).json(sponsors);
    } catch (err) {
      console.log(err, "error");
      res.status(500).json({ message: "interal server not found." });
    }
  };

export default updateSponsor;