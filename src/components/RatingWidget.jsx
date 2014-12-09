var React = require('react/addons');

var cx = React.addons.classSet;
var supportsTouchEvents = require('../utils/supportsTouchEvents');
var emptyFunction = function() {};

var RatingWidget = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    onRate: React.PropTypes.func,
    startDisabled: React.PropTypes.bool,
    initialRating: React.PropTypes.number,
    halfRating: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    className: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      size: 5,
      onRate: emptyFunction,
      startDisabled: false,
      initialRating: 0,
      halfRating: false,
      hover: true,
      className: ''
    }
  },

  getInitialState: function() {
    return {
      rating: this.props.initialRating,
      tempRating: null,
      disabled: this.props.startDisabled,
      supportsTouchEvents: supportsTouchEvents()
    }
  },

  disable: function() {
    this.setState({'disabled': true});
  },

  enable: function() {
    this.setState({'disabled': false});
  },

  handleClick: function(newRating, e) {
    if (this.state.disabled) {
      return;
    }

    newRating = this.calcHalfRating(newRating, e);
    if (newRating === this.state.rating) {
      newRating = 0;
    }

    this.setState({rating: newRating});
    this.setState({tempRating: null});
    this.props.onRate(newRating);
  },

  handleOnMouseMove: function(newTempRating, e) {
    if (this.state.disabled || !this.props.hover) {
      return;
    }

    newTempRating = this.calcHalfRating(newTempRating, e);
    this.setState({tempRating: newTempRating})
  },

  handleOnMouseLeave: function() {
    this.setState({tempRating: null});
  },

  calcHalfRating: function(newRating, e) {
    if (!this.props.halfRating) {
      return newRating;
    }

    var stepClicked = e.target;
    var stepWidth = stepClicked.offsetWidth;
    var halfWidth = stepWidth / 2;

    var stepClickedRect = stepClicked.getBoundingClientRect()
    var clickPos = e.pageX - (stepClickedRect.left + document.body.scrollLeft);

    if (clickPos <= halfWidth) {
      newRating -= .5;
    }

    return newRating;
  },

  render: function () {
    var ratingSteps = this.renderSteps();

    var classes = {
      'ddm-rating-widget': true,
      'ddm-rating-widget--disabled': this.state.disabled
    }
    classes = cx(classes) + ' ' + this.props.className;

    return (
      <div className={classes} onMouseLeave={this.handleOnMouseLeave}>
        {ratingSteps}
      </div>
    );
  },

  renderSteps: function() {
    var ratingSteps = [];
    var rating = this.state.tempRating || this.state.rating;

    var roundRating = Math.round(rating);
    var ceilRating = Math.ceil(rating);

    var mouseMoveFunction = (this.state.supportsTouchEvents)
      ? emptyFunction
      : this.handleOnMouseMove;

    for (var i = 1; i <= this.props.size; i++) {
      var showWhole = i <= rating;
      var showHalf =
        roundRating == i &&
        rating != i &&
        roundRating == ceilRating &&
        this.props.halfRating
      ;

      var classes = {
        'ddm-rating-widget__step': true,
        'ddm-rating-widget__step--whole': showWhole,
        'ddm-rating-widget__step--half': showHalf,
        'ddm-rating-widget__step--hover': this.state.tempRating
      }
      ratingSteps.push(
        <span
          className={cx(classes)}
          onClick={this.handleClick.bind(this, i)}
          onMouseMove={mouseMoveFunction.bind(this, i)}
          key={"rating-step-" + i}
        ></span>
      );
    }

    return ratingSteps;
  }
});

module.exports = RatingWidget;
