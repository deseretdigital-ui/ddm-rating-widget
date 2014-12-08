# DDM Rating Widget

A tiny React component for a rating widget.

# Example

Online Demo: http://deseretdigital-ui.github.io/ddm-rating-widget

Before viewing the example code on your local machine, you'll need to run the following commands after cloning:

```shell
$ npm install
$ bower install
$ gulp build
$ open ./example/index.html
```

# Usage

```js
React.render(
  <RatingWidget />,
  document.getElementById('idOfTargetElement')
);
```

# Props

* size (number) - defaults to 5
* onRate (function) - default to an empty function
* startDisabled (boolean) - defaults to false
* initialRating (number) - defaults to 0
* halfRating (boolean) - defaults to false
* hover (boolean) - defaults to true
* className (string) - defaults to an empty string

## size

Default value is five.

This number controls how many rating steps display in the widget. For example, setting this to three would change the widget to only display three stars.

## onRate

Default value is an empty function.

A callback function that's passed the rating selected as its first argument. This allows you to do something custom on your end when a rating is received.

## startDisabled

Default value is false.

Controls whether event listeners are active on the widget. Setting this to false will result in the clicks and mouse move events be ignored. As a result, the widget becomes display only and is no longer interactive.

## initialRating

Default value is 0.

The widget initial display this number of steps selected. If a float is passed as the number and halfRating are enabled, a half star will be displayed if the float rounds up.

## halfRating

Default value is false.

Setting this to true will allow the rating steps to be half filled to display ratings such as 3.5.

## hover

Default value is true.

This setting controls mouse over effects that fills the steps with a temporary rating as the mouse moves over the different steps.

## className

Default value is an empty string.

Additional class names to be added to the rating widget.

# Methods

## enable

Calling this method enables the widget.

## disable

Calling this method disables the widget.
