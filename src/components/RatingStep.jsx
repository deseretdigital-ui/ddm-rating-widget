var React = require('react/addons');

var cx = React.addons.classSet;
var emptyFunction = function() {};

var RatingStep = React.createClass({
  propTypes: {
    step: React.PropTypes.number,
    type: React.PropTypes.oneOf(['empty', 'half', 'whole']),
    temporaryRating: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onMouseMove: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      step: 0,
      type: 'empty',
      temporaryRating: false,
      onClick: emptyFunction,
      onMouseMove: emptyFunction
    }
  },

  handleClick: function(e) {
    this.props.onClick(this.props.step, e);
  },

  handleMouseMove: function(e) {
    this.props.onMouseMove(this.props.step, e);
  },

  render: function() {
    var isIE = document.all && !document.addEventListener;

    var classes = {
      'ddm-rating-widget__step': true,
      'ddm-rating-widget__step--ieFix': isIE,
      'ddm-rating-widget__step--hover': this.props.temporaryRating
    }
    classes['ddm-rating-widget__step--' + this.props.type] = true;

    return (
      <span
        className={cx(classes)}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
      ></span>
    );
  }
});

module.exports = RatingStep;
