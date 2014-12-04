var React = require('react/addons');

module.exports = React.createClass({ displayName: 'RatingStars',

  getDefaultProps: function () {
    return {
      rating: 0
    }
  },

  handleClick: function (event) {
    var self = this.getDOMNode();
    var clickPos = event.pageX - self.offsetLeft;
    var elWidth = self.offsetWidth;

    if (clickPos >= 0 && clickPos <= 7){
      this.setState({rating:this.props.rating = 0.5})
    } else if (clickPos >=8 && clickPos <= 16) {
      this.setState({rating:this.props.rating = 1})
    } else if (clickPos >=17 && clickPos <= 26) {
      this.setState({rating:this.props.rating = 1.5})
    } else if (clickPos >=27 && clickPos <= 33) {
      this.setState({rating:this.props.rating = 2})
    } else if (clickPos >=34 && clickPos <= 44) {
      this.setState({rating:this.props.rating = 2.5})
    } else if (clickPos >=45 && clickPos <= 51) {
      this.setState({rating:this.props.rating = 3})
    } else if (clickPos >=52 && clickPos <= 62) {
      this.setState({rating:this.props.rating = 3.5})
    } else if (clickPos >=63 && clickPos <= 70) {
      this.setState({rating:this.props.rating = 4})
    } else if (clickPos >=71 && clickPos <= 80) {
      this.setState({rating:this.props.rating = 4.5})
    } else if (clickPos >=81 && clickPos <= 88) {
      this.setState({rating:this.props.rating = 5})
    }
  },

  getClasses: function () {
    var classes = {
      'ddm-rating-stars': true,
      'ddm-rating-stars--0': this.props.rating === 0,
      'ddm-rating-stars--0-5': this.props.rating === 0.5,
      'ddm-rating-stars--1': this.props.rating === 1,
      'ddm-rating-stars--1-5': this.props.rating === 1.5,
      'ddm-rating-stars--2': this.props.rating === 2,
      'ddm-rating-stars--2-5': this.props.rating === 2.5,
      'ddm-rating-stars--3': this.props.rating === 3,
      'ddm-rating-stars--3-5': this.props.rating === 3.5,
      'ddm-rating-stars--4': this.props.rating === 4,
      'ddm-rating-stars--4-5': this.props.rating === 4.5,
      'ddm-rating-stars--5': this.props.rating === 5
    };

    return [
      React.addons.classSet(classes),
      this.props.className
    ].join(' ');

  },

  render: function () {
    return (
      <span className={this.getClasses()} onClick={this.handleClick}></span>
    );
  }
});
