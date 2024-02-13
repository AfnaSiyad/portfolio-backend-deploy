const User = require("../models/userModel");

exports.contactInfo = async (req,res)=>{

    const {fullname, email, mobile, subject, message} = req.body;


    try {

        const contact = await User.create({
            fullname,
            email,
            mobile,
            subject,
            message
        });

        if(!contact){
            return res.status(500).json({
                success:false,
                message:"Contact not saved!"
            });
        }

        res.status(201).json({
            success:true,
            message:"Contact saved successfully!"
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}