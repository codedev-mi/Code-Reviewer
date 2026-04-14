require("dotenv").config();

const app = require('./src/app');   // ✅ FIRST define app

const cors = require("cors");
app.use(cors({
  origin: "*"
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
