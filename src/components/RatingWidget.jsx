var React = require('react/addons');

var emptyFunction = function() {};

var RatingWidget = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    onRate: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    initialRating: React.PropTypes.number,
    halfRating: React.PropTypes.bool,
    hover: React.PropTypes.bool,
  },

  getDefaultProps: function () {
    return {
      size: 5,
      onRate: emptyFunction,
      disabled: false,
      initialRating: 0,
      halfRating: false,
      hover: true,
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

    newRating = this.calchalfRating(newRating, e);
    if (newRating === this.state.rating) {
      newRating = 0;
    }

    this.setState({rating: newRating});
    this.setState({tempRating: null});
    this.props.onRate(newRating);
  },

  handleOnMouseMove: function(newTempRating, e) {
    if (this.props.disabled) {
      return;
    }

    if (!this.props.hover) {
      return;
    }

    newTempRating = this.calchalfRating(newTempRating, e);
    this.setState({tempRating: newTempRating})
  },

  handleOnMouseLeave: function() {
    this.setState({tempRating: null});
  },

  calchalfRating: function(newRating, e) {
    var stepClicked = e.target;
    var stepWidth = stepClicked.offsetWidth;
    var halfWidth = stepWidth / 2;
    var clickPos = e.pageX - stepClicked.offsetLeft;

    if (clickPos <= halfWidth && this.props.halfRating) {
      newRating -= .5;
    }

    return newRating;
  },

  render: function () {
    var ratingSteps = [];
    var rating = this.state.tempRating || this.state.rating;

    var roundRating = Math.round(rating);
    var ceilRating = Math.ceil(rating);

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
      ratingSteps.push(<span className={React.addons.classSet(classes)} onClick={this.handleClick.bind(this, i)} onMouseMove={this.handleOnMouseMove.bind(this, i)}></span>);
    }

    return (
      <div className="ddm-rating-widget" onMouseLeave={this.handleOnMouseLeave}>
        {ratingSteps}
      </div>
    );
  }
});

module.exports = RatingWidget;
