
import Venues from "../models/venue.js";
const createVenue = async (req, res) => {
    try {
        const { name, location, createBy, updateBy } = req.body;
        if ( !name || !location) {
            return res.status(400).json({ error: "name location  are required" });
        }
        const createVenue = new Venues({
            name,
            location,
            createBy,
            updateBy
        })
        await createVenue.save();
        res.status(200).json({ message: 'Create Venue Successfull', createVenue });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
export default createVenue;