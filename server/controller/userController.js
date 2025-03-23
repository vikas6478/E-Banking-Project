const userModel = require("../models/userModel")
const MyPass = require("../utils/myPassword")
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const transactionsModel = require("../models/transactionModel");


const registration =async (req,res) =>{
    const { fname, lname, mobile, address, city, email} = req.body;
    const password = MyPass.passGenerate();
   
try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    let cust = await userModel.create({
        firstname:fname,
        lastname:lname,
        mobile:mobile,
        address:address,
        city:city,
        email:email,
        password:hashPassword
    })
  


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vikasraghuvanshi64@gmail.com',
    pass: 'yunc hohv tozy kxog'
  }
});

var mailOptions = {
  from: 'vikasraghuvanshi64@gmail.com',
  to: email,
  subject: 'Account created SuccessFully',
  text: `Hello ${fname}, Your account has been created successfully \n Your password for account is ${password}`
};

await transporter.sendMail(mailOptions);


res.status(200).send("data saved & email Send") 
} 

catch (error) {
    res.status(400).send({msg:"ccc"})
}  
}


const Login = async(req,res)=>{
    const {email,password}= req.body;
    try {
        let Customer = await userModel.findOne({email:email})

    if(!Customer)
    {
        return res.status(400).send("Invalid Email")
    }

    const isMatch = await bcrypt.compare(password, Customer.password);
        if (!isMatch) {
            return res.status(400).send("Invalid Password");
        }

    
    const token = await jwt.sign({id:Customer._id}, process.env.SECRETE_KEY, {expiresIn:"7 days"})
    console.log(token);
    res.send({token, "customer":Customer});
        
    } catch (error) {
        res.status(400).send(error)
    }
}


const AccInfo = async (req,res)=>{
    const {custid} = req.body;
    
    try {

        let Info = await userModel.findById(custid)

        if (!Info) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send(Info);
        
    } catch (error)
     {
        res.status(400).send({message:"Error Loading Data"})
    }
}

const MoneyTransaction = async (req, res) => {
    const { amount, custid, status } = req.body;

    try {
        let transaction = await transactionsModel.create({
            customerid: custid,
            amount: amount,
            status: status
        });

        if (!transaction) {
            return res.status(400).send({ msg: "Transaction Failed!" });
        }

        if (status === "debit") {
            res.status(200).send({ msg: "Withdrawal Successful!" });
        } else {
            res.status(200).send({ msg: "Amount Added Successfully!" });
        }

    } catch (error) {
        res.status(400).send({ msg: "Something went wrong :(" });
    }
};


const BalanceQuiry = async(req,res)=>{
    const { custid } = req.body;
   
    try {
         const Balance = await transactionsModel.find({customerid:custid})
         res.status(200).send({"records":Balance})
    }
    
    catch (error) {
        res.status(400).send({msg:"Error Fetching Data"})
    }
}

const PassReset = async (req, res) => {
    const { custId , oldpassword, newpassword, repassword} = req.body;

    try {
     let Customer = await userModel.findById(custId);

     const passMatch = await bcrypt.compare(oldpassword, Customer.password);
        
     if (!passMatch) {
            return res.status(400).send("Old Password Does Not Matched!");
        }

        
        if(newpassword != repassword)
            {
                return res.status(400).send("New Password Does Not Matched")
            }
            
            const hashPassword = await bcrypt.hash(newpassword,10);
        await userModel.findByIdAndUpdate(custId, {password:hashPassword})
        res.status(200).send("Password Updated Successfully!")
    }
    
    catch (error) {
        res.status(400).send(error)
    }

};

const AccStatement = async (req,res) =>{
    const { custid } = req.body;

    try {
         const Statement = await transactionsModel.find({customerid:custid}).sort({transactionDate:-1}).limit(8)
         const Balance = await transactionsModel.find({customerid:custid})
         res.status(200).send({statement:Statement, balance:Balance})
         
    }
    
    catch (error) {
        res.status(400).send({msg:"Error Fetching Data"})
    }

}

    const Authentication = async(req,res)=>{
    const token = req.header("x-auth-token");
    console.log(token);
    const verify = await jwt.verify(token,process.env.SECRETE_KEY)
    console.log(verify);
    const User = await userModel.findById(verify.id).select("-password")
    res.send(User)
}



module.exports = {
    registration,
    Login,
    Authentication,
    AccInfo,
    MoneyTransaction,
    BalanceQuiry,
    PassReset,
    AccStatement
}