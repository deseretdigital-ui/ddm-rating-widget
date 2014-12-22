var React = require('react/addons');

var cx = React.addons.classSet;
var emptyFunction = function() {};

var RatingStep = React.createClass({
  propTypes: {
    step: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf(['empty', 'half', 'whole']),
    temporaryRating: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onMouseMove: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
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
    // ie6-8
    if (document.all && !document.addEventListener) {
      return this.renderAsImg();
    } else {
      return this.renderAsCss();
    }
  },

  renderAsImg: function() {
    var hover = this.props.type !== 'empty' && this.props.temporaryRating ? '-hover': '';
    var imgSrc = require('../images/star-' + this.props.type + hover + '.png');


    var classes = {
      'ddm-rating-widget__step': true,
      'ddm-rating-widget__step--image': true,
    }

    return (
      <img
        src={imgSrc}
        className={cx(classes)}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
      />
    );
  },

  renderAsCss: function() {
    var classes = {
      'ddm-rating-widget__step': true,
      'ddm-rating-widget__step--css': true,
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
