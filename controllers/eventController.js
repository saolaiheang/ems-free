
import Event from "../models/eventModels.js";


const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default createEvent;

// const getAllEvents = async (req, res) => {
//   try {
//     const event = await Event.find();
//     res.status(200).json(event);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// export default getAllEvents;

// exports.getEventByid = async (req.res) => {
//     try{
//         const event = await  Event.findById (req.params.id);
//         if(!event){
//             return res.status(404).json({message: "Event not found"});
//         }
//         res.status(200).json(event);

//     }catch(eroor){
//         res.status(400).json({error:error.message});
//     }
// };

