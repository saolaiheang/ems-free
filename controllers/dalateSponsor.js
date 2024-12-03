import Sponsor from "../models/sponsor.js";
const deleteSponsor = async (req, res) => {
    try {
    //   const { id } = req.params;
      const deletedSponsor = await Sponsor.findOneAndDelete(req.param.id);
  
      if (!deletedSponsor) {
        return res.status(404).json({ msg: 'Sponsor not found' });
      }
  
      res.status(200).json({ msg: 'Match deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  };

export default deleteSponsor;