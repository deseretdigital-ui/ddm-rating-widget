var React = require('react/addons');
var RatingStep = require('./RatingStep');

var cx = React.addons.classSet;
var emptyFunction = function() {};
var doesSupportTouchEvents = require('../utils/supportsTouchEvents');

var RatingWidget = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    onChange: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    initialRating: React.PropTypes.number,
    halfRating: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    className: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      size: 5,
      onChange: emptyFunction,
      disabled: false,
      initialRating: 0,
      halfRating: false,
      hover: true,
      className: ''
    }
  },

  getInitialState: function() {
    return {
      rating: this.props.initialRating,
      tempRating: null
    }
  },

  handleClick: function(newRating, e) {
    if (this.props.disabled) {
      return;
    }

    newRating = this.calcHalfRating(newRating, e);
    if (newRating === this.state.rating) {
      newRating = 0;
    }

    this.setState({rating: newRating});
    this.setState({tempRating: null});
    this.props.onChange(newRating);
  },

  handleOnMouseMove: function(newTempRating, e) {
    if (
      doesSupportTouchEvents
      || this.props.disabled
      || !this.props.hover
    ) {
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
      'ddm-rating-widget--disabled': this.props.disabled
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

    for (var i = 1; i <= this.props.size; i++) {
      var type = 'empty';

      if (i <= rating) {
        type = 'whole';
      } else if(
        roundRating == i &&
        roundRating == ceilRating &&
        this.props.halfRating
      ) {
        type = 'half';
      }

      ratingSteps.push(
        <RatingStep
          step={i}
          type={type}
          temporaryRating={this.state.tempRating !== null}
          onClick={this.handleClick}
          onMouseMove={this.handleOnMouseMove}
          key={"rating-step-" + i}
        />
      );
    }

    return ratingSteps;
  }
});

module.exports = RatingWidget;
