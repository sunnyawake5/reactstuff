/**
 * Created by sunnyawake on 25/10/15.
 */
'use strict';

var ExampleApp = React.createClass({
    displayName: 'ExampleApp',

    render: function render() {
        var delta = Math.round(this.props.delta / 100);
        var seconds = delta / 10 + (delta % 10 ? '' : '.0');
        var message = 'React has been successfully running for ' + seconds + ' seconds.';
        return React.createElement(
            'p',
            null,
            message
        );
    }

});
var start = new Date().getTime();
setInterval(function () {
    ReactDOM.render(React.createElement(ExampleApp, { delta: new Date().getTime() - start }), document.getElementById('container'));
}, 100);