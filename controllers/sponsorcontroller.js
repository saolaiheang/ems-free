import Sponsor from "../models/sponsor.js";
const createSponsor = async (req, res) => {
    try {
        const { name, contribution, eventId, createBy, updateBy } = req.body;
        if ( !name) {
            return res.status(400).json({ error: "id, name contribution  are required" });
        }
        const createSponsor = new Sponsor({
            name,
            contribution,
            eventId,
            createBy,
            updateBy

        })
        await createSponsor.save();
        res.status(200).json({ message: 'Create Sponsor Successfull', createSponsor });
        console.log(createSponsor)


    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
        console.log(error)
    }
}
export default createSponsor;


  