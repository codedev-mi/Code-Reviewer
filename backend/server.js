require("dotenv").config();
const cors = require("cors");
app.use(cors({
  origin: "*"
}));
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
