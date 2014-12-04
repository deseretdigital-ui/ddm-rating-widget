var React = require('react/addons');

module.exports = React.createClass({ displayName: 'RatingStars',

  getDefaultProps: function () {
    return {
      size: 5
    }
  },

  handleClick: function (index) {
    var element = this.getDOMNode();
    var childArr = element.childNodes;

    for (var i = 0; i < childArr.length; i++) {
      childArr[i].onclick = function () {
        var elWidth = this.offsetWidth;
        var halfWidth = elWidth / 2;
        var clickPos = event.pageX - this.offsetLeft;

        console.log(this.previousSiblings)
        if (clickPos <= halfWidth) {
          this.className = 'ddm-rating-star ddm-rating-star--half';
        } else {
          this.className = 'ddm-rating-star ddm-rating-star--fill';
        }
      }
    }
  },

  render: function () {
    var stars = [];

    for (var i = 1; i <= this.props.size; i++) {
      stars.push(<span className="ddm-rating-star" onClick={this.handleClick}></span>);
    }

    return (
      <div className="ddm-rating-stars">
        {stars}
      </div>
    );
  }
});
