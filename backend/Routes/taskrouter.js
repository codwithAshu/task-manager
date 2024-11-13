const router=require("express").Router();
const{createtask,fetchalltasks,updateTaskById,deleteTaskById}=require("../Controllers/taskcontroller");

router.get("/",fetchalltasks);

router.post("/",createtask);

router.put("/:id",updateTaskById);

router.delete("/:id",deleteTaskById);

module.exports=router