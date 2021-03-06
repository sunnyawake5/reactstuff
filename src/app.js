/**
 * Created by sunnyawake on 25/10/15.
 */
var ExampleApp=React.createClass({
    render:function(){
        var delta=Math.round(this.props.delta/100);
        var seconds=delta/10+(delta%10?'':'.0');
        var message='React has been successfully running for '+seconds+' seconds.';
        return  <p>{message}</p>;
    }

});

var start=Date.now();

setInterval(function(){
    ReactDOM.render(
        <ExampleApp delta={Date.now()-start}/>,
        document.getElementById('container')
    );
},100);