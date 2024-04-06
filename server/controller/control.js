import model from "../model/model.js"

export const getTodo = async (req, res) => {
    const todo = await model.find();
    res.send(todo);
}

export const saveTodo = async (req, res) => {
    const { todo } = req.body;
    try {
        const data = await model.create({ todo })
        console.log("created successfully");
        res.status(201).json("created");
    } catch (error) {
        res.json({ err: error });
    }
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;
    try {
        await model.findByIdAndUpdate(id, { todo })
        res.status(202).json("updated")
    } catch (error) {
        res.status(101).json("failed")
    }
}
export const deleteTodo = async(req,res)=>{
    const {id} = req.params;
    try {
        await model.findByIdAndDelete(id);
        res.status(203).json("deleted")
    } catch (error) {
        res.status(204).json("error occured")
    }
}

