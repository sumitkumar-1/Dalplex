const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected!');
});

app.use(express.json());
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PATCH, PUT, DELETE',
  optionsSuccessStatus: 204
}
app.use(cors(corsOptions));

const userRouter = require('./routes/user.route');
const sessionRouter = require('./routes/session.route');
const categoriesRouter = require('./routes/categories.route');
const categoriesCourtRouter = require('./routes/categoriescourt.route');
const invoiceRouter = require('./routes/invoice.route');
const membershipRouter = require('./routes/membership.route');
const paymentMethodsRouter = require('./routes/paymentmethods.route');
const profileRouter = require('./routes/profile.route');
const bookingRouter = require('./routes/booking.route');
const cartRouter=require('./routes/cart.route');
const facilitiesRouter = require('./routes/facilities.route');
const tournamentRankingsRouter = require('./routes/tournamentrankings.route');

app.use('/api', sessionRouter);
app.use('/api/users', userRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/categoriescourt', categoriesCourtRouter);
app.use('/api/invoice', invoiceRouter);
app.use('/api/membership', membershipRouter);
app.use('/api/paymentmethod', paymentMethodsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/cart', cartRouter);
app.use('/api/facilities', facilitiesRouter);
app.use('/api/trank', tournamentRankingsRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
