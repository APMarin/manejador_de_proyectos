const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const {expressjwt} = require('express-jwt');
const i18n = require('i18n');

const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users');
const skillsRouter = require('./routes/skills');
const boardsRouter = require('./routes/boards');
const backlogsRouter = require('./routes/backlogs');
const storiesRouter = require('./routes/stories');
const releasesRouter = require('./routes/releases');
const workersRouter = require('./routes/workers');

const uri= config.get("dbChain");
//"mongodb://localhost:27017/scrum";
mongoose.connect(uri);
const db = mongoose.connection;
const app = express();

db.on('open',()=>{
  console.log("Connection successful");
});
db.on('error',()=>{
  console.log("Error: Could not connect to the database.");
});

i18n.configure({
  locales:['es','en'],
  cookie: 'language',
  directory: `${__dirname}/locales`
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

const jwtKey = config.get("secret.key");
//app.use(expressjwt({secret:jwtKey, algorithms:['HS256']})
//   .unless({path:["/login"]}));


app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/users', usersRouter);
app.use('/skills', skillsRouter);
app.use('/boards', boardsRouter);
app.use('/backlogs', backlogsRouter);
app.use('/stories', storiesRouter);
app.use('/releases', releasesRouter);
app.use('/workers', workersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
