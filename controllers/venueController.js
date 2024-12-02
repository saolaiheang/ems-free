import Vanue from "../models/venue";
const createVenue = async (req, res) => {
    try {
        const { name, location, createBy, updateBy } = req.body;
        if (!id || !name || location || createBy || updateBy) {
            return res.status(400).json({ error: "id, name location  are required" });
        }
        const createVenue = new Vanue({
            name,
            location,
            createBy,
            updateBy

        })
        await createVenue.save();
        res.status(200).json({ message: 'Create Venue Successfull', createVenue });


    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
export default createVenue;