import mongoose from "mongoose";
import express from "express";

const app = express();

const connectDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await mongoose.connect(
        "mongodb+srv://manmeetsinghnss:manmeetsingh@youtubebackendcluster.8dpyer0.mongodb.net/ec2?retryWrites=true&w=majority&appName=YoutubeBackendCluster"
      );

      resolve();
    } catch (error) {
      reject(error);
    }

 
  });
};


app.get("/",(req,res)=>{
    res.send("Hello EC2 Instance Project");
})


app.get("/api/data", (req, res) => {
  res.status(200).json({
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        username: "johndoe123",
        age: 29,
        user_type: "admin",
        address: {
          street: "123 Elm Street",
          city: "Springfield",
          state: "IL",
          zip: "62701",
        },
        phone: "(555) 123-4567",
        isActive: true,
        createdAt: "2024-01-15T08:30:00Z",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        username: "janesmith456",
        age: 34,
        user_type: "user",
        address: {
          street: "456 Oak Avenue",
          city: "Seattle",
          state: "WA",
          zip: "98101",
        },
        phone: "(555) 987-6543",
        isActive: false,
        createdAt: "2023-12-01T12:00:00Z",
      },
      {
        id: 3,
        name: "Michael Brown",
        email: "michael.brown@example.com",
        username: "mikebrown789",
        age: 41,
        user_type: "moderator",
        address: {
          street: "789 Maple Lane",
          city: "Austin",
          state: "TX",
          zip: "73301",
        },
        phone: "(555) 321-7654",
        isActive: true,
        createdAt: "2024-03-20T10:45:00Z",
      },
    ],
    products: [
      {
        id: 101,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 59.99,
        inStock: true,
        rating: 4.5,
        reviews: 1234,
        addedAt: "2024-05-10T15:00:00Z",
      },
      {
        id: 102,
        name: "Smartwatch",
        category: "Wearables",
        price: 199.99,
        inStock: false,
        rating: 4.0,
        reviews: 852,
        addedAt: "2023-11-25T09:30:00Z",
      },
      {
        id: 103,
        name: "Gaming Laptop",
        category: "Computers",
        price: 1299.99,
        inStock: true,
        rating: 4.8,
        reviews: 541,
        addedAt: "2024-07-18T20:00:00Z",
      },
    ],
  });
});
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running at port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
