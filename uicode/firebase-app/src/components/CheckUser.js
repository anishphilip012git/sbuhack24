// import { NextFunction } from "express";
import { db } from "../firebase";

const CheckUser = async (
  req,
  res,
) => {
  if (req.user && !req.user.email?.includes("@")) {
    const querySnapshot = await db
      .collection("users")
      .get();
    if (querySnapshot.docs.length > 0) {
        console.log(querySnapshot)
    //   const userData = querySnapshot.docs[0].data();
    //   req.user.sbuEmail = req.user.email.toLowerCase();
    //   req.user.email = userData.email;
    //   req.user.uid = querySnapshot.docs[0].id;
    //   req.user.user_id = querySnapshot.docs[0].id;
    }
    else{
      res.status(403).send("You are not authorized to access this page.");
      return;
    }
  }
  next();
};

export default CheckUser;
