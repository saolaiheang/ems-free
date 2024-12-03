
import Venues from "../models/venue.js";
const createVenue = async (req, res) => {
    try {
        const { name, location, createBy, updateBy } = req.body;
        if (!name || !location) {
            return res.status(400).json({ error: "name location  are required" });
        }
        const createVenue = new Venues({
            name,
            location,
            createBy,
            updateBy
        })
        const result = await createVenue.save();
        res.status(200).json({ message: 'Create Venue Successfull', result });
        // const find= await createVenue.findById({}).populate("createBy");
        // console.log(find);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getAllVenues = async (req, res) => {
    try {
        const getAllVenue = await Venues.find();
        if (getAllVenue.length === 0) {
            return res.status(400).json({ message: 'All Venues Not Found' });
        }
        res.status(200).json(getAllVenue);
        console.log(getAllVenue);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
        console.log(error)
    }
}

const getVenueDetail = async (req, res) => {
    try {
        const detailVenue = await Venues.findById(req.params.id);
        if (!detailVenue) {
            return res.status(400).json({ message: 'Not Fuond' })
        }
        res.status(200).json(detailVenue);
        console.log(detailVenue)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server error' })
    }
}

const deleteVenue = async (req, res) => {
    try {
        const deletes = await Venues.findByIdAndDelete(req.params.id);
        if (!deletes) {
            return res.status(400).json({ message: 'Not found' })

        }
        res.status(200).json({ message: 'delete successfully', deletes });
        
    } catch (error) {
        console.log(error)
    }
}
const updateVenue = async (req, res) => {
    try {
        const update = await Venues.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!update) {
            return res.status(400).json({ message: 'Not found' })
        }
        res.status(200).json({ message: 'Update Successfully', update })
    } catch (err) {
        console.log(err)
    }
};
export default { createVenue, getAllVenues, getVenueDetail, deleteVenue,updateVenue };